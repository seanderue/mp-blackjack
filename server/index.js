import express from 'express'
import http from 'http'
import cors from 'cors'
import {Card, Deck} from "./deck.js"
import { Server } from "socket.io"

const app = express()
const server = http.createServer(app)
app.use(cors())

const ace = new Card(11, "ace", "clubs")
ace.print()

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
  
  socket.on('send_action', (data) =>
  {
    socket.broadcast.emit('publish_action', (data) =>
    {
      
    })
  })

  // let msg = ace.print()
  // console.log(ace.print())
  // socket.on('send_message', (data) => 
  // {
  //   socket.broadcast.emit('receive_message', (msg)
  // )})

})

server.listen(3001, () => {
  console.log('listening on *:3001')
})
