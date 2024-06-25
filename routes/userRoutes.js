const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/',userController.getUser);
userRouter.post('/',userController.register);
module.exports = userRouter;