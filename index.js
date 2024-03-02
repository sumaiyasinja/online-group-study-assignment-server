const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})