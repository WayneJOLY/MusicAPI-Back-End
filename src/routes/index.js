const express = require('express');
const routerSong = require('./song.router');
const routerGenre = require('./genre.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/songs',routerSong)
router.use('/genres',routerGenre)

module.exports = router;