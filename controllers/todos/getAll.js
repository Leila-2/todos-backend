const CreateError = require("http-errors");
const { Todo } = require('../../models/todos')

const getAll = async (req, res, next) => {
    try {
        const { page = 1, limit = 20 } = req.query;
        if (isNaN(page) || isNaN(limit)) {
            throw new CreateError(400, 'Params limit and page must be a number')
        }
        const skip = (page - 1) * limit;

        const result = await Todo.find({}, '-createdAt', { skip, limit: +limit })
        res.json(result)
    } catch (error) {
        next(error);
    }

}
module.exports = getAll