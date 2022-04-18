
const add = require('./todos/add')
const updateStatus = require('./todos/updateStatus')
const updateById = require('./todos/updateById')
const removeById = require('./todos/removeById')
const getAll = require('./todos/getAll')

module.exports = {
    add,
    updateStatus,
    updateById,
    removeById,
    getAll,
}