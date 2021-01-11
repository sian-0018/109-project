var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController')

/* GET home page. */

router.get('/all', homeController.getHome);

router.get('/cake', homeController.getCake);
router.get('/coffee', homeController.getCoffee);
router.get('/dessert', homeController.getDessert);


router.post('/cake/create', homeController.createProduct);

router.post('/cake/update', homeController.updateProduct);

router.get('/cake/delete/:id', homeController.deleteProductById);


module.exports = router;
