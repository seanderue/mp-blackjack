const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const cors = require("cors")

app.use(cors())

const { Server } = require("socket.io")

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

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
  
  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data)
  })

})

server.listen(3001, () => {
  console.log('listening on *:3001')
})
