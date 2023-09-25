// Thu vien can thiet express
require("dotenv").config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine.js');
const Router = require('./routers/web.js');
// khoi tao bien
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// khoi tao template engine de su dung file ejs
// and
// khoi tao con fig static file de su dung anh, css, js.
configViewEngine(app);



// khoi tao router dieu huong
app.use(Router);
// chay server
app.listen(port , hostname, () => {
    console.log('run server on port', port);
  });

