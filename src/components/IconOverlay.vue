<template>
  <transition name="slide-in-out">
    <div :class="className" :style="styleObject" v-if="activeIcon">
      <h6>{{ activeIcon ? activeIcon.data.name : 'blah' }}</h6>
      <IconOverlaySection
        styleName="filled"
        :iconData="activeIcon"
      />
      <IconOverlaySection
        styleName="outline"
        :iconData="activeIcon"
      />
    </div>
  </transition>
</template>

<script>
import IconOverlaySection from '../components/IconOverlaySection.vue'

export default {
  name: 'IconOverlay',
  
  components: {
    IconOverlaySection
  },

  props: {
    activeIcon: Object
  },

  computed: {
    className() {
      var s = ['icon-overlay'];

      s.push('-' + this.alignment);

      return s.join(' ');
    },

    styleObject() {
      var s = {};

      if(this.activeIcon) {
        switch(this.alignment) {
          case 'left':
            s.left = this.activeIcon.x + 'px';
            break;
          case 'right':
            s.left = (this.activeIcon.x + this.activeIcon.width) + 'px';
            break;
          default:
            s.left = (this.activeIcon.x + this.activeIcon.width / 2) + 'px';
            break;
        }
        
        s.top = (this.activeIcon.y + this.activeIcon.height - 5) + 'px';
      }

      return s;
    },

    alignment() {
      var result = 'center';

      if(this.activeIcon) {
        if(this.activeIcon.x < 250) {
          result = 'left';
        } else if(this.activeIcon.x > window.innerWidth - 250) {
          result = 'right';
        }
      }

      return result;
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
  background-color: var(--back);
  border-radius: 10px;
  box-shadow: 0 25px 75px -25px rgba(black, 0.35);
  border: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  transition: all 500ms $ease;

  &.-left {
    transform: translate(0, 0);
  }

  &.-right {
    transform: translate(-100%, 0);
  }

  &.-center {
    transform: translate(-50%, 0);
  }

  &.slide-in-out-enter-active,
  &.slide-in-out-leave-active {
    transition: all 250ms $ease;

    &.-left {
      transform: translate(0, 0);
    }

    &.-right {
      transform: translate(-100%, 0);
    }

    &.-center {
      transform: translate(-50%, 0);
    }
  }

  &.slide-in-out-enter,
  &.slide-in-out-leave-to {
    opacity: 0;

    &.-left {
      transform: translate(0, 15px);
    }

    &.-right {
      transform: translate(-100%, 15px);
    }

    &.-center {
      transform: translate(-50%, 15px);
    }
  }

  h6 {
    flex-basis: 100%;
    @include r('font-size', 18, 24);
    border-bottom: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
    text-align: center;
    margin: 0;
    font-weight: 400;
    padding: 15px 20px;
    color: var(--front);
  }

  @include media-query(small) {
    flex-basis: 100%;
    border-bottom: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
  }
}

.--theme-dark {
  .icon-overlay {
    // border-color: rgba(var(--frontRGB), 0.3);

    h6 {
      // border-color: rgba(var(--frontRGB), 0.2);
    }
  }
}

</style>
