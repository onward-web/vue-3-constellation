<script setup lang="ts">

import Vue3Constellation from './components/Vue3Constellation.vue'

const quickMenuOption = {
  menuCount: 4,
  urlsData: [
      {type:'external',url: 'tel:+380688339030', target: '_blank'},
      {type:false,url: false, target: '_self'},
      {type:'external',url: 'mailto:info@onward-web.com'},
      {type:'external',url: 'viber://chat?number=%2B380688339030'}
  ],
  linkIconClassList: ['menu-animate', 'menu-animate', 'menu-animate', 'menu-animate'],
  iconNameList: ['base/phone', 'base/chat', 'base/email', 'base/viber'],
  itemTitleList: ['addons.QuickMenu.tooltip.phone', 'addons.QuickMenu.tooltip.chat', 'addons.QuickMenu.tooltip.email', 'addons.QuickMenu.tooltip.viber'],
  tooltipData: [
    {content: 'test1', placement: 'left', container: '#quickMenuItem_0'},
    {content: 'test2', placement: 'left', container: '#quickMenuItem_1'},
    {content: 'test3', placement: 'left', container: '#quickMenuItem_2'},
    {content: 'test4', placement: 'bottom', container: '#quickMenuItem_3'}
  ],
  menuPosition: 'bottom-right',
  menuBackgroundColor: '#ff0f33',
};

// methods
const quickMenuListener = () => {

}

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Vue3Constellation>
  </Vue3Constellation>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
