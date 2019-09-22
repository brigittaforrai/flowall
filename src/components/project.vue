<template lang="html">
  <div>
    <design-het class="widget" circles="3"></design-het>
  </div>
</template>

<script>
import io from 'socket.io-client'
import {config, server} from './../config.js'

export default {
  data() {
    return {
      socket : io(server),
      widget: null,
      vals: null
    }
  },
  mounted() {
    this.widget = document.querySelector(".widget")

    // ask config from server
    this.socket.emit('GET_VALUES')

    this.socket.on('INIT_VALUES', (data) => {
      this.vals = data.values
      this.update(data.values)
    })

    this.socket.on('VALUES', (data) => {
        this.vals = data.values
        this.update(data.values)
    })
  },
  methods: {
    update(data) {
      data.forEach((c) => {
        this.widget.setAttribute(c.name, c.value)
      })
    }
  }
}
</script>

<style scoped>
.widget {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
