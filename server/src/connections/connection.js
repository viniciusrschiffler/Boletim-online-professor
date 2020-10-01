const mysql = require('mysql')

// Criando conexão com db
const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tcc01'
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