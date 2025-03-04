const { getAll, create, getOne, remove, update, setGenres } = require('../controllers/artist.controllers');
const express = require('express');
const { post } = require('./song.router');

const routerArtist = express.Router();

routerArtist.route('/')
    .get(getAll)
    .post(create);

routerArtist.route('/:id/genres')
    .post(setGenres)
    
routerArtist.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerArtist;