// Importando dependencias
const express = require('express')

const studentController = require('./controller/studentController')
const classController = require('./controller/classController')
const aplicationController = require('./controller/aplicationController')


// passando a função router do express para a variavel routes
const routes = express.Router()



//--------------ROTAS PROFESSOR-------------------

// Rota para verificar login do professor e gerar token de altenticação
routes.post('/login', aplicationController.loginAuthentication)

//Rota pegando alunos do db
routes.get('/students/:classid/:subjectid', studentController.getStudenstsNotes)

//Rotas de atualização de nod=tas do anulo
routes.put('/update', studentController.updateStudentsNotes )

// Rota para pegar Turmas e Disciplinas lessionadas
routes.get('/getClassesAndSubjects', classController.getClassesAndSubjects)


module.exports = routes;