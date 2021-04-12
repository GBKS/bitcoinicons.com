<template>
  <div id="app" :class="classObject">
    <div class="wrap">    
      <SiteHeader
        :links="links"
      />
      <OptionsBar
        :filterText="filterText"
        :styleOption="styleOption"
        :theme="theme"
        :size="size"
        @setFilterText="setFilterText"
        @setStyleOption="setStyleOption"
        @setTheme="setTheme"
        @setSize="setSize"
      />
      <IconGrid
        :iconData="iconData"
        :filterText="filterText"
        :styleOption="styleOption"
        :activeIcon="activeIcon"
        :size="size"
        @setActiveIcon="setActiveIcon"
      />
      <IconOverlay
        :activeIcon="activeIcon"
        :isMobile="isMobile"
        :styleOption="styleOption"
        @close="closeOverlay"
      />
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import OptionsBar from './components/OptionsBar.vue'
import IconGrid from './components/IconGrid.vue'
import SiteFooter from './components/SiteFooter.vue'
import IconOverlay from './components/IconOverlay/IconOverlay.vue'

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
      size: 'medium',
      activeIcon: null,
      isMobile: false,
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

  beforeMount() {
    this.resize()

    window.addEventListener('resize', this.resize.bind(this))
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

    setSize(value) {
      this.size = value
    },

    setActiveIcon(value) {
      this.activeIcon = value
    },

    closeOverlay() {
      this.setActiveIcon(null);
    },

    resize() {
      this.isMobile = window.innerWidth < 768
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

  > .wrap {
    width: 100%;
    max-width: 1536px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
