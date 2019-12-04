const { verify } = require('jsonwebtoken')

module.exports.authenticateUser = async function authenticateUser(req, res, next) {
    const bearerHeader = req.headers['authorization']

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.user = await verifyToken(bearerToken)
        next()
    } else {
        res.sendStatus(403)
    }
}

function verifyToken(token) {
    return await verify(token, `secret`)
}