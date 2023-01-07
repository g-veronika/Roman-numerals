const express = require('express')
const app = express()
const port = 3000

app.get('/',  function (req, res) {
    res.json({msg: 'Test message'})
})
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})