import jwt from "jsonwebtoken"

const genAuthToken = (user) => {
    const secretKey = process.env.JWT_SECRET_KEY
    
    const token = jwt.sign({
        _id: user._id, emai: user.emai, name: user.name
    },
    secretKey
    )
    return token
}

module.exports = genAuthToken