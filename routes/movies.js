const moviesRouter = require('express').Router();
const { movieValidation, idValidation } = require('../middlewares/validation');
const { getAllMovies, createMovie, deleteMovie } = require('../controllers/movies');

moviesRouter.get('/movies', getAllMovies);

moviesRouter.post('/movies', movieValidation, createMovie);

moviesRouter.delete('/movies/_id', idValidation, deleteMovie);

module.exports = moviesRouter;
