//  require('dotenv').config();
const express = require('express'); //Line 1
const app = express(); //Line 2
const axios = require('axios');
const port = process.env.PORT || 8000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11*/
/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

const request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
//  var cookieParser = require('cookie-parser');
 
var client_id = 'f09a212db7f24e27b3d9a0a04e16708b'; // Your client id
var client_secret = '578a422142e74c16aae6bb2c62321b6f'; // Your secret
var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri
 
 /**
  * Generates a random string containing numbers and letters
  * @param  {number} length The length of the string
  * @return {string} The generated string
  */
 var generateRandomString = function(length) {
   var text = '';
   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 
   for (var i = 0; i < length; i++) {
     text += possible.charAt(Math.floor(Math.random() * possible.length));
   }
   return text;
 };
 
 var stateKey = 'spotify_auth_state';
 
 app.get('/login', function(req, res) {
 
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = 'user-read-private user-read-email';

  const queryParams = querystring.stringify({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    state: state,
    scope: scope,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
 });
 
 app.get('/callback', (req, res) => {
  const code = req.query.code || null;

  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirect_uri
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
    },
  })
    .then(response => {
      if (response.status === 200) {
        //  res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
        const { access_token, token_type } = response.data;
        axios.get('https://api.spotify.com/v1/me', {
          headers: {
          Authorization: `${token_type} ${access_token}`
          }
        })
        .then(response => {
          res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
        })
        .catch(error => {
          res.send(error);
        });
      } else {
        res.send(response);
      }
    })
    .catch(error => {
      res.send(error);
    });
});

 
 app.get('/refresh_token', function(req, res) {
 
   // requesting access token from refresh token
   var refresh_token = req.query.refresh_token;
   var authOptions = {
     url: 'https://accounts.spotify.com/api/token',
     headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
     form: {
       grant_type: 'refresh_token',
       refresh_token: refresh_token
     },
     json: true
   };
 
   request.post(authOptions, function(error, response, body) {
     if (!error && response.statusCode === 200) {
       var access_token = body.access_token;
       res.send({
         'access_token': access_token
       });
     }
   });
 });