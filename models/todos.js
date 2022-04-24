const { Schema, model } = require('mongoose')
const Joi = require("joi");


const todoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },

}, { versionKey: false });


const addJoiTodoSchema = Joi.object({
    name: Joi.string().required(),
    done: Joi.boolean()
})

const updateJoiTodoSchema = Joi.object({
    done: Joi.boolean().required(),
    name: Joi.string()
})
const Todo = model('Todo', todoSchema)

module.exports = {
    Todo,
    schemas: {
        add: addJoiTodoSchema,
        update: updateJoiTodoSchema
    }
}