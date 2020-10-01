// Importando dependencias
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')


//Criando app
const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use('/', require('./src/routes'))
app.use('/', require('./src/controller/teacherController'))


//Abrindo a porta
app.listen(2301)