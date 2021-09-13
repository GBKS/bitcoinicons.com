<template>
  <div
    :class="classObject"
    ref="canvas"
    role="button"
    :aria-pressed="isActive"
    @click="onClick"
  >
    <div class="icon">
      <component
        :is="iconComponentName"
        :alt="iconData.name"
      />
    </div>
    <p>{{ iconData.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'IconGridItem',

  props: {
    iconId: String,
    iconData: Object,
    styleOption: String,
    size: String,
    activeIcon: Object
  },

  computed: {
    classObject() {
      var c = ['icon-grid-item'];

      if(this.isActive) {
        c.push('-active');
      }

      c.push('-' + this.size)

      return c.join(' ');
    },

    isActive() {
      return this.activeIcon && this.activeIcon.id == this.iconId;
    },

    iconComponentName() {
      let result = this.iconData.id + 'Icon'

      if(this.styleOption == 'filled') {
        result += 'Filled'
      } else {
        result += 'Outline'
      }

      return result
    },

    iconSize() {
      var result = 24;

      if(this.size == 'small') {
        result = 16;
      } else if(this.size == 'large') {
        result = 32;
      }

      return result;
    }
  },

  mounted() {
    // console.log('item', this.styleOption)
    // for(let k in this.iconData) {
    //   console.log('k', k, this.iconData[k])
    // }
  },

  methods: {
    onClick() {
      if(this.isActive) {
        this.$emit('select', null);
      } else {
        var rect = this.$refs.canvas.getBoundingClientRect();
        var x = this.$refs.canvas.offsetLeft;
        var y = this.$refs.canvas.offsetTop;
        var width = rect.width;
        var height = rect.height;

        this.$emit('select', {
          id: this.iconId,
          data: this.iconData,
          x: x,
          y: y,
          width: width,
          height: height
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.icon-grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  flex-basis: 120px;
  flex-grow: 1;
  border-bottom: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
  border-right: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
  position: relative;

  .icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    
    svg {
      width: 24px;
      height: 24px;
      transition: all 150ms $ease;
    }
  }

  p {
    margin: 20px 0 0 0;
    padding-left: 10px;
    padding-right: 10px;
    color: rgba(var(--frontRGB), 0.55);
    @include r('font-size', 12, 12);
    text-align: center;
  }

  &.-active {
    &:after {
      display: block;
      position: absolute;
      content: '';
      left: -$borderWidth;
      top: -$borderWidth;
      right: -$borderWidth;
      bottom: -$borderWidth;
      border: $borderWidth solid var(--front);
      pointer-events: none;
    }
  }

  &.-small {
    svg {
      width: 16px;
      height: 16px;
    }
  }

  &.-large {
    svg {
      width: 32px;
      height: 32px;
    }
  }
}

.--theme-dark {
  .icon-grid-item {
    // border-color: rgba(var(--frontRGB), var(--borderOpacity));

    .icon {
      color: white;
      // filter: invert(100%);
    }

    &.-active {
      &:after {
    
      }
    }
  }
}

</style>
