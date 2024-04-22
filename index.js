const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 8443;

app = express()
app.get('/', (req, res) => {
  res.status(200).json({'message':'Hello World'});
})
app.post('/testing', (req, res) =>{
  console.log("REQUEST BODY !!!!!!!!!!!!!!!!!!!!!!!",req.body)
  res.status(200).json({'message':'done'})
})

app.listen(port, () => {
  console.log("server starting on port : " + port)
});
