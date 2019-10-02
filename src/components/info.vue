<template>
  <div class="info">
    A Design Hét Budapest flow témájához illően olyan generatív arculati struktúra született, mely alapvetően a mozgásra épül és tetszőlegesen változtatható az összes paramétere. Ez a játékosság, illetve a lassan és folyamatosan változó áramlás a flow élmény megtapasztalását kínálja a nézőnek.

Próbáld ki te is, nyomd meg a gombot és játsz a csúszkákkal!
    <button class="circle close"
            @click="closeInfo">X</button>
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
    text-align: center;
  }
  button.close {
  }
</style>
