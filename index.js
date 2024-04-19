const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 8443;
var key = fs.readFileSync(__dirname + '/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};
app = express()
app.get('/', (req, res) => {
  res.status(200).json({'message':'Hello World'});
})
app.post('/testing', (req, res) =>{
  console.log(req)
  res.status(200).json({'message':'done'})
})
var server = https.createServer(options, app);
server.listen(port, () => {
  console.log("server starting on port : " + port)
});
