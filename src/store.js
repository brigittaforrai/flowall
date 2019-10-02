import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid'
import io from 'socket.io-client'
import {server} from './config.js'

Vue.use(Vuex)

const socket = io(server)

export default new Vuex.Store({
  state: {
    language: 'HUN',
    connected: false,
    open: true,
    name: null,
    id: null,
    player: null,
    hasPlayer: false,
    randomCircles: false,
    showInfo: false
  },
  mutations: {
    toggleInfo(state) {
      state.showInfo = !state.showInfo
    },
    closeInfo(state) {
      state.showInfo = false
    },
    setLanguage(state, lang) {
      state.language = lang
    },
    setUserId(state) {
      let id = localStorage.getItem('flow2019_id')
      if (id) {
        state.id = id
      } else {
        state.id = uuid()
        localStorage.setItem('flow2019_id', state.id);
      }
    },
    setUserName(state, name) {
      if (name) {
        state.name = name
        localStorage.setItem('flow2019_name', state.name)
      } else {
        let savedName = localStorage.getItem('flow2019_name')
        state.name = savedName ? savedName : null
      }
    },
    setConnect(state, val) {
      state.connected = val
    }
  },
  actions: {
    ask_randomCircles() {
      socket.emit('ASK_RANDOM_CIRCLES')
    },
    ask_connectionInfo() {
      socket.emit('ASK_CONNECTION_INFO')
    },
    listen_connectionInfo({state, commit}) {
      socket.on('CONNECTION_INFO', (answer) => {
        // console.log(answer, 'connection info');
        state.player = answer.name
        let id = answer.id
        state.hasPlayer = id

        if (!id) {
          commit('setConnect', false)
          this.state.open = true
        } else if (id && id !== state.id) {
          commit('setConnect', false)
          this.state.open = false
        } else if (id && id === state.id) {
          commit('setConnect', true)
          this.state.open = true
        }
      })
    },
    ask_toConnect({state}) {
      if (!state.connected && state.open)
      socket.emit('ASK_CONNECT', {
        name: state.name,
        id: state.id
      })
    },
    ask_toDisconnect() {
      socket.emit('DISCONNECT')
    }
  }
})
