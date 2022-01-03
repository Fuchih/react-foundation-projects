const express = require('express')
const { tours } = require('./data')
const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  next()
})

app.get('/api', (req, res) => {
  res.status(200).json(tours)
})

app.listen(8080, () => {
  console.log('http://localhost:8080/api')
})
