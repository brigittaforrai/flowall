<template>
  <div id="app">
    <flowHeader></flowHeader>
    <router-view/>
  </div>
</template>

<script>
  import FlowHeader from './components/flowHeader.vue'
  export default {
    name: 'App',
    components: {
      FlowHeader
    },
    mounted () {
      this.$store.dispatch('ask_connectionInfo')
      this.$store.dispatch('listen_connectionInfo')
      this.$store.commit('setUserId')
      this.$store.commit('setUserName')
    }
  }
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  -webkit-text-size-adjust: 100%;
}
html, body, #app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Aktifo-A-Book;
	font-weight: normal;
	font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 16px;
  background-color: white;
  color: black;
  position: relative;
  /* color: white;
  background-color: black; */
  /* background-image: url('./assets/image.png');
  background-size: cover; */
}
.bold {
  font-family: Aktifo-A-SemiBold;
}
.red {
  color: #f9423a;
}
button {
  background: #f9423a;
  color: white;
  border: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
button.big {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.button.circle, button.circle {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 8px 5px 5px;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  background: #f9423a;
  color: white;
  text-transform: uppercase;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
button.empty, .button.empty {
  background-color: white;
  color: #f9423a;
  border: 2px solid #f9423a;
}
button.empty:active, .button.empty:active {
  background-color: #f9423a;
  color: white;
}
h1 {
  font-size: 1.7em;
}

@media (orientation: landscape) {
  button.big {
    height: 40px;
  }
  #app {
    padding: 12px 16px;
  }
}
</style>
