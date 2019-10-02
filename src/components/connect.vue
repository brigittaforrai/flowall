<template>
  <div class="connect">
    <section>
      <div v-if="lang === 'HUN'">
        <h3>Próbáld ki te is a flow élményt!</h3>
        <p>
          Hogyan? A piros gombra nyomva egy percig irányíthatod mobilodról az installációt.
        </p>
        <p>
          Változtasd kedvedre a paramétereket és a Design Hét arculatát.
        </p>
      </div>

      <div v-if="lang === 'ENG'">
        <h3>Experience the flow state!</h3>
        <p>
          Tap on the red button and control the projected image with your phone.
        </p>
        <p style="margin-top: 8px;">
          Use the sliders to change the view and the visual identity of Design Week Budapest.
        </p>
      </div>


      <p class="link" @click="showInfo">{{lang === 'HUN' ? 'Projektről bővebben >' : 'About the project >'}}</p>
    </section>

    <input name="name" v-model="name" type="text" :placeholder="lang === 'HUN' ? 'Add meg a beceneved' : 'Your nickname'"/>


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
        return this.open ? "Let's play!" : "Someone is playing"
      }

    },
    lang() {
      return this.$store.state.language
    }
  },
  methods: {
    connect() {
      this.$store.commit('setUserName', this.name)
      this.$store.dispatch('ask_toConnect')
    },
    showInfo() {
      this.$store.commit('toggleInfo')
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
  h3 {
    font-size: 1.3em;
    margin-bottom: 16px;
    font-weight: bold;
  }
  p {
    line-height: 1.5;
    font-size: 0.9em;
  }
  input {
    width: 80%;
    height: 50px;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    margin-bottom: 16px;
    padding: 0 16px;
    padding-top: 25px;
    outline: none;
    font-size: 0.8em;
    margin: 16px auto;
    border-radius: 0;
    -webkit-tap-highlight-color: transparent;
  }
  input:focus {
    border-bottom: 2px solid #f9423a;
    -webkit-tap-highlight-color: transparent;
  }
</style>
