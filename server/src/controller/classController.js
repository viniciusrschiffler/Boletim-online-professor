const mysqlconnection = require('../connections/connection')

module.exports = {

    async getClassesAndSubjects(req, res) {
        const teacherId = req.headers.teacher_id

        mysqlconnection.query(`
        SELECT 
        disciplina.id, disciplina.sigla, disciplina.nome,
        periodo.id, periodo.id_disciplina, periodo.id_turma,
        turma.id, turma.nomeclatura
        FROM 
        disciplina, periodo, turma 
        WHERE 
        disciplina.id_funcionario = ${teacherId} 
        AND periodo.id_disciplina = disciplina.id 
        AND periodo.id_turma = turma.id `,
            (err, rows, fields) => {
                if (!err) {

                    let organizedRows = []
                    let filterdRows = []


                    rows.forEach(row => {
                        organizedRows.push({
                            id_turma: row.id_turma,
                            nomeclatura: row.nomeclatura,
                            disciplinas: [{
                                id_disciplina: row.id_disciplina,
                                nome: row.nome,
                                sigla: row.sigla,
                            }]
                        })
                    });


                    organizedRows.forEach(organizedRow => {
                        let alreadyExiste = false

                        if (filterdRows.length == 0) {
                            filterdRows.push(organizedRow)
                        }

                        filterdRows.forEach(filterdRow => {
                            if (organizedRow.id_turma == filterdRow.id_turma) {
                                alreadyExiste = true
                            }
                        })


                        if (alreadyExiste) {

                            filterdRows.forEach(filterdRow => {
                                
                                if (organizedRow.id_turma == filterdRow.id_turma && filterdRows.length > 1 ) { // filterdRows maior que 1 porque estamos adicionado a primera turma já com a primeira disciplina 
                                    filterdRow.disciplinas.push(organizedRow.disciplinas[0])
                                }
                            })

                        } else {
                            filterdRows.push(organizedRow)
                        }

                    });


                    res.send(filterdRows)
                } else {
                    console.log(err);
                }
            })
    },

}