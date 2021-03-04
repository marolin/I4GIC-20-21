const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const productCon = require('../controllers/productsCon')


router.get('/signin',authController.signIn);
router.get('/signup',authController.signUp);
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/admin',productCon.admin);
router.post("/product",productCon.createProduct);
router.post("/product/:id",productCon.deleteProduct);
router.get("/",productCon.getAllProduct);
router.get("/clothes/:id",productCon.displayClothes);

module.exports = router;