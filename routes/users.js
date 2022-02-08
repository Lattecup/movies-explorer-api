const usersRouter = require('express').Router();
const { userUpdateValidation } = require('../middlewares/validation');
const { getUser, updateUser } = require('../controllers/users');

usersRouter.get('/users/me', getUser);

usersRouter.patch('/users/me', userUpdateValidation, updateUser);

module.exports = usersRouter;
