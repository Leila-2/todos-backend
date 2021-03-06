const { User, schemas } = require('../../models/users')
const CreateError = require("http-errors");
const bcrypt = require('bcryptjs')
const signup = async (req, res, next) => {
    try {
        const { error } = schemas.signup.validate(req.body)
        if (error) {
            throw new CreateError(400, error.message)
        }
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (user) {
            throw new CreateError(409, 'Email in use')
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        await User.create({ email, password: hashPassword })
        res.status(201).json({
            user: {
                email
            }
        })
    } catch (error) {
        next(error)
    }
}
module.exports = signup