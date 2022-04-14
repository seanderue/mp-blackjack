const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

let users = []


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
  console.log(`A user connected: ${socket.id}`)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  
  socket.on('nameSubmit', (text) => {
    console.log(`user's name is ${text}`)
  })

})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
