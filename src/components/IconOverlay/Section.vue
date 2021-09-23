<template>
  <transition name="fade">
    <div class="icon-overlay-section">
      <transition name="icon-fade" mode="out-in">
        <div class="icon" :key="iconData.id">
          <component
            ref="bigIcon"
            :is="iconComponentName"
            :alt="iconData.data.name"
          />
          <button
            v-if="!isMobile && clipboardAvailable"
            :class="copyButtonClass"
            @click="clickCopy"
          >
            <CopyIconFilled />
          </button>
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
    isMobile: Boolean,
    iconData: Object
  },

  data() {
    return {
      clipboardAvailable: navigator.clipboard,
      copyButtonClicked: false
    }
  },

  watch: {
    iconData() {
      this.copyButtonClicked = false
    }
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
    },

    copyButtonClass() {
      const c = []

      if(this.copyButtonClicked) {
        c.push('-active')
      }

      return c
    }
  },

  methods: {
    clickCopy() {
      const bigIcon = this.$refs.bigIcon
      const svgCode = bigIcon.outerHTML
      navigator.clipboard.writeText(svgCode).then(() => {

      })

      this.copyButtonClicked = true
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
    position: relative;

    > svg {
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

    button {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      appearance: none;
      border-width: 0;
      background-color: transparent;
      opacity: 0;
      color: var(--front);
      transition: all 100ms $ease;

      svg {
        width: 30px;
        height: 30px;
      }

      &.-active {
        color: $primary;
        animation: copyBounce 0.5s $easeInOutCubic 1;
      }
    }
  }

  &:hover {
    button {
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
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

  @include media-query(small) {

  }

  @include media-query(medium-up) {

  }
}

.--theme-dark {
  .icon-overlay-section {

  }
}

@keyframes copyBounce {
  0% {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(0.75, 0.75);
  }

  75% {
    transform: scale(1.25, 1.25);
  }

  100% {
    transform: scale(1, 1);
  }
}

</style>
