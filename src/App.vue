<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
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
  background-color: white;
  color: black;
  position: relative;
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
  margin-top: 16px;
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
button.random-circle:active {
  background-color: #f9423a !important;
}
h1 {
  font-size: 1.7em;
}

@media (orientation: landscape) {
  #app {

  }
}
</style>
