<template>
  <div class="remote">

    <div class="controls">
      <div class="container">
        <div :key="s.name"
             v-for="s in inputs"
             :class="(s.type === 'big') ? 'big config-item' : 'config-item'">
          <label :for="s.name">{{isHun ? s._name : s.eng}}</label>
          <input :step="s.step"
                 :min="s.min"
                 :max="s.max"
                 type="range"
                 :name="s.name"
                 v-model.number="savedVals[s.name]">
        </div>
      </div>

      <div class="btn-cont">
        <button class="circle empty"
                @click="randomSvg">svg</button>
        <button class="circle empty"
                @click="random">R</button>
        <button class="circle"
                @click="setRed"></button>
        <!-- <button class="circle empty"
                @click="getOrientation"></button> -->
      </div>
    </div>

    <button class="big disconnect"
            @click="disconnect">{{isHun ? 'Kilépés' : 'Disconnnect'}}</button>

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
      savedVals: {},
      widget: null
    }
  },
  computed: {
    isHun() {
      return this.$store.state.language === 'HUN'
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
    // ask config from server todo
    this.socket.emit('GET_VALUES')
    this.socket.on('INIT_VALUES', (data) => {
      this.socket.off('INIT_VALUES')
      this.savedVals = data.values
    })
  },
  methods: {
    disconnect () {
      this.$store.dispatch('ask_toDisconnect')
    },
    randomSvg() {
      this.$store.dispatch('ask_randomCircles')
    },
    random() {
      let randoms = {}
      this.inputs.forEach((i) => {
        randoms[i.name] = this.getRandom(i.randomMin, i.randomMax, i.step)
      })
      this.savedVals = randoms
      this.randomSvg()
    },
    setRed() {
      console.log('red todo');
    },
    getRandom(min, max, step) {
      const random = Math.random() * (max-min) + min
      if (step === 1 || step === undefined) {
        return Math.round(random)
      } else {
        const decimals = step.toString().split('.')[1].length
        return parseFloat(random.toFixed(decimals))
      }
    },
    // getOrientation() {
    //   if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    //       DeviceOrientationEvent.requestPermission().then(permissionState => {
    //         if (permissionState === 'granted') {
    //           window.addEventListener('deviceorientation', (e) => {
    //             console.log(e);
    //           });
    //         }
    //       }).catch(console.error);
    //   } else {
    //     window.addEventListener('deviceorientation', (e) => {
    //       console.log(e);
    //     });
    //   }
    //   if (typeof DeviceMotionEvent.requestPermission === 'function') {
    //     DeviceMotionEvent.requestPermission().then(permissionState => {
    //         if (permissionState === 'granted') {
    //           window.addEventListener('devicemotion', (e) => {
    //             console.log(e);
    //           });
    //         }
    //       }).catch(console.error);
    //   } else {
    //     window.addEventListener('deviceomotion', (e) => {
    //       console.log(e);
    //     });
    //   }
    // },
  }
}
</script>

<style scoped>
.remote {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: auto;
  padding: 16px;
}
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.controls {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.btn-cont {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.btn-cont button {
  margin: 0px 10px;
}
.config-item {
  text-align: left;
  padding: 3px 0px 0px 0px;
  width: 48%;
}
.config-item.big {
  width: 100%;
}
label {
  color: black;
  height: 100%;
  text-transform: uppercase;
  font-family: helvetica;
  font-size: 12px;
}
input {
  background-color: white;
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
  height: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #f9423a;
  border-radius: 25px;
  border: 0px solid rgba(1, 1, 1, 0);
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0px solid rgba(0, 0, 0, 0);
  height: 25px;
  width: 25px;
  border-radius: 50px;
  background: #f9423a;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #fb847f;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #f9423a;
  border-radius: 25px;
  border: 0px solid rgba(1, 1, 1, 0);
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0px solid rgba(0, 0, 0, 0);
  height: 25px;
  width: 25px;
  border-radius: 50px;
  background: #f9423a;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #e51007;
  border: 0px solid rgba(1, 1, 1, 0);
  border-radius: 50px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range]::-ms-fill-upper {
  background: #f9423a;
  border: 0px solid rgba(1, 1, 1, 0);
  border-radius: 50px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0px solid rgba(0, 0, 0, 0);
  height: 25px;
  width: 25px;
  border-radius: 50px;
  background: #f9423a;
  cursor: pointer;
  height: 5px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #f9423a;
}
input[type=range]:focus::-ms-fill-upper {
  background: #fb847f;
}

@media (orientation: landscape) {
  .controls {
    flex-direction: row;
    align-items: center;
  }
  .container {
    width: calc(100% - 50px);
    padding-right: 11px;
  }
  .btn-cont {
    flex-direction: column;
    width: 50px;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 0;
  }
  .btn-cont button {
    margin: 0 0 5px 5px;
  }
  .config-item {
    width: 32%;
  }
  .config-item.big {
    width: 49%;
  }
}


</style>
