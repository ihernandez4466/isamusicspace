# isamusicspace

This project is a dashboard with analytics for your spotify trends. This project is specific to the spotify API although I would like to make time to add additional services in the future :) Note: this app was abandoned and needs some improvement. However, it is still fun to use and does it's job of exposing people's music interests and trends.

### Technologies Used
ReactJS: Frontend library for building user interfaces.

Grommet: UI component library for ReactJS, providing ready-to-use components and theming capabilities.

Node.js: Backend JavaScript runtime for building scalable server-side applications.

Spotify Web API: Official API provided by Spotify for accessing user-related data: https://developer.spotify.com/documentation/web-api 

OAuth 2.0: Authentication protocol for secure authorization and user access control.

Chart.js for Data Visualization

### Setup to run app locally
1. Run `npm run install`. If you do not have npm you must install it along with node.js: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
2. Get your authorization codes. Authorization Code oAuth2 flow is required to authenticate against Spotify Accounts. More information here: https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
3. Create a .env file.
```
CLIENT_ID=<Your client id>
CLIENT_SECRET=<Your secret>
REDIRECT_URI=http://localhost:3000 // Your redirect uri if running locally
PORT=8000 // or whatever port you want to run your app on
```
3. Run `npm start`
