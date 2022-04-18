const CreateError = require("http-errors");
const { Todo, schemas } = require('../../models/todos')
const mongoose = require('mongoose')


const updateById = async (req, res, next) => {
    try {
        const { error } = schemas.update.validate(req.body)
        if (error) {
            throw new CreateError(400, error.message)
        }
        const { todoId } = req.params

        if (!mongoose.Types.ObjectId.isValid(todoId)) {
            throw new CreateError(400, "invalid ID")
        }
        const result = await Todo.findByIdAndUpdate({ _id: todoId }, req.body, { new: true })
        if (!result) {
            throw new CreateError(404, "Not found")
        }
        res.json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = updateById