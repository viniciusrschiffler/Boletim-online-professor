const mysqlconnection = require('../connections/connection')

module.exports = {

    // async updateStudentsNotes(req, res) {
    //     let student = req.body;

    //     mysqlconnection.query(`UPDATE historico SET nota_av1 = '${student.grade1}', nota_av2 = '${student.grade2}', freq1 = '${student.freq1}', freq2 = '${student.freq2}' WHERE id_aluno = '${student.id}' AND id_disciplina = '${student.subjectid}'`, (err, rows, fields) => {
    //         if (!err) {
    //             res.send(rows)
    //         } else {
    //             console.log(err);
    //         }
    //     })
    // }, 

    async getAllStudents(req, res) {
        // mysqlconnection.query(`
        // SELECT 
        // pauta.CODPAUTA, 
        // aluno_has_pauta.ALUNO_RGE,
        // aluno.NOME,
        // notas.NOTA1, notas.NOTA2, notas.NOTA3, notas.RECUPERACAO1, notas.RECUPERACAO2, notas.RECUPERACAO3, 
        // notas.FALTA1, notas.FALTA2, notas.FALTA3, notas.Aula1, notas.Aula2, notas.Aula3,
        // notas.Tarefa1, notas.Tarefa2, notas.Tarefa3, notas.Atitude1, notas.Atitude2, notas.Atitude3,
        // notas.Simulado1, notas.Simulado2
        // FROM
        // pauta, aluno_has_pauta, aluno, notas, turma_aluno
        // WHERE
        // pauta.CODPAUTA = aluno_has_pauta.PAUTA_CODPAUTA 
        // AND aluno_has_pauta.ALUNO_RGE = aluno.RGE 
        // AND pauta.CODPAUTA = notas.CODPAUTA
        // AND notas.RGE = turma_aluno.RGE
        // AND turma_aluno.STATUS = 'ATIVO'
        // AND pauta.DISCIPLINA_CODDISCIPLINA = 1 `, (err, rows, fields) => {
        //     if (!err) {
        //         res.send(rows)
        //     } else {
        //         console.log(err);
        //     }
        // })


        mysqlconnection.query(`
        SELECT *
        FROM
        pauta, notas
        WHERE pauta.CODPAUTA = notas.CODPAUTA
        AND pauta.DISCIPLINA_CODDISCIPLINA = 44 `, (err, rows, fields) => {
            if (!err) {
                res.send(rows)
            } else {
                console.log(err);
            }
        })


    },

}