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
html, body, #app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
#app {
  font-family: Aktifo-A-Book;
	font-weight: normal;
	font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
  padding: 16px;
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
  height: 60px;
  border-radius: 5px;
}
button.circle {
  width: 60px;
  height: 60px;
  border-radius: 30px;
}
h1 {
  font-size: 1.5em;
}
</style>
