const { generateToken } = require('../services/generateToken')

const tokenValidation = async (req, res, next) => {

  const currentDate = new Date().getTime()
  const expires = process.env.TOKEN_EXPIRE
  const token = process.env.ACCESS_TOKEN

  if (expires <= currentDate) {
    await generateToken()
    console.log(`Token expired, new token is generated: ${token}`) 
  }

  next()
}

module.exports = tokenValidation