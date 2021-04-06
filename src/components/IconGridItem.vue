<template>
  <div class="icon-grid-item" @click="onClick" ref="canvas">
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
    styleOption: String
  },

  computed: {
    iconFile() {
      return 'svg/'+this.styleOption+'/'+this.iconId+'.svg';
    }
  },

  methods: {
    onClick() {
        var rect = this.$refs.canvas.getBoundingClientRect();
        var x = this.$refs.canvas.offsetLeft;
        var y = this.$refs.canvas.offsetTop;
        var width = rect.width;
        var height = rect.height;


      console.log('aaa', this.$refs.canvas.getBoundingClientRect());
      console.log('offsetTop', this.$refs.canvas.offsetTop, this.$refs.canvas.offsetLeft);

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
  border-bottom: 1px solid rgba(var(--frontRGB), 0.07);
  border-right: 1px solid rgba(var(--frontRGB), 0.07);

  .icon {
    width: 30px;
    height: 30px;
  }

  p {
    margin: 20px 0 0 0;
    color: rgba(var(--frontRGB), 0.55);
    @include r('font-size', 12, 12);
    text-align: center;
  }
}

.--theme-dark {
  .icon-grid-item {
    border-color: rgba(var(--frontRGB), 0.2);

    .icon {
      filter: invert(100%);
    }
  }
}

</style>
