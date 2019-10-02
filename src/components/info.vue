<template>
  <div class="info">
    <h1>
      <span>Deisgner</span>
      Balogh Balázs
      <br>
      <a class="link black" href="http://studio.thatsit.hu/" target="about_blank">studio.thasit.hu</a>
    </h1>
    <h1>
      <span>creative coder</span>
      Forrai Brigitta
      <br>
      <a class="link black" href="https://brigittaforrai.com" target="about_blank">brigittaforrai.com</a>
    </h1>

    <section>
      A Design Hét Budapest flow témájához illően olyan generatív arculati struktúra született, mely alapvetően a mozgásra épül és tetszőlegesen változtatható az összes paramétere. Ez a játékosság, illetve a lassan és folyamatosan változó áramlás a flow élmény megtapasztalását kínálja a nézőnek.
    </section>

    <p><span style="color: black">Megtekinthető:</span> 2019. 10. 4-13.</p>
    <p><span style="color: black">Helyszín:</span> Lumen Café</p>


    <p class="link" @click="closeInfo" >< Vissza</p>
  </div>
</template>

<script>
export default {
  name: 'Info',
  mounted () {
    let btn = document.querySelector('button.circle')
    btn.addEventListener('touchstart', () => {
      btn.style.backgroundColor = "white"
      btn.style.color = "#f9423a"
    })
    btn.addEventListener('touchend', () => {
      btn.style.backgroundColor = "#f9423a"
      btn.style.color = "white"
    })
  },
  methods: {
    closeInfo () {
      this.$store.commit("closeInfo")
    }
  }
}
</script>

<style scoped>
  .info {
    width: 100%;
    height: calc(100% - 72px);
    overflow: auto;
    position: absolute;
    left: 0;
    top: 72px;
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
