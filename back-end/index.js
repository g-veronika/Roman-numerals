const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
const convertToRoman = require('./converter')


var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200, 
}


app.get('/api/convert/:number', cors(corsOptions), (req, res) => {

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  })
  

  if(Number(req.params.number) > 0 && Number(req.params.number) <= 100){
    let romanNumber = convertToRoman(req.params.number)
    res.write(`id:${new Date()}\ndata: ${romanNumber}\n\n`);

  }
  else {
    res.status(422)
    res.write(`id:${new Date()}\nmsg: "Wrong input"\n\n`)
  }
})
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})