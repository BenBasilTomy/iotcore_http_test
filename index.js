const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.status(200).json({'message':'Hello World'});
})
app.post('/testing', (req, res) =>{
    console.log(req)
    res.status(200).json({'message':'done'})
})
app.listen(8443, () => {
    console.log('server running 3000')
})
