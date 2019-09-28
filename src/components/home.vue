<template>
  <div class="home">
    <flowHeader></flowHeader>

    <Remote v-if="this.connected"></Remote>
    <Connect v-if="!this.connected"></Connect>
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
    FlowHeader,
    Connect
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
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    /* overflow: hidden; */
  }
</style>
