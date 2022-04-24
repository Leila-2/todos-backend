const CreateError = require("http-errors");
const { Todo, schemas } = require('../../models/todos')

const add = async (req, res, next) => {
    try {
        const { error } = schemas.add.validate(req.body)
        if (error) {
            throw new CreateError(400, error.message)
        }
        // const data = { ...req.body };
        const result = await Todo.create(req.body)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = add