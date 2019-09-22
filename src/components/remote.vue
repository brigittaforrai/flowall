<template>
  <div class="remote">
    <div class="config-item" :key="s.name" v-for="s in this.config">
      <label :for="s.name">{{s._name}}: {{s.value}}</label>
      <input :step="s.step" :min="s.min" :max="s.max" type="range" :name="s.name" v-model.number="s.value" @change="send">
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import {config} from './../config.js'

export default {
  name: 'Remote',
  data() {
    return {
      socket : io('localhost:3001'),
      c: config
    }
  },
  mounted () {
    window.addEventListener("deviceorientation", (e) => {
      console.log(e, "device orientation event");
    })
  },
  computed: {
    config() {
      return this.c
    }
  },
  methods: {
    send() {
      let result = this.config.map(item => ({name: item.name, value: item.value}))
      this.socket.emit('SEND', {
        config: result
      })
    }
  }
}
</script>

<style scoped>
.interface label {
  color: white;
  height: 100%;
  padding: 0px 0 5px 0;
  text-transform: uppercase;
  font-family: helvetica;
  font-size: 12px;
}
/* http://danielstern.ca/range.css/#/ */
input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 8.55px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 9.9px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #f14341;
  border-radius: 1.3px;
  border: 0px solid rgba(1, 1, 1, 0);
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid rgba(0, 0, 0, 0);
  height: 27px;
  width: 10px;
  border-radius: 4px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8.55px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #f35b59;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 9.9px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #f14341;
  border-radius: 1.3px;
  border: 0px solid rgba(1, 1, 1, 0);
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid rgba(0, 0, 0, 0);
  height: 27px;
  width: 10px;
  border-radius: 4px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 9.9px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #ef2b29;
  border: 0px solid rgba(1, 1, 1, 0);
  border-radius: 2.6px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range]::-ms-fill-upper {
  background: #f14341;
  border: 0px solid rgba(1, 1, 1, 0);
  border-radius: 2.6px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid rgba(0, 0, 0, 0);
  height: 27px;
  width: 10px;
  border-radius: 4px;
  background: #ffffff;
  cursor: pointer;
  height: 9.9px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #f14341;
}
input[type=range]:focus::-ms-fill-upper {
  background: #f35b59;
}
</style>
