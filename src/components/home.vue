<template>
  <div class="connect" style="color: white">
    <flowHeader></flowHeader>

    <Remote v-if="this.connected"></Remote>
    <button v-if="!this.connected"
            @click="connect"
            class="big"
            :disabled="!this.opened">{{connectBtnText}}</button>
  </div>
</template>

<script>
import Remote from './remote.vue'
import FlowHeader from './flowHeader.vue'

export default {
  name: 'Home',
  components: {
    Remote,
    FlowHeader
  },
  computed: {
    opened() {
      return this.$store.state.open
    },
    connected() {
      return this.$store.state.connected
    },
    playerName() {
      return this.$store.state.player
    },
    connectBtnText() {
      return this.opened ? "Connect to play" : "Someone is playing"
    }
  },
  mounted () {

  },
  methods: {
    connect () {
      this.$store.dispatch('ask_toConnect')
    },
    disconnect () {
      this.$store.dispatch('ask_toDisconnect')
    }
  }
}
</script>

<style scoped>
  .connect {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
</style>
