const router = require('express').Router()
const { verifyToken } = require('./modules/jwt')

const UserController = require('./controllers/UserController')

router.post('/users/create', UserController.create)
router.get('/users/list', UserController.list)
router.get('/users/findById/:id', UserController.findById)


module.exports = router
