<template>
  <transition name="fade">
    <div class="icon-overlay-containers">
      <div class="icon -circle -outline">
        <div class="wrap">
          <img
            :src="iconFile"
            width="26"
            height="26"
            alt="Outline circle"
          >
        </div>
      </div>
      <div class="icon -circle -filled">
        <div class="wrap">
          <img
            :src="iconFile"
            width="26"
            height="26"
            alt="Outline filled"
          >
        </div>
      </div>
      <div class="icon -square -outline">
        <div class="wrap">
          <img
            :src="iconFile"
            width="26"
            height="26"
            alt="Square outline"
          >
        </div>
      </div>
      <div class="icon -square -filled">
        <div class="wrap">
          <img
            :src="iconFile"
            width="26"
            height="26"
            alt="Square filled"
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IconOverlayContainers',

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

.icon-overlay-containers {
  display: flex;
  align-items: stretch;
  border-top: 1px solid rgba(var(--frontRGB), 0.07);

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

  .icon {
    flex-basis: 30%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;

    .wrap {
      padding: 2px;
    }

    &.-circle {
      line-height: 0;

      .wrap {

      }

      &.-outline {
        .wrap {
          border: 1px solid var(--front);
          border-radius: 100px;
        }
      }

      &.-filled {
        .wrap {
          background-color: var(--front);
          border-radius: 100px;

          img {
            filter: invert(100%);
          }
        }
      }
    }

    &.-square {
      line-height: 0;

      .wrap {

      }

      &.-outline {
        .wrap {
          border: 1px solid var(--front);
          border-radius: 3px;
        }
      }

      &.-filled {
        .wrap {
          background-color: var(--front);
          border-radius: 3px;

          img {
            filter: invert(100%);
          }
        }
      }
    }

    img {

    }

    & + .icon {
      border-left: 1px solid rgba(var(--frontRGB), 0.07);
    }
  }
}

.--theme-dark {
  .icon-overlay-containers {
    border-color: rgba(var(--frontRGB), 0.2);

    .icon {
      &.-circle {
        &.-outline {
          .wrap {
            img {
              filter: invert(100%);
            }
          }
        }

        &.-filled {
          .wrap {
            background-color: var(--front);
            border-radius: 100px;

            img {
              filter: none;
            }
          }
        }
      }

      &.-square {
        line-height: 0;

        &.-outline {
          .wrap {
            img {
              filter: invert(100%);
            }
          }
        }

        &.-filled {
          .wrap {
            img {
              filter: none;
            }
          }
        }
      }

      & + .icon {
        border-color: rgba(var(--frontRGB), 0.2);
      }
    }
  }
}

</style>
