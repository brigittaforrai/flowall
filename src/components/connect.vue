<template>
  <div class="connect">
    <section>
      <h3>Lumen café 10.11</h3>
      <p>A Design Hét Budapest flow témájához illően olyan generatív arculati struktúra született, mely alapvetően a mozgásra épül és tetszőlegesen változtatható az összes paramétere. Ez a játékosság, illetve a lassan és folyamatosan változó áramlás a flow élmény megtapasztalását kínálja a nézőnek.</p>
      <p>Próbáld ki te is, nyomd meg a gombot és játsz a csúszkákkal!</p>
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
