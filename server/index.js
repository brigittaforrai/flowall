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
let values = [
  {
    name: "xgap",
    value: 100
  },
  {
    name: "zgap",
    value: 100
  },
  {
    name: "nodesize",
    value: 30
  },
  {
    name: "spacing",
    value: 50
  },
  {
    name: "tempo",
    value: 0.02
  },
  {
    name: "ampl",
    value: 100
  },
  {
    name: "period",
    value: 1000
  }
]

io.on('connection', function(socket) {

  socket.on('ROTATE', function(data) {
    console.log(data, 'rotation');
    io.emit('SET_ROTATION', data)
  })

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
    open = false
    io.emit('OPEN', {open: open})
    setTimeout(() => {
      open = true
      io.emit('OPEN', {open: open})
      console.log("time out");
    }, 60000)
  })

  socket.on('DISCONNECT', function() {
    open = true
    io.emit('OPEN', {open: open})
  })
})
