<template>
  <div class="info">
    <p><span>Deisgner</span>Balogh Balázs</p>
    <p><span>creative coder</span>Forrai Brigitta</p>

    <section>
      A Design Hét Budapest flow témájához illően olyan generatív arculati struktúra született, mely alapvetően a mozgásra épül és tetszőlegesen változtatható az összes paramétere. Ez a játékosság, illetve a lassan és folyamatosan változó áramlás a flow élmény megtapasztalását kínálja a nézőnek.
    </section>
    <section>
      A Design Hét Budapest flow témájához illően olyan generatív arculati struktúra született, mely alapvetően a mozgásra épül és tetszőlegesen változtatható az összes paramétere. Ez a játékosság, illetve a lassan és folyamatosan változó áramlás a flow élmény megtapasztalását kínálja a nézőnek.
    </section>

    <p class="highlight">
      Próbáld ki te is!<br>Nyomd meg a gombot a főoldalon és játsz a csúszkákkal!
    </p>

    <button class="close big"
            @click="closeInfo">ok</button>
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
  span {
    color: #f9423a;
    margin-right: 10px;
    text-transform: capitalize;
  }
  button.close {

  }
  section {
    margin: 24px 0;
  }
  .highlight {
    color: #f9423a;
    font-weight: bold;
  }
</style>
