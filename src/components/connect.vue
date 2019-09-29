<template>
  <div class="connect">
    <section>
      <h2 class="">save the date</h2>
      <h2>10.04-13 </h2>

      <h4>Lumen café 10.11</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>
    <button @click="connect"
            class="big"
            v-if="connectBtnText"
            :disabled="!this.open">{{connectBtnText}}</button>
  </div>
</template>

<script>
export default {
  name: 'Connect',
  computed: {
    open() {
      return this.$store.state.open
    },
    connectBtnText() {
      if (this.lang === 'HUN') {
        return this.open ? "Játszani akarok!" : "Valaki éppen játszik"
      } else {
        return this.open ? "Let's play a minute!" : "Someone is playing"
      }

    },
    lang() {
      return this.$store.state.language
    }
  },
  methods: {
    connect () {
      this.$store.dispatch('ask_toConnect')
    }
  }
}
</script>

<style scoped>
  .connect {
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 16px;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
  h2 {
    font-size: 2.3em;
    margin: 10px 0;
    line-height: 1em;
  }
</style>
