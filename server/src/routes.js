// Importando dependencias
const express = require('express')
const jwt = require('jsonwebtoken')

const mysqlconnection = require('./connections/connection')
const authConfig = require('./config/auth')


// passando a função router do express para a variavel routes
const routes = express.Router()

// Gerando token de autenticação
function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}


//Criando rotas

// Rota para verificar login do professor e gerar token de altenticação
routes.post('/login', (req, res) => {
    let teacher = req.body

    mysqlconnection.query(`SELECT * FROM login WHERE login = '${teacher.login}' AND senha = '${teacher.senha}'`, (err, rows, fields) => {
        if (!err) {
            if (rows[0]) {
                res.send({ 
                    rows, 
                    token: generateToken({id: rows[0].id_funcionario}) })
            }else{
                res.send(rows)
            }
        }else{
            console.log(err);
        }
    })
})


//****************** SELECIONADO TURMAS E MATÉRIAS DO PROFESSOR ****************** */
routes.get('/selectClass/:id', (req, res) => {
    let teacher = req.params

    mysqlconnection.query(`SELECT d.id, d.id_funcionario, d.nome, p.id_turma, d.sigla, t.nomeclatura 
    FROM disciplina d JOIN periodo p ON d.id = p.id_disciplina JOIN turma t ON t.id = p.id_turma 
    WHERE d.id_funcionario = '${teacher.id}' ORDER BY t.nomeclatura`, (err, rows, fields) => {

        if (!err) {
            res.send(rows)
        }else{
            console.log(err);
        }
    })
})


//Rota pegando alunos do db
routes.get('/students/:classid/:subjectid', (req, res) => {
    const clas = req.params

    mysqlconnection.query(`SELECT * FROM aluno a JOIN historico h ON a.id = h.id_aluno WHERE a.id_turma = '${clas.classid}' AND h.id_disciplina = '${clas.subjectid}'`, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
            
        }else{
            console.log(err);
        }
    })
})

//Rota pegar nome da materia 
routes.get('/getSubjectName', (req, res) => {
    const subject = req.headers

    mysqlconnection.query(`SELECT d.nome FROM disciplina d JOIN historico h ON d.id = h.id_disciplina WHERE h.id_disciplina = '${subject.subjectid}'`, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
            
        }else{
            console.log(err);
        }
    })
})

//Rotas de atualização do db
routes.put('/update', (req, res) => {
    let student = req.body;

    mysqlconnection.query(`UPDATE historico SET nota_av1 = '${student.grade1}', nota_av2 = '${student.grade2}', freq1 = '${student.freq1}', freq2 = '${student.freq2}' WHERE id_aluno = '${student.id}' AND id_disciplina = '${student.subjectid}'`, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }else{
            console.log(err);
        }
    })
})


module.exports = routes;