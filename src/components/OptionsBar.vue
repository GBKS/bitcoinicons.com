<template>
  <div class="options-bar">
    <FilterBox :filterText="filterText" @setFilterText="setFilterText" />
    <StylePicker :styleOption="styleOption" @setStyleOption="setStyleOption" />
    <ThemePicker :theme="theme" @setTheme="setTheme" />
    <SizePicker :size="size" @setSize="setSize" />
  </div>
</template>

<script>
import FilterBox from '../components/FilterBox.vue'
import StylePicker from '../components/StylePicker.vue'
import ThemePicker from '../components/ThemePicker.vue'
import SizePicker from '../components/SizePicker.vue'

export default {
  name: 'OptionsBar',
  
  components: {
    FilterBox,
    StylePicker,
    ThemePicker,
    SizePicker
  },

  props: {
    filterText: String,
    styleOption: String,
    theme: String,
    size: String
  },

  methods: {
    setFilterText(value) {
        this.$emit('setFilterText', value)
    },

    setStyleOption(value) {
        this.$emit('setStyleOption', value)
    },

    setTheme(value) {
        this.$emit('setTheme', value)
    },

    setSize(value) {
        this.$emit('setSize', value)
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.options-bar {
  display: flex;
  border-top: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
  border-left: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
  border-right: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));

  @include media-query(small) {
    flex-wrap: wrap;
  }
}

.--theme-dark {
  .options-bar {
    // border-color: rgba(var(--frontRGB), 0.2);
  }
}

</style>
