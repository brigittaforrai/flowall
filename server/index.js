const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('designhet2019 server is running')
})

const port = process.env.PORT || 3001
const server = app.listen(port, function(){
    console.log(`server is running on port ${port}`)
})

const io = require('socket.io')(server)


let open = true

io.on('connection', function(socket) {

  socket.on('SEND', function(data) {
    io.emit('CONFIG', data)
  })

  socket.on('ISOPEN', function() {
    io.emit('OPEN', open)
  })

  socket.on('CONNECTED', function() {
    open = false
    io.emit('OPEN', open)
    setTimeout(() => {
      open = true
      io.emit('OPEN', open)
      console.log("time out");
    }, 60000)
  })

  socket.on('DISCONNECT', function() {
    open = true
  })
})