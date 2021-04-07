<template>
  <div class="style-picker">
    <button
        v-for="(item, index) in options"
        :key="index"
        :class="item.active ? '-active' : ''"
        :disabled="item.active"
        @click="setStyleOption(item.id)"
    >{{ item.name }}</button>
  </div>
</template>

<script>
export default {
  name: 'StylePicker',

  props: {
    styleOption: String
  },

  computed: {
    options() {
      return [
        {
          id: 'filled',
          name: 'Filled',
          active: this.styleOption == 'filled'
        },
        {
          id: 'outline',
          name: 'Outline',
          active: this.styleOption == 'outline'
        }
      ]
    }
  },

  methods: {
    setStyleOption(value) {
      this.$emit('setStyleOption', value)
    }
  }
}
</script>


<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.style-picker {
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
  .style-picker {
    // border-color: rgba(var(--frontRGB), 0.2);
  }
}

</style>
