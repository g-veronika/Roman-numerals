const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
const convertToRoman = require('./converter')

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 
}


app.get('/api/convert/:number', cors(corsOptions), function (req, res) {
    let romanNumber = convertToRoman(req.params.number)
    res.json({msg: romanNumber})
})
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})