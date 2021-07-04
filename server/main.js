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

const port = process.env.PORT || 3000

//Abrindo a porta
app.listen(port, function () {
    console.log("servidor aberto na porta ", port);
})