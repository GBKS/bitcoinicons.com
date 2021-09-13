<template>
    <div class="icon-overlay-header">
      <h6>{{ activeIcon ? activeIcon.data.name : 'Unnamed' }}</h6>
      <button
        @click="close"
        title="Close overlay"
      >
        <CrossIconFilled alt="Close" />
      </button>
    </div>
</template>

<script>
export default {
  name: 'IconOverlayHeader',

  props: {
    activeIcon: Object,
    isMobile: Boolean
  },

  computed: {

  },

  methods: {
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

.icon-overlay-header {
  display: flex;
  align-items: center;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 15px 10px 25px;
  border-bottom: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));

  h6 {
    flex-grow: 1;
    margin: 0;
    @include r('font-size', 18, 24);
    // text-align: center;
    font-weight: 400;
    color: var(--front);
  }

  button {
    appearance: none;
    background: transparent;
    padding: 10px;
    border-width: 0;
    @include r('font-size', 18, 18);
    line-height: 0;
    color: rgba(var(--frontRGB), 0.55);
    transition: color 100ms $ease;

    svg {
      width: 24px;
      height: 24px;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      color: $primary;
    }

    &.-active {
      color: var(--front);
    }
  }

  @include media-query(small) {
    h6 {

    }
  }

  @include media-query(medium-up) {
    h6 {
      
    }
  }
}

.--theme-dark {
  .icon-overlay-header {
    button {
      img {
        filter: invert(100%);
      }
    }
  }
}

</style>
