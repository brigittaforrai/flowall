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

let values = {
  xgap: 100,
  zgap: 100,
  nodesize: 30,
  spacing: 50,
  tempo: 0.02,
  ampl: 100,
  period: 1000,
  rotatex: 0,
  rotatey: 0,
  rotatez: 0
}

io.on('connection', function(socket) {

  socket.on('SEND', function(data) {
    values = data.values
    io.emit('VALUES', {values: values})
  })

  socket.on('ISOPEN', function() {
    io.emit('OPEN', {open: open})
  })

  socket.on('GET_VALUES', function() {
    io.emit('INIT_VALUES', {values: values})
  })

  socket.on('CONNECTED', function() {
    if (open) {
      open = false
      io.emit('OPEN', {open: open})
      setTimeout(() => {
        open = true
        io.emit('OPEN', {open: open})
        console.log("time is up");
      }, 60000)
    }
  })

  socket.on('DISCONNECT', function() {
    open = true
    io.emit('OPEN', {open: open})
  })
})
