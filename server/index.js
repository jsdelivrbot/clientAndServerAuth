//main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
//App setup 
app.use(morgan('combined'));

//cors is a middleware not on the redux side but on the EXPRESS SIDE!
//handle requests that are coming from different domains
//can specifiy SPECIFIC domains and ports 
app.use(cors());

app.use(bodyParser.json({ type: '*/*' }));
router(app);
mongoose.connect('mongodb://localhost:auth/auth');

//made a comment

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on ', port);