<template>
  <div class="connect">
    <section>
      <h3>2019. 10. 4-13.</h3>
      <p>
        Próbáld ki te is a flow élményt!
        <br>
        Nyomd meg a gombot és játsz a csúszkákkal. Változtasd kedvedre az összes paramétert!
      </p>
    </section>

    <input name="name" v-model="name" type="text" placeholder="Add meg a beceneved"/>
    <button @click="connect"
            class="big"
            v-if="connectBtnText"
            :disabled="!this.open">{{connectBtnText}}</button>
  </div>
</template>

<script>
export default {
  name: 'Connect',
  data: function () {
    return {
      name: this.$store.state.name
    }
  },
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
      this.$store.commit('setUserName', this.name)
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
  input {
    width: 100%;
    height: 50px;
    border: none;
    border: 1px solid black;
    font-size: 1em;
    text-align: center;
    margin-bottom: 16px;
    padding: 16px;
    text-transform: uppercase;
    border-radius: 5px;
    outline: none;
  }
  input:focus {
    border: 2px solid #f9423a;
  }
</style>
