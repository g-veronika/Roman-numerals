const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
const convertToRoman = require('./converter')


var corsOptions = {

  // 1st url for front-end, 2nd url for cypress testing
    origin: ['http://localhost:5173', 'http://localhost:4173'],
    optionsSuccessStatus: 200, 
}

// Each time there is an unser input sent we receive it in req.params.number
app.get('/api/convert/:number', cors(corsOptions), (req, res) => {

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  })
  

// Checking if user number is not negative and not >100
  if(Number(req.params.number) > 0 && Number(req.params.number) <= 100){
    // Passing user number as a parameter in the function which converts it in roman numeral 
    // Then stocking the result in a romanNumber
    let romanNumber = convertToRoman(req.params.number)
    // Sending the response to the client using ID for each reponse
    res.write(`id:${new Date()}\ndata: ${romanNumber}\n\n`);

  }
  // Error case
  else {
    res.status(422)
    res.write(`id:${new Date()}\nmsg: "Wrong input"\n\n`)
  }
})
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})