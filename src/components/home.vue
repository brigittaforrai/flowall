<template>
  <div class="home">
    <flowHeader></flowHeader>
    <div style="height: 100%;">
      <Remote v-if="this.connected"></Remote>
      <Connect v-if="!this.connected"></Connect>
      <Info v-if="this.showInfo"></Info>
    </div>
  </div>
</template>

<script>
import Remote from './remote.vue'
import Connect from './connect.vue'
import FlowHeader from './flowHeader.vue'
import Info from './info.vue'

export default {
  name: 'Home',
  components: {
    Remote,
    Connect,
    FlowHeader,
    Info
  },
  computed: {
    connected() {
      return this.$store.state.connected
    },
    playerName() {
      return this.$store.state.player
    },
    showInfo() {
      return this.$store.state.showInfo
    }
  }
}
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
    padding-top: 180px;
    overflow: auto;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
