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

let id = null
let name = null
let timer = null

io.on('connection', function(socket) {

  socket.on('DISCONNECT', function() {
    id = null
    name = null
    io.emit('CONNECTION_INFO', {
      name: name,
      id: id
    })

    clearTimeout(timer)
  })

  socket.on('ASK_CONNECTION_INFO', function() {
    io.emit('CONNECTION_INFO', {
      name: name,
      id: id
    })
  })

  socket.on('ASK_CONNECT', function(data) {
    id = data.id
    name = data.name
    io.emit('CONNECTION_INFO', {
      name: name,
      id: id
    })

    timer = setTimeout(() => {
      // todo add counter
      id = null
      name = null
      io.emit('CONNECTION_INFO', {
        name: name,
        id: id
      })
    }, 60000)
  })

  socket.on('ASK_RANDOM_CIRCLES', function() {
    io.emit('SET_RANDOM_CIRCLES')
  })

  socket.on('SEND', function(data) {
    values = data.values
    io.emit('VALUES', {values: values})
  })

  socket.on('GET_VALUES', function() {
    io.emit('INIT_VALUES', {values: values})
  })
})
