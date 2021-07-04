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

    async getRatingPeriod(req, res) {

        mysqlconnection.query(`SELECT * FROM periodo_avaliativo`, (err, rows, fields) => {
            if (!err) {

                const beginningPeriod = JSON.stringify(rows[0].data_inicio)
                const endPeriod = JSON.stringify(rows[0].data_fim)
                let betweenPeriod = false


                function formatDate(date) {
                    let splitedDate = date.split('')
                    if (splitedDate.length == 1) {

                        splitedDate.unshift('0')

                        return `${splitedDate[0]}${splitedDate[1]}`
                    } else {
                        return date
                    }
                }

                function verifyIfBetweenPeriod() {
                    if (currentYear >= BeginningPeriodYear && currentYear <= endPeriodYear) {

                        if (currentMonth >= BeginningPeriodMonth && currentMonth <= endPeriodMonth) {
    
                            if (currentDay >= BeginningPeriodDay && currentDay <= endPeriodDay) {
    
                                return true
    
                            }else{
                                return false
                            }
                        }else{
                            return false
                        }
                    }else{
                        return false
                    }
                    
                }

                
                const date = new Date()
                const currentDay = formatDate(String(date.getUTCDate()))
                const currentMonth = formatDate(String(date.getUTCMonth() + 1))
                const currentYear = String(date.getFullYear())

                // console.log("Data Atual", currentDay, currentMonth, currentYear);

                const splitedBeginningPeriod = beginningPeriod.split('')
                console.log(beginningPeriod);
                console.log(splitedBeginningPeriod);
                const BeginningPeriodYear = `${splitedBeginningPeriod[1]}${splitedBeginningPeriod[2]}${splitedBeginningPeriod[3]}${splitedBeginningPeriod[4]}`
                const BeginningPeriodMonth = `${splitedBeginningPeriod[6]}${splitedBeginningPeriod[7]}`
                const BeginningPeriodDay = `${splitedBeginningPeriod[9]}${splitedBeginningPeriod[10]}`

                // console.log("Data de inicio", BeginningPeriodDay, BeginningPeriodMonth, BeginningPeriodYear);

                const splitedendPeriod = endPeriod.split('')
                const endPeriodYear = `${splitedendPeriod[1]}${splitedendPeriod[2]}${splitedendPeriod[3]}${splitedendPeriod[4]}`
                const endPeriodMonth = `${splitedendPeriod[6]}${splitedendPeriod[7]}`
                const endPeriodDay = `${splitedendPeriod[9]}${splitedendPeriod[10]}`

                // console.log("Data de Final", endPeriodDay, endPeriodMonth, endPeriodYear);

                betweenPeriod = verifyIfBetweenPeriod()

                const response = {
                    start: {
                        BeginningPeriodYear: BeginningPeriodYear,
                        BeginningPeriodMonth: BeginningPeriodMonth,
                        BeginningPeriodDay: BeginningPeriodDay,
                    },
                    end: {
                        endPeriodYear: endPeriodYear,
                        endPeriodMonth: endPeriodMonth,
                        endPeriodDay: endPeriodDay
                    },
                    IsInbetweenPeriod: betweenPeriod
                }
                

                res.send(response)
            } else {
                console.log(err);
            }
        })
    },


}