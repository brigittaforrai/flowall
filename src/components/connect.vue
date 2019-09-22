<template>
  <div class="connect" style="color: white">
    <Remote v-if="this.connected"></Remote>
    <button @click="connect"
            v-if="!this.connected"
            :disabled="!this.opened">{{connectBtnText}}</button>
  </div>
</template>

<script>
import io from 'socket.io-client'
import Remote from './remote.vue'

export default {
  name: 'Connect',
  components: {
    Remote
  },
  data() {
    return {
      socket : io('localhost:3001'),
      connected: false,
      opened: false
    }
  },
  computed: {
    connectBtnText() {
      return this.opened ? "Connect to play" : "Someone is playing"
    }
  },
  mounted () {
    this.socket.emit('ISOPEN')

    this.socket.on('OPEN', (data) => {
      this.opened = data
      if (this.opened && this.connected) {
        this.connected = false
      }
    })
  },
  methods: {
    connect () {
      this.connected = true
      this.socket.emit('CONNECTED')
    },
    disConnect () {
      this.socket.emit('DISCONNECT', {})
    }
  }
}
</script>

<style scoped>
  .connect {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  button {
    width: 100%;
    height: 60px;
    background: red;
    color: white;
    border: none;
    font-size: 1.2em;
    border-radius: 5px;
    text-transform: uppercase;
  }
</style>
