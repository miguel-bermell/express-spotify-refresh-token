const express = require('express')
const router = express.Router()
const spotifyApi = require('../config/spotify')

router.get('/albums/:artistId', async (req, res) => { 
  const { artistId } = req.params
  
  try {
    const albums = await spotifyApi.getArtistAlbums(artistId, { country: 'ES', limit: 15, })
    res.status(200).json(albums.body.items)
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
})

module.exports = router