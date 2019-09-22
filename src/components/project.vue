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
      widget: null
    }
  },
  mounted() {
    this.widget = document.querySelector(".widget")
    this.update(config)

    this.socket.on('CONFIG', (data) => {
        this.update(data.config)
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
