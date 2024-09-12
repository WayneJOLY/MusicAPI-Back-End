const Artist = require("./Artist");
const Album = require("./Album")
const Song =require("./Song")
const Genre= require("./Genre")

// Album -> artistId
Album.belongsTo(Artist)
Artist.hasMany(Album)

// Song ->albumId
Song.belongsTo(Album)
Album.hasMany(Song)


Song.belongsToMany(Artist,{through: "songArtists"})
Artist.belongsToMany(Song,{through: "songArtists"})



Artist.belongsToMany(Genre , {through: "genreArtists"})
Genre.belongsToMany(Artist,{through:"genreArtists"})

Song.belongsToMany(Genre, {through:"songGenres"})
Genre.belongsToMany(Song,{through:"songGenres"})