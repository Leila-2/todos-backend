
const add = require('./todos/add')
const updateStatus = require('./todos/updateStatus')
const updateById = require('./todos/updateById')
const removeById = require('./todos/removeById')
const getAll = require('./todos/getAll')
const signup = require('./auth/signup')
const login = require('./auth/login')
const current = require('./auth/current')
const logout = require('./auth/logout')


module.exports = {
    add,
    updateStatus,
    updateById,
    removeById,
    getAll,
    signup,
    login,
    current,
    logout
}