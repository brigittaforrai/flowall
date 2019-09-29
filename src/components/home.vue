<template>
  <div class="home">
    <Remote v-if="this.connected"></Remote>
    <Connect v-if="!this.connected"></Connect>
  </div>
</template>

<script>
import Remote from './remote.vue'
import Connect from './connect.vue'


export default {
  name: 'Home',
  components: {
    Remote,
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    padding-top: 56px;
    padding-bottom: 66px;
  }

  @media(orientation: landscape) {
    .home {
      padding-top: 52px;
      padding-bottom: 52px;
    }
  }
</style>
