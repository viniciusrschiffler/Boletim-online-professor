const mysqlconnection = require('../connections/connection')

module.exports = {
    async getAllTeachers(req, res) {
        mysqlconnection.query(`SELECT 
        pauta.CODPAUTA, pauta.TURMA_CODTURMA, 
        funcionario.CODFUNCIONARIO, funcionario.CARGO_CODCARGO, funcionario.NOME, 
        disciplina.CODDISCIPLINA, disciplina.NOMEDISCIPLINA, disciplina.ABREVIACAO, disciplina.CARGAHORARIA, disciplina.HORASREAL 
        FROM 
        pauta, funcionario, disciplina 
        WHERE 
        funcionario.CODFUNCIONARIO = pauta.FUNCIONARIO_CODFUNCIONARIO 
        AND 
        disciplina.CODDISCIPLINA = pauta.DISCIPLINA_CODDISCIPLINA`, (err, rows, fields) => {
            if (!err) {
                res.send(rows)
            } else {
                console.log(err);
            }
        })
    },

}