<template>
  <div class="home">
    <flowHeader></flowHeader>
    <div style="height: 100%;">
      <Remote v-if="this.connected"></Remote>
      <Connect v-if="!this.connected"></Connect>
    </div>
  </div>
</template>

<script>
import Remote from './remote.vue'
import Connect from './connect.vue'
import FlowHeader from './flowHeader.vue'

export default {
  name: 'Home',
  components: {
    Remote,
    Connect,
    FlowHeader
  },
  computed: {
    connected() {
      return this.$store.state.connected
    },
    playerName() {
      return this.$store.state.player
    }
  }
}
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
    padding-top: 64px;
    overflow: auto;
  }
</style>
