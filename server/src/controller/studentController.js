const mysqlconnection = require('../connections/connection')

module.exports = {

    async updateStudentsNotes(req, res) {
        let students = req.body;

        let successful = true
        let menssage
        let isAnAllowedValues = true


        function verifyIfIsNull(variable) {
            if (variable == 'null') {
                return null
            } else {
                return variable
            }
        }

        function verifyIfIsAllowed(variable, maxLength) {
            if (variable != null && variable < 0 && variable > maxLength) {
                isAnAllowedValues = false
                successful = false
                menssage = "Valores não permitidos"
            }
        }

        function updateNotes(student) {
            mysqlconnection.query(`UPDATE historico SET nota_av1 = ${student.grade1}, nota_av2 = ${student.grade2}, freq1 = ${student.freq1}, freq2 = ${student.freq2} WHERE id_aluno = '${student.id}' AND id_disciplina = '${students.subjectid}'`, (err, rows, fields) => {
                if (!err) {
                } else {
                    successful = false
                    console.log(err);
                }
            })
        }


        students.students.forEach(student => {

            verifyIfIsAllowed(student.grade1, 10)
            verifyIfIsAllowed(student.grade2, 10)
            verifyIfIsAllowed(student.freq1, 100)
            verifyIfIsAllowed(student.freq2, 100)
        });

        

        if (isAnAllowedValues) {
            students.students.forEach(student => {

                student.grade1 = verifyIfIsNull(student.grade1)
                student.grade2 = verifyIfIsNull(student.grade2)
                student.freq1 = verifyIfIsNull(student.freq1)
                student.freq2 = verifyIfIsNull(student.freq2)
                
                updateNotes(student);
                
            });
        }


        successful ? menssage = "Alunos cadastrados co  sucesso" :
        res.send({
            Successful: successful,
            Menssage: menssage
        })

    },

    async getStudenstsNotes(req, res) {
        const clas = req.params

        mysqlconnection.query(`SELECT * FROM aluno a JOIN historico h ON a.id = h.id_aluno WHERE a.id_turma = '${clas.classid}' AND h.id_disciplina = '${clas.subjectid}'`, (err, rows, fields) => {
            if (!err) {
                res.send(rows)

            } else {
                console.log(err);
            }
        })
    },

}