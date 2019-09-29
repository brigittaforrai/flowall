<template>
  <header class="bold">
    <h1>flow</h1>
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
    }
  }
}
</script>

<style scoped>
   header {
     display: flex;
     align-items: baseline;
     justify-content: space-between;
     width: 100%;
     position: fixed;
     background-color: white;
     padding: 16px;
     left: 0;
     top: 0;
     z-index: 10;
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
  @media (orientation: landscape) {
    header {
      padding: 12px 16px;
    }
  }
</style>
