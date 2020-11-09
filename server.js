const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/web-app'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/web-app/index.html'));});
app.listen(process.env.PORT || 8080);

//    "start": "npm run env -s && ng serve --aot --proxy-config proxy.conf.js",
