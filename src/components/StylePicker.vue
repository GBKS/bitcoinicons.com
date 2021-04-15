<template>
  <div class="style-picker">
    <button
        v-for="(item, index) in options"
        :key="index"
        :class="item.active ? '-active' : ''"
        :aria-pressed="item.active"
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
      var newValue = value;

      if(value == this.styleOption) {
        newValue = this.styleOption == 'filled' ? 'outline' : 'filled';
      }
      
      this.$emit('setStyleOption', newValue);
    }
  }
}
</script>


<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.style-picker {
  button {
    appearance: none;
    background: transparent;
    border-width: 0;
    @include r('font-size', 15, 18);
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
      padding: 0 0 0 5px;

      &:last-child {
        padding: 0 5px 0 0;
      }
    }
  }

  @include media-query(medium-up) {
    border-left: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));

    button {
      padding: 0 5px 0 20px;

      &:last-child {
        padding: 0 20px 0 5px;
      }
    }
  }
}

.--theme-dark {
  .style-picker {
    // border-color: rgba(var(--frontRGB), 0.2);
  }
}

</style>
