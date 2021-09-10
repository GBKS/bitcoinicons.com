<template>
  <transition name="fade">
    <div class="icon-overlay-section">
      <transition name="icon-fade" mode="out-in">
        <div class="icon" :key="iconData.id">
          <component
            :is="iconComponentName"
            :alt="iconData.data.name"
          />
        </div>
      </transition>
      <div class="small-icons">
        <div class="icon">
          <component
            :is="iconComponentName"
            alt="Small"
          />
        </div>
        <div class="icon">
          <component
            :is="iconComponentName"
            alt="Medium"
          />
        </div>
        <div class="icon">
          <component
            :is="iconComponentName"
            alt="Big"
          />
        </div>
      </div>
      <IconOverlayContainers
        :styleName="styleName"
        :iconData="iconData"
      />
    </div>
  </transition>
</template>

<script>
import IconOverlayContainers from '@/components/IconOverlay/Containers.vue'

export default {
  name: 'IconOverlaySection',
  
  components: {
    IconOverlayContainers
  },

  props: {
    styleName: String,
    iconData: Object
  },

  computed: {
    iconComponentName() {
      let result = this.iconData.id + 'Icon'

      if(this.styleName == 'filled') {
        result += 'Filled'
      } else {
        result += 'Outline'
      }

      return result
    }
  }
}
</script>


<style lang="scss" scoped>

@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
@import "@/scss/animations.scss";

.icon-overlay-section {
  flex-grow: 1;
  position: relative;

  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 250ms $ease;
    transform: translate(-50%, 0);
  }

  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
    transform: translate(-50%, 15px);
  }

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

      &:first-child {
        svg {
          width: 16px;
          height: 16px;
        }
      }

      &:nth-child(2) {
        svg {
          width: 24px;
          height: 24px;
        }
      }

      &:nth-child(3) {
        svg {
          width: 32px;
          height: 32px;
        }
      }

      svg {
        color: var(--front);
      }

      & + .icon {
        border-left: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
      }
    }
  }

  > .icon {
    border-bottom: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
    padding: 30px;

    svg {
      width: 100%;
      height: auto;
      color: var(--front);
    }

    &.icon-fade-enter-active,
    &.icon-fade-leave-active {
      transition: all 150ms $ease;
    }

    &.icon-fade-enter,
    &.icon-fade-leave-to {
      opacity: 0;
    }
  }

  & + .icon-overlay-section {
    border-left: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
  }

  @include media-query(small) {
    flex-basis: 100%;
    border-bottom: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
  }

  @include media-query(medium-up) {
    flex-basis: 45%;
  }
}

.--theme-dark {
  .icon-overlay-section {
    .small-icons {
      .icon {
        img {
          filter: invert(100%);
        }
      }
    }

    > .icon {
      img {
        filter: invert(100%);
      }
    }
  }
}

</style>
