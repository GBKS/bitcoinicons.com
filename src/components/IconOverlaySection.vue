<template>
  <transition name="fade">
    <div class="icon-overlay-section">
      <div class="icon">
        <img
          :src="iconFile"
          width="250"
          height="250"
          :alt="iconData.name"
        >
      </div>
      <div class="small-icons">
        <div class="icon">
          <img
            :src="iconFile"
            width="20"
            height="20"
            alt="Small"
          >
        </div>
        <div class="icon">
          <img
            :src="iconFile"
            width="30"
            height="30"
            alt="Medium"
          >
        </div>
        <div class="icon">
          <img
            :src="iconFile"
            width="40"
            height="40"
            alt="Big"
          >
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
import IconOverlayContainers from '../components/IconOverlayContainers.vue'

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
    iconFile() {
      return 'svg/'+this.styleName+'/'+this.iconData.id+'.svg';
    }
  }
}
</script>


<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.icon-overlay-section {
  flex-basis: 45%;
  flex-grow: 1;
  // box-sizing: border-box;
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

      img {

      }

      & + .icon {
        border-left: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
      }
    }
  }

  > .icon {
    border-bottom: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));

    img {
      width: 100%;
      height: auto;
    }
  }

  & + .icon-overlay-section {
    border-left: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
  }
}

.--theme-dark {
  .icon-overlay-section {
    .small-icons {
      .icon {
        img {
          filter: invert(100%);
        }

        & + .icon {
          // border-color: rgba(var(--frontRGB), 0.2);
        }
      }
    }

    > .icon {
      // border-color: rgba(var(--frontRGB), 0.2);

      img {
        filter: invert(100%);
      }
    }

    & + .icon-overlay-section {
      // border-color: rgba(var(--frontRGB), 0.2);
    }
  }
}

</style>
