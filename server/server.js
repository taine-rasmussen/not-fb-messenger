const express = require('express')
const path = require('path')



const io = require('socket.io')(5000)

io.on('connection', socket => {

   // Using static Id alreadt assigned to user to avoid sokect create new id for each new room
  const id = socket.handshake.query.id
  socket.join(id)

  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })
})







const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

module.exports = server
