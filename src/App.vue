<template>
  <div id="app" :class="classObject">
    <SiteHeader
      :links="links"
    />
    <OptionsBar
      :filterText="filterText"
      :styleOption="styleOption"
      :theme="theme"
      @setFilterText="setFilterText"
      @setStyleOption="setStyleOption"
      @setTheme="setTheme"
    />
    <IconGrid
      :iconData="iconData"
      :filterText="filterText"
      :styleOption="styleOption"
      :activeIcon="activeIcon"
      @setActiveIcon="setActiveIcon"
    />
    <IconOverlay :activeIcon="activeIcon" />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import OptionsBar from './components/OptionsBar.vue'
import IconGrid from './components/IconGrid.vue'
import SiteFooter from './components/SiteFooter.vue'
import IconOverlay from './components/IconOverlay.vue'

import iconData from './data/icons.json'

export default {
  name: 'App',
  
  components: {
    SiteHeader,
    OptionsBar,
    IconGrid,
    IconOverlay,
    SiteFooter
  },

  data() {
    return {
      iconData: iconData,
      filterText: '',
      styleOption: 'filled',
      theme: 'light',
      activeIcon: null,
      links: [
        {
          name: 'Download',
          url: 'https://github.com/BitcoinDesign/Bitcoin-Icons'
        },
        {
          name: 'Github',
          url: 'https://github.com/BitcoinDesign/Bitcoin-Icons'
        },
        {
          name: 'Figma',
          url: 'https://www.figma.com/community/file/948545404023677970/Bitcoin-icon-set'
        },
        {
          name: 'Contribute',
          url: 'https://github.com/BitcoinDesign/Bitcoin-Icons'
        }
      ]
    }
  },

  computed: {
    classObject() {
      var s = [];

      s.push('--theme-' + this.theme)

      return s.join(' ')
    }
  },

  methods: {
    setStyleOption(value) {
      this.styleOption = value
    },

    setFilterText(value) {
      this.filterText = value
    },

    setTheme(value) {
      this.theme = value
    },

    setActiveIcon(value) {
      this.activeIcon = value
    }
  }
}
</script>

<style lang="scss">

@import "scss/variables.scss";
@import "scss/mixins.scss";
@import "scss/animations.scss";
@import "scss/normalize.scss";

#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--back);
  transition: background-color 250ms $ease;
  min-height: 100vh;
}

</style>
