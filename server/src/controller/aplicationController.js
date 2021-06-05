const jwt = require('jsonwebtoken')
const mysqlconnection = require('../connections/connection')
const authConfig = require('../config/auth')


// Gerando token de autenticação
function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}


module.exports = {
    async loginAuthentication(req, res) {

        let teacher = req.body

        mysqlconnection.query(`SELECT * FROM login WHERE login = '${teacher.login}' AND senha = '${teacher.senha}'`, (err, rows, fields) => {
            if (!err) {
                if (rows[0]) {
                    res.send({
                        token: generateToken({ id: rows[0].id_funcionario })
                    })

                } else {
                    res.send(rows)
                }
            } else {
                console.log(err);
            }
        })
    },


}