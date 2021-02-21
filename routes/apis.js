const expres = require('express')
const router = expres.Router()

const adminController = require('../controllers/api/adminController.js')

router.get('/admin/restaurants', adminController.getRestaurants)

module.exports = router