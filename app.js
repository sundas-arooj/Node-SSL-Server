const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')

const app = express()

app.use('/', (req, res, next) => {
  res.send('Hello from SSL server')
})

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'SSLcertificate', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'SSLcertificate', 'cert.pem')),
  },
  app
)

sslServer.listen(3200, () => console.log('Secure server on port 3200'))