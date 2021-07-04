const mysql = require('mysql')

// Criando conexão com db
const mysqlconnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})

//Conectando com db
mysqlconnection.connect(err => {
    if (!err) {
        console.log('Conectado com sucesso');
    }else{
        console.log(`Problema na conexão \n Error: ${JSON.stringify(err, undefined, 2)}`);
    }
})


module.exports = mysqlconnection