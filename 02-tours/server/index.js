const express = require('express')
const { readFileSync } = require('fs')
const { resolve } = require('path')
const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  next()
})

const tourData = JSON.parse(
  readFileSync(resolve(__dirname, './data.json'), 'utf8')
)

app.get('/api', (req, res) => {
  res.send(tourData)
})

app.listen(8080, () => {
  console.log('http://localhost:8080/api')
})
