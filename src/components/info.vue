<template>
  <div class="info">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <button class="circle close"
            @click="closeInfo">X</button>
  </div>
</template>

<script>
export default {
  name: 'Info',
  mounted () {
    let btn = document.querySelector('button.circle.empty')
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
