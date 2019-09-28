<template>
  <header class="bold">
    <h1>flow</h1>
    <div class="language-selector">
      <div @click="select('HUN')" :class="language === 'HUN' ? 'selected lang' : 'lang'">HUN</div>
      <div @click="select('ENG')" :class="language === 'ENG' ? 'selected lang' : 'lang'">ENG</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'FlowHeader',
  data () {
    return {
      language: 'HUN'
    }
  },
  methods: {
    select(lang) {
      this.language = lang
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
   }
  .language-selector {
    display: flex;
  }
  .lang {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    padding: 8px 5px 5px;
    font-size: 12px;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
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
