const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const productCon = require('../controllers/productsCon')


router.get('/Sign In',authController.signIn);
router.get('/Sign Up',authController.signUp);
router.post('/Register', authController.register);
router.post('/Login', authController.login);
router.get('/admin',productCon.admin);
router.post("/product",productCon.createProduct);
router.post("/product/:id",productCon.deleteProduct);
router.get("/",productCon.getAllProduct);
router.get("/clothes/:id",productCon.displayClothes);
// router.get('/If_exists',authController.If_exists);


// router.get('/signin',(req,res)=>{
//     res.render('signin');
    
// });
// router.get('/signup',(req,res)=>{
//     res.render('signup');
    
// });


module.exports = router;