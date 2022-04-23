const { Schema, model } = require('mongoose')
const Joi = require("joi");
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: emailRegexp,
    },
    password: {
        type: String,
        minlength: 6
    },
    token: {
        type: String,
        default: ""
    }
});
const signupJoiSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required()
})
const User = model("user", userSchema)

const schemas = {
    signup: signupJoiSchema
};

module.exports = {
    User,
    schemas
}