'use strict';

const express = require('express');
const http = require('http-server');
const path = require('path');

const app = express();

const port = process.env.PORT || 3004;

app.use(express.static(__dirname + '/dist/web-app'));
app.get('/*', ((req, res) => res.sendFile(path.join(__dirname))));

// const server = http.createServer(app)


app.listen(port, () => console.log(`Running on port ${port} ..........`))

// server1.setTimeout = 1000;




