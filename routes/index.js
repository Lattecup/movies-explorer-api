const routers = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const { login, createUser, logout } = require('../controllers/users');
const { loginValidation, createUserValidation } = require('../middlewares/validation');
const NotFoundError = require('../errors/NotFoundError');

routers.post('/signin', loginValidation, login);
routers.post('/signup', createUserValidation, createUser);
routers.post('/signout', logout);
routers.use(auth);
routers.use('/', usersRouter);
routers.use('/', moviesRouter);

routers.use('*', () => {
  throw new NotFoundError('Запрашиваемая страница не найдена');
});

module.exports = routers;
