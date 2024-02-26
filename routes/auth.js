const express = require('express')
const router = express.Router();
const validator = require('../validators/auth')
const controller = require('../controllers/auth')
const requiresAuth = require('../middleware/requiresAuth')

router.post('/login', validator.login, controller.login)
router.get('/me', requiresAuth, controller.me)
module.exports = router;