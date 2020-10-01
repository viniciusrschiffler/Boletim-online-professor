const express = require('express')

const authMiddleware = require('../middlewares/auth')
const mysqlconnection = require('../connections/connection')

const routes = express.Router()


routes.use(authMiddleware)

routes.get('/teacher', (req, res) => {
    mysqlconnection.query(`SELECT nome FROM funcionario WHERE id = '${req.id_login}'`, (err, rows, fields) => {
        if (!err) {
            res.send({user: req.id_login, name: rows[0].nome})
        }else{
            console.log(err);
        }
    })
})



module.exports = routes