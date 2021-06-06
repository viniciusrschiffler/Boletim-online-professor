const mysqlconnection = require('../connections/connection')

module.exports = {
    async getClassesName(req, res) {
        let teacher = req.params

        mysqlconnection.query(`SELECT d.id, d.id_funcionario, d.nome, p.id_turma, d.sigla, t.nomeclatura 
    FROM disciplina d JOIN periodo p ON d.id = p.id_disciplina JOIN turma t ON t.id = p.id_turma 
    WHERE d.id_funcionario = '${teacher.id}' ORDER BY t.nomeclatura`, (err, rows, fields) => {

            if (!err) {
                res.send(rows)
            } else {
                console.log(err);
            }
        })
    },

    async getSubjectName(req, res) {
        const subject = req.headers

        mysqlconnection.query(`SELECT d.nome FROM disciplina d JOIN historico h ON d.id = h.id_disciplina WHERE h.id_disciplina = '${subject.subjectid}'`, (err, rows, fields) => {
            if (!err) {
                res.send(rows)

            } else {
                console.log(err);
            }
        })
    },
    
}