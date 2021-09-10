<template>
  <transition name="fade">
    <div class="icon-overlay-containers">
      <div class="icon -circle -outline">
        <div class="wrap">
          <component
            :is="iconComponentName"
            alt="Outline circle"
          />
        </div>
      </div>
      <div class="icon -circle -filled">
        <div class="wrap">
          <component
            :is="iconComponentName"
            alt="Outline filled"
          />
        </div>
      </div>
      <div class="icon -square -outline">
        <div class="wrap">
          <component
            :is="iconComponentName"
            alt="Square outline"
          />
        </div>
      </div>
      <div class="icon -square -filled">
        <div class="wrap">
          <component
            :is="iconComponentName"
            alt="Square filled"
          />
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

.icon-overlay-containers {
  display: flex;
  align-items: stretch;
  border-top: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));

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

      svg {
        width: 26px;
        height: 26px;
      }
    }

    &.-circle {
      line-height: 0;

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

          svg {
            color: var(--back);
          }
        }
      }
    }

    &.-square {
      line-height: 0;

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

          svg {
            color: var(--back);
          }
        }
      }
    }

    & + .icon {
      border-left: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
    }
  }
}

.--theme-dark {
  .icon-overlay-containers {
    .icon {
      &.-circle {
        &.-outline {
          .wrap {
            svg {
              color: var(--back);
            }
          }
        }

        &.-filled {
          .wrap {
            background-color: var(--front);
            border-radius: 100px;

            svg {
              color: var(--back);
            }
          }
        }
      }

      &.-square {
        line-height: 0;

        &.-outline {
          .wrap {
            svg {
              color: var(--back);
            }
          }
        }

        &.-filled {
          .wrap {
            svg {
              color: var(--front);
            }
          }
        }
      }
    }
  }
}

</style>
