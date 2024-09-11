const express = require('express');
const routerSong = require('./song.router');
const routerGenre = require('./genre.router');
const routerArtist = require('./artist.router');
const routerAlbum = require('./album.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/songs',routerSong)
router.use('/genres',routerGenre)
router.use('/artists',routerArtist)
router.use('/albums',routerAlbum)
module.exports = router;