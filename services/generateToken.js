const spotifyApi = require('../config/spotify')

exports.generateToken = async () => {
  try {
    
    const data = await spotifyApi.clientCredentialsGrant()
    const { access_token, expires_in } = data.body
    spotifyApi.setAccessToken(access_token)

    console.log(`generateToken expires in ${expires_in}`)

    const expires = new Date().getTime() + expires_in * 1000

    process.env.TOKEN_EXPIRE = expires
    process.env.ACCESS_TOKEN = access_token

    return { access_token, expires }

  } catch (error) {
    console.log(error)
  }
}