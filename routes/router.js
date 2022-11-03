const express = require('express')
const router = express.Router()
const productController = require('../controllers/ProductController')

router.get('/products', productController.ConsultProducts)
router.get('/costoTotal', productController.obtenerCostoTotal)
router.post('/createProduct', productController.CreateProduct)
router.put('/editProduct/:id', productController.EditProduct)
router.delete('/deleteProduct/:id', productController.DeleteProduct)


module.exports = router