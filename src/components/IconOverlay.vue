<template>
  <div class="icon-overlay" :style="styleObject" v-if="activeIcon">
    <h6>{{ activeIcon ? activeIcon.data.name : 'blah' }}</h6>
    <div class="style">
      <div class="icon">
        <img
          :src="iconFileFilled"
          width="250"
          height="250"
          :alt="activeIcon.data.name"
        >
      </div>
      <div class="small-icons">
        <div class="icon">
          <img
            :src="iconFileFilled"
            width="20"
            height="20"
            :alt="activeIcon.data.name"
          >
        </div>
        <div class="icon">
          <img
            :src="iconFileFilled"
            width="30"
            height="30"
            :alt="activeIcon.data.name"
          >
        </div>
        <div class="icon">
          <img
            :src="iconFileFilled"
            width="40"
            height="40"
            :alt="activeIcon.data.name"
          >
        </div>
      </div>
    </div>
    <div class="style">
      <div class="icon">
        <img
          :src="iconFileOutline"
          width="250"
          height="250"
          :alt="activeIcon.data.name"
        >
      </div>
      <div class="small-icons">
        <div class="icon">
          <img
            :src="iconFileOutline"
            width="20"
            height="20"
            :alt="activeIcon.data.name"
          >
        </div>
        <div class="icon">
          <img
            :src="iconFileOutline"
            width="30"
            height="30"
            :alt="activeIcon.data.name"
          >
        </div>
        <div class="icon">
          <img
            :src="iconFileOutline"
            width="40"
            height="40"
            :alt="activeIcon.data.name"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconOverlay',

  props: {
    activeIcon: Object
  },

  computed: {
    styleObject() {
      var s = {};

      if(this.activeIcon) {
        s.left = (this.activeIcon.x + this.activeIcon.width / 2) + 'px';
        s.top = (this.activeIcon.y + this.activeIcon.height - 5) + 'px';
      }

      return s;
    },

    iconFileFilled() {
      return 'svg/filled/'+this.activeIcon.id+'.svg';
    },

    iconFileOutline() {
      return 'svg/outline/'+this.activeIcon.id+'.svg';
    }
  }
}
</script>


<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.icon-overlay {
    flex-grow: 1;
    position: absolute;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 25px 75px -25px rgba(black, 0.35);
    transform: translateX(-50%);
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    transition: all 500ms $ease;

    h6 {
      flex-basis: 100%;
      @include r('font-size', 18, 24);
      border-bottom: 1px solid rgba(var(--frontRGB), 0.07);
      text-align: center;
      margin: 0;
      font-weight: 400;
      padding: 15px 20px;
    }

    .style {
      flex-basis: 45%;
      flex-grow: 1;
      box-sizing: border-box;
      position: relative;

      .small-icons {
        display: flex;
        align-items: stretch;

        .icon {
          flex-basis: 30%;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 10px;
          padding-bottom: 10px;

          img {

          }

          & + .icon {
            border-left: 1px solid rgba(var(--frontRGB), 0.07);
          }
        }
      }

      > .icon {
        border-bottom: 1px solid rgba(var(--frontRGB), 0.07);
      }

      & + .style {
        &:before {
          display: block;
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          height: 100%;
          background-color: rgba(var(--frontRGB), 0.07);
        }
      }
    }

    @include media-query(small) {
      flex-basis: 100%;
      border-bottom: 1px solid rgba(var(--frontRGB), 0.07);
    }
}

.--theme-dark {
  .icon-overlay {
    border-color: rgba(var(--frontRGB), 0.2);
  }
}

</style>
