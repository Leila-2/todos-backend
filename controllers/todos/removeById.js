const CreateError = require("http-errors");
const { Todo } = require('../../models/todos')
const mongoose = require('mongoose')

const removeById = async (req, res, next) => {
    try {
        const { todoId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(todoId)) {
            throw new CreateError(400, "invalid ID")
        }
        const result = await Todo.findByIdAndDelete({ _id: todoId })
        if (!result) {
            throw new CreateError(404, "Not found")
        }
        res.json({ message: "Contact deleted" })
    } catch (error) {
        next(error);
    }
}
module.exports = removeById