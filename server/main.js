// Importando dependencias
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv/config');


//Criando app
const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use('/', require('./src/routes'))
app.use('/', require('./src/controller/teacherAuth'))

//Abrindo a porta
app.listen(process.env.PORT)