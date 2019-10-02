<template>
  <header class="bold">
    <img class="logo" src="./../assets/flowall-logo.png" @click="toggleInfo" alt="logo"/>
    <div class="language-selector">
      <div @click="select('HUN')" :class="language === 'HUN' ? 'selected lang button circle' : 'lang button circle'">HUN</div>
      <div @click="select('ENG')" :class="language === 'ENG' ? 'selected lang button circle' : 'lang button circle'">ENG</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'FlowHeader',
  computed: {
    language() {
      return this.$store.state.language
    }
  },
  methods: {
    select(lang) {
      this.$store.commit('setLanguage', lang)
    },
    toggleInfo() {
      this.$store.commit('toggleInfo')
    }
  }
}
</script>

<style scoped>
   header {
     display: flex;
     align-items: center;
     justify-content: space-between;
     width: 100%;
     position: fixed;
     background-color: white;
     left: 0;
     top: 0;
     z-index: 10;
     padding: 16px;
   }
   .logo {
     cursor: pointer;
     width: 130px;
     margin-left: -16px;
   }
  .language-selector {
    display: flex;
  }
  .button.lang {
    background-color: white;
    color: black;
  }
  .button.lang:first-of-type {
    margin-right: 5px;
  }
  .button.lang.selected {
    background-color: #f9423a;
    color: white;
    font-weight: bold;
  }
</style>
