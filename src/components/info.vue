<template>
  <div class="info">
    <h1>
      <span>Deisgner</span>
      {{lang === 'HUN' ? 'Balogh Balázs' : 'Balázs Balogh'}}
      <br>
      <a class="link black" href="http://studio.thatsit.hu/" target="about_blank">studio.thatsit.hu</a>
    </h1>
    <h1>
      <span>creative coder</span>
      {{lang === 'HUN' ? 'Forrai Brigitta' : 'Brigitta Forrai'}}
      <br>
      <a class="link black" href="https://brigittaforrai.com" target="about_blank">brigittaforrai.com</a>
    </h1>

    <section v-if="lang === 'HUN'">
      A Design Hét Budapest flow témájához illően olyan generatív arculati struktúra született,
      mely alapvetően a mozgásra épül és tetszőlegesen változtatható az összes paramétere.
      Ez a játékosság, illetve a lassan és folyamatosan változó áramlás a flow élmény megtapasztalását kínálja a nézőnek.
    </section>

    <section v-if="lang === 'ENG'">
      Matching Design Week Budapest's "flow" theme a generative identity structure was created based on motion and interaction with all of its parameters.
      The playfulness accompanied with the slowly and continuously changing motion gives the viewers the opoortunity to experience the "flow.
    </section>

    <div v-if="lang === 'HUN'">
      <p><span style="color: black">Megtekinthető:</span> 2019. 10. 4-13.</p>
      <p><span style="color: black">Helyszín:</span> Lumen Café</p>
    </div>

    <div v-if="lang === 'ENG'">
      <p><span style="color: black">Exibition dates:</span> 2019. 10. 4-13.</p>
      <p><span style="color: black">Location:</span> Lumen Café</p>
    </div>



    <p class="link" @click="closeInfo" >{{lang === 'HUN' ? '< Vissza' : '< Back'}}</p>
  </div>
</template>

<script>
export default {
  name: 'Info',
  methods: {
    closeInfo () {
      this.$store.commit("closeInfo")
    }
  },
  computed: {
    lang() {
      return this.$store.state.language
    }
  }
}
</script>

<style scoped>
  .info {
    width: 100%;
    height: calc(100% - 180px);
    overflow: auto;
    position: absolute;
    left: 0;
    top: 180px;
    padding: 16px;
    background-color: white;
    text-align: left;
    line-height: 1.5;
  }
  h1 {
    font-size: 1em;
    line-height: 1.5;
    font-weight: normal;
  }
  span {
    color: #f9423a;
    margin-right: 10px;
    text-transform: capitalize;
    font-weight: bold;
  }
  section {
    margin: 12px 0 24px 0;
  }
  .highlight {
    color: #f9423a;
    font-weight: bold;
  }
</style>
