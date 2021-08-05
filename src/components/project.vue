<template lang="html">
  <div>
    <design-het class="widget" installation="true" circles="3"></design-het>
    <img class="qr" :src="qrCode" alt="qr code">
    <img class="rd_logo" src="./../assets/reddot/RD.png" alt="red_dot_brand_design_winner_2021"/>
    <p v-if="connectedPlayer" class="player"><span>{{player}}</span> is playing.</p>
  </div>
</template>

<script>
/* eslint-disable */
import io from 'socket.io-client'
import {server} from './../config.js'
import { DesignHet } from 'design-het-widget'
import flowallQr from './../assets/flowall_qr.png'
import brigiQr from './../assets/design-het-qr.svg'

export default {
  data() {
    return {
      socket : io(server),
      widget: null
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
    connectedPlayer() {
      return this.$store.state.hasPlayer
    },
    qrCode() {
      if (process.env.VUE_APP_URL === 'brigittaforrai.com') {
        return brigiQr
      } else {
        return flowallQr
      }
    },
    player() {
      return this.$store.state.player || 'someone'
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
.rd_logo {
  position: absolute;
  left: 0px;
  top: 40px;
  text-align: left;
  width: 200px;
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
  top: 180px;
  text-align: left;
  color: white;
  font-size: 1.2em;
}
.player span {
  color: #f9423a;
  text-transform: capitalize;
}
</style>
