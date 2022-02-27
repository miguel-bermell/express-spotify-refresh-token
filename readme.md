# ⚡ Express spotify refresh access token

The purpose of this project is to be able to refresh the Spotify access token (generating a new one) when it has expired, checking it through a middleware using [OAuth's client credentials flow](https://github.com/spotify/web-api-auth-examples/tree/master/authorization_code).

**NOTE:** In this repository we will not use the user login, for this you can use the [Spotify API](https://github.com/spotify/web-api-auth-examples/tree/master/authorization_code).

<br>

 ## 📦 Installation
 
Clone the repository and install its dependencies running:

 > npm install
 
 <br>

  ## ⚙ Configuration
  
**Rename `.env_template` to `.env` and add your Spotify credentials**

 ```
  CLIENT_ID=
  CLIENT_SECRET=
 ```

 ``` javascript
  $ npm run dev //(with nodemon)
  $ npm run start //(default)
 ```

* In `routes/spotify` there is an example to getting the artists albums by id. You can add more routes to get more information from Spotify using the [Spotify Web API Node configuration](https://github.com/thelinmichael/spotify-web-api-node).
