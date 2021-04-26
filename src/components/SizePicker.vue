<template>
  <div class="size-picker">
    <button
        v-for="(item, index) in options"
        :key="index"
        :class="item.active ? '-active' : ''"
        :title="item.title"
        :aria-pressed="item.active"
        @click="setSize(item.id)"
    >{{ item.name }}</button>
  </div>
</template>

<script>
export default {
  name: 'SizePicker',

  props: {
    size: String
  },

  computed: {
    options() {
      return [
        {
          id: 'small',
          name: 'S',
          title: 'Small, 16px',
          active: this.size == 'small'
        },
        {
          id: 'medium',
          name: 'M',
          title: 'Medium, 24px',
          active: this.size == 'medium'
        },
        {
          id: 'large',
          name: 'L',
          title: 'Large, 32px',
          active: this.size == 'large'
        }
      ]
    }
  },

  methods: {
    setSize(value) {
      var newValue = value;

      if(value == this.size) {
        switch(value) {
          case 'small':
            newValue = 'medium';
            break;
          case 'medium':
            newValue = 'large';
            break;
          case 'large':
            newValue = 'small';
            break;
        }
      }

      this.$emit('setSize', newValue)
    }
  }
}
</script>


<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.size-picker {
  border-left: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));

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

      &:first-child {
        padding: 0 0 0 5px;
      }

      &:nth-child(2) {
        padding: 0 2px 0 2px;
      }

      &:last-child {
        padding: 0 5px 0 0;
      }
    }
  }

  @include media-query(medium-up) {
    button {
      padding: 0 20px 0 5px;

      &:first-child {
        padding: 0 5px 0 20px;
      }

      &:nth-child(2) {
        padding: 0 10px 0 10px;
      }
    }
  }
}

.--theme-dark {
  .theme-picker {
    border-color: rgba(var(--frontRGB), var(--borderOpacity));
  }
}

</style>
