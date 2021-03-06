const CreateError = require("http-errors");
const { Todo } = require('../../models/todos')


const getAll = async (req, res, next) => {
    try {
        const { page = 1, limit = 5 } = req.query;

        if (isNaN(page) || isNaN(limit)) {
            throw new CreateError(400, 'Params limit and page must be a number')
        }
        const skip = (page - 1) * limit;

        const result = await Todo.find({}, '-createdAt', { skip, limit: +limit })
        const total = await Todo.count({})
        console.log(total)
        res.json({ total, result })
    } catch (error) {
        next(error);
    }

}
module.exports = getAll