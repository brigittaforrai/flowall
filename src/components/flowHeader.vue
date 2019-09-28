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
     margin-bottom: 20px;
   }
  .language-selector {
    display: flex;
  }
  .lang {
    background-color: white;
    color: black;
  }
  .lang:first-of-type {
    margin-right: 5px;
  }
  .lang.selected {
    background-color: #f9423a;
    color: white;
    font-weight: bold;
  }
</style>
