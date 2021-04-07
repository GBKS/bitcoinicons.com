<template>
  <div :class="classObject" @click="onClick" ref="canvas">
    <div class="icon">
      <img
        :src="iconFile"
        width="30"
        height="30"
        :alt="iconData.name"
      >
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
    activeIcon: Object
  },

  computed: {
    classObject() {
      var c = ['icon-grid-item'];

      if(this.isActive) {
        c.push('-active');
      }

      return c.join(' ');
    },

    isActive() {
      return this.activeIcon && this.activeIcon.id == this.iconId;
    },

    iconFile() {
      return 'svg/'+this.styleOption+'/'+this.iconId+'.svg';
    }
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
    width: 30px;
    height: 30px;
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
}

.--theme-dark {
  .icon-grid-item {
    // border-color: rgba(var(--frontRGB), var(--borderOpacity));

    .icon {
      filter: invert(100%);
    }

    &.-active {
      &:after {
    
      }
    }
  }
}

</style>
