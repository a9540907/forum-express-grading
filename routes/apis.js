const expres = require('express')
const router = expres.Router()
const multer = require('multer')
const upload = multer({ dest: 'temp/' })

const adminController = require('../controllers/api/adminController.js')

const categoryController = require('../controllers/api/categoryController')

router.get('/admin/restaurants', adminController.getRestaurants)

router.get('/admin/restaurants/:id', adminController.getRestaurant)

router.get('/admin/categories', categoryController.getCategories)

router.post('/admin/restaurants', upload.single('image'), adminController.postRestaurant)

router.delete('/admin/restaurants/:id', adminController.deleteRestaurant)

module.exports = router