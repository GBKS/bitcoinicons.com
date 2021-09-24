<template>
  <transition name="slide-in-out">
    <div :class="className" :style="styleObject" v-if="activeIcon">
      <IconOverlayHeader
        :activeIcon="activeIcon"
        @close="close"
      />
      <IconOverlayStylePicker
        v-if="isMobile"
        :styleOption="styleOptionModel"
        @setStyleOption="setStyleOption"
      />
      <IconOverlaySection
        v-if="!isMobile || (isMobile && styleOptionModel == 'filled')"
        styleName="filled"
        :isMobile="isMobile"
        :iconData="activeIcon"
      />
      <IconOverlaySection
        v-if="!isMobile || (isMobile && styleOptionModel == 'outline')"
        styleName="outline"
        :isMobile="isMobile"
        :iconData="activeIcon"
      />
    </div>
  </transition>
</template>

<script>
import IconOverlayHeader from '@/components/IconOverlay/Header.vue'
import IconOverlaySection from '@/components/IconOverlay/Section.vue'
import IconOverlayStylePicker from '@/components/IconOverlay/StylePicker.vue'

export default {
  name: 'IconOverlay',
  
  components: {
    IconOverlayHeader,
    IconOverlaySection,
    IconOverlayStylePicker
  },

  props: {
    activeIcon: Object,
    isMobile: Boolean,
    styleOption: String
  },

  data() {
    return {
      styleOptionModel: this.styleOption
    }
  },

  computed: {
    className() {
      var s = ['icon-overlay'];

      if(!this.isMobile) {
        s.push('-' + this.alignment);
      }

      return s.join(' ');
    },

    styleObject() {
      var s = {};

      if(this.activeIcon && !this.isMobile) {
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
  },

  methods: {
    setStyleOption(value) {
      this.styleOptionModel = value
    },

    close() {
      this.$emit('close')
    }
  }
}
</script>


<style lang="scss" scoped>

@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
@import "@/scss/animations.scss";

.icon-overlay {
  flex-grow: 1;
  position: absolute;
  background-color: var(--back);
  border-radius: 10px;
  box-shadow: 0 25px 75px -25px rgba(black, 0.35);
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  transition: all 500ms $ease;

  @include media-query(small) {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    align-content: flex-start;

    &.slide-in-out-enter-active,
    &.slide-in-out-leave-active {
      transition: all 250ms $ease;
      transform: translateY(0px);
    }

    &.slide-in-out-enter,
    &.slide-in-out-leave-to {
      opacity: 0;
      transform: translateY(15px);
    }
  }

  @include media-query(medium-up) {
    border: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));

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
  }
}

.--theme-dark {
  .icon-overlay {

  }
}

</style>
