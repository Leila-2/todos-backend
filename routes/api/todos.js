const express = require('express')
const { authenticate } = require('../../middlewares/index')
const ctrl = require('../../controllers/index')
const router = express.Router()

router.get('/', authenticate, ctrl.getAll)

router.post('/', authenticate, ctrl.add)

router.patch('/:todoId', ctrl.updateStatus)

router.delete('/:todoId', ctrl.removeById)

router.put('/:todoId', ctrl.updateById)


module.exports = router