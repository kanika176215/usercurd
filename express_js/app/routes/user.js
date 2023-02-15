const express= require('express');
const router= express.Router();
const userController= require('../controllers/user')

router.post('/user', (req,res,next)=>{
    userController.create(req,res,next)
});



router.get('/user',(req, res, next)=> {
    userController.find(req,res, next)




});


module.exports=router


