<template>
  <div class="theme-picker">
    <button
        v-for="(item, index) in options"
        :key="index"
        :class="item.active ? '-active' : ''"
        :disabled="item.active"
        @click="setTheme(item.id)"
    >{{ item.name }}</button>
  </div>
</template>

<script>
export default {
  name: 'ThemePicker',

  props: {
    theme: String
  },

  computed: {
    options() {
      return [
        {
          id: 'light',
          name: 'Light',
          active: this.theme == 'light'
        },
        {
          id: 'dark',
          name: 'Dark',
          active: this.theme == 'dark'
        }
      ]
    }
  },

  methods: {
    setTheme(value) {
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
  border-left: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));

  button {
    appearance: none;
    background: transparent;
    border-width: 0;
    @include r('font-size', 18, 18);
    padding: 0 5px 0 20px;
    height: 60px;
    color: rgba(var(--frontRGB), 0.55);
    transition: color 100ms $ease;

    &:focus {
      outline: none;
    }

    &:hover {
      color: $primary;
    }

    &:last-child {
      padding: 0 20px 0 5px;
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
    border-color: rgba(var(--frontRGB), var(--borderOpacity));
  }
}

</style>
