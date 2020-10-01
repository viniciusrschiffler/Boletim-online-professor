const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).send({ error: 'No token provided' })
    }else{
        const parts = authHeader.split(' ')

        if (!parts.length === 2) {
            return res.status(401).send({ error: 'Token error' })
        }else{
            const [ scheme, token ] = parts

            if (!/^Bearer$/i.test(scheme)) {
                return res.status(401).send({ error: 'Token malformatted' })
            }else{

                jwt.verify(token, authConfig.secret, (err, decoded) => {
                    if (err) {
                        return res.status(401).send({ error: 'Token invalid' })
                    }else{
                        req.id_login = decoded.id
                        return next()
                    }
                })
            }
        }
    }

}