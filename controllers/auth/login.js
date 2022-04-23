const { User, schemas } = require('../../models/users')
const CreateError = require("http-errors");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { SECRET_KEY } = process.env

const login = async (req, res, next) => {
    try {
        const { error } = schemas.signup.validate(req.body)
        if (error) {
            throw new CreateError(400, error.message)
        }
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            throw new CreateError(401, 'Email not found')
        }
        const compareResult = await bcrypt.compare(password, user.password)
        if (!compareResult) {
            throw new CreateError(401, 'Password wrong')
        }
        const payload = {
            id: user._id
        }
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
        await User.findByIdAndUpdate(user._id, { token })
        res.json({
            token,
            user: {
                email
            }
        })
    } catch (error) {
        next(error)
    }
}
module.exports = login