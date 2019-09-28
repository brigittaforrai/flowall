<template>
  <div class="remote">

    <button class="circle disconnect"
            @click="disconnect">x</button>

    <div class="container" v-if="inputs && savedVals">
      <div class="config-item" :key="s.name" v-for="s in inputs">
        <label :for="s.name">{{s._name}}</label>
        <input :step="s.step" :min="s.min" :max="s.max" type="range" :name="s.name" v-model.number="savedVals[s.name]">
      </div>
    </div>

  </div>
</template>

<script>
import io from 'socket.io-client'
import {config, server} from './../config.js'

export default {
  name: 'Remote',
  data() {
    return {
      socket : io(server),
      inputs: config,
      savedVals: null,
      canvas: null
    }
  },
  watch: {
    savedVals: {
      deep: true,
      handler(newVals) {
        this.socket.emit('SEND', {
          values: newVals
        })
      }
    }
  },
  mounted () {
    // ask config from server
    this.socket.emit('GET_VALUES')
    this.socket.on('INIT_VALUES', (data) => {
      this.socket.off('INIT_VALUES')
      this.savedVals = data.values
    })
  },
  methods: {
    disconnect() {
      this.socket.emit('DISCONNECT')
    }
  }
}
</script>

<style scoped>
canvas {
  width: calc(100% - 20px);
  height: 200px;
  background-color: white;
  border-radius: 5px;
  margin: 10px;
  box-sizing: border-box;
}
.remote {
  width: 100%;
  max-width: 500px;
}
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.config-item {
  text-align: left;
  padding: 7px 10px;
  width: 50%;
}
label {
  color: white;
  height: 100%;
  padding: 0px 0 5px 0;
  text-transform: uppercase;
  font-family: helvetica;
  font-size: 14px;
}
.disconnect {
  position: absolute;
  right: 10px;
  top: 10px;
}
input {
  background-color: black;
}
/* http://danielstern.ca/range.css/#/ */
input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 7.5px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #f9423a;
  border-radius: 25px;
  border: 0.3px solid rgba(0, 0, 106, 0);
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0px solid rgba(0, 0, 0, 0);
  height: 25px;
  width: 25px;
  border-radius: 11px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7.8px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #fb7b75;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #f9423a;
  border-radius: 25px;
  border: 0.3px solid rgba(0, 0, 106, 0);
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0px solid rgba(0, 0, 0, 0);
  height: 25px;
  width: 25px;
  border-radius: 11px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #ef1107;
  border: 0.3px solid rgba(0, 0, 106, 0);
  border-radius: 50px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range]::-ms-fill-upper {
  background: #f9423a;
  border: 0.3px solid rgba(0, 0, 106, 0);
  border-radius: 50px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0px solid rgba(0, 0, 0, 0);
  height: 25px;
  width: 25px;
  border-radius: 11px;
  background: #ffffff;
  cursor: pointer;
  height: 10px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #f9423a;
}
input[type=range]:focus::-ms-fill-upper {
  background: #fb7b75;
}

</style>
