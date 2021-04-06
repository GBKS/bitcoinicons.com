<template>
  <div class="theme-picker">
    <button
        @click="toggleTheme"
    >{{ buttonLabel }}</button>
  </div>
</template>

<script>
export default {
  name: 'ThemePicker',

  props: {
    theme: String
  },

  computed: {
    buttonLabel() {
        return this.theme == 'light' ? 'Light' : 'Dark'
    }
  },

  methods: {
    toggleTheme() {
        var value = this.theme == 'light' ? 'dark' : 'light'
        this.$emit('setTheme', value)
    }
  }
}
</script>


<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.theme-picker {
    border-left: 1px solid rgba(var(--frontRGB), 0.07);
    
    button {
        appearance: none;
        background: transparent;
        border-width: 0;
        @include r('font-size', 18, 22);
        padding: 0 20px;
        height: 60px;
        color: rgba(var(--frontRGB), 0.55);
        transition: color 100ms $ease;

        &:focus {
          outline: none;
        }

        &:hover {
          color: $primary;
        }

        &.-active {
          color: var(--front);
        }
    }

  @include media-query(small) {
    flex-grow: 1;
    display: flex;

    button {
      flex-grow: 1;
    }
  }
}

.--theme-dark {
  .theme-picker {
    border-color: rgba(var(--frontRGB), 0.2);
  }
}

</style>
