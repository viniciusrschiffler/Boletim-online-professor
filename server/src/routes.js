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

//Rota de pegar nome de materias do professor
routes.get('/selectClass/:id', classController.getClassesName)

//Rota pegar nome da materia das turmas do professor 
routes.get('/getSubjectName', classController.getSubjectName)


routes.post('/createStudent', studentController.createStudent)



module.exports = routes;