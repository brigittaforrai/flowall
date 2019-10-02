<template lang="html">
  <div>
    <design-het class="widget" installation="true" circles="3"></design-het>
    <img class="qr" :src="qrCode" alt="qr code">
    <p class="player"><span>{{player}}</span> is playing.</p>
  </div>
</template>

<script>
import io from 'socket.io-client'
import {server} from './../config.js'
import { DesignHet } from 'design-het-widget'
import {domain} from './../config'
import flowallQr from './../assets/flowall_qr.png'
import brigiQr from './../assets/design-het-qr.svg'

export default {
  data() {
    return {
      socket : io(server),
      widget: null,
      domain: domain
    }
  },
  mounted() {
    this.widget = document.querySelector(".widget")

    // ask config from server
    this.socket.emit('GET_VALUES')
    this.socket.on('INIT_VALUES', (data) => {
      this.update(data.values)
      this.socket.off('INIT_VALUES')
    })

    // listen for change
    this.socket.on('VALUES', (data) => {
        this.update(data.values)
    })

    this.socket.on('SET_RANDOM_CIRCLES', () => {
      this.widget.updateSvg()
    })
  },
  computed: {
    qrCode() {
      if (this.domain === 'brigittaforrai.com') {
        return brigiQr
      } else {
        return flowallQr
      }
    },
    player() {
      return this.$store.state.name || 'someone'
    }
  },
  methods: {
    update(data) {
      Object.keys(data).forEach((name) => {
        this.widget.setAttribute(name, data[name])
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
.qr {
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 100px;
  height: 100px;
}
.player {
  position: absolute;
  left: 10px;
  top: 10px;
  text-align: left;
  color: white;
  font-size: 1.2em;
}
.player span {
  color: #f9423a;
  text-transform: capitalize;
}
</style>
