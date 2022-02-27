require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { generateToken } = require('./services/generateToken')

// Retrieve an access token
generateToken()

const indexRoute = require('./routes/index')
const spotifyRoute = require('./routes/spotify')
const tokenValidation = require('./middlewares/tokenValidation')

app.use(cors())
app.use(express.json())
app.use(tokenValidation)

// Routes
app.use('/', indexRoute)
app.use('/spotify', spotifyRoute)


const PORT = process.env.PORT || 8888
app.listen(PORT, () => console.log(`Spotify-API running on port ${PORT} 🎧 🔊`))