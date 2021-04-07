<template>
  <div class="icon-grid-empty">
    <p>No matching icons for '{{ filterText }}'.<br/>You can request a new one <a href="https://github.com/BitcoinDesign/Bitcoin-Icons/issues" target="_blank">here</a>.</p>
  </div>
</template>

<script>
export default {
  name: 'IconGridEmpty',

  props: {
    filterText: String
  }
}
</script>

<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.icon-grid-empty {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  border-bottom: 4px solid rgba(var(--frontRGB), var(--borderOpacity));
  border-right: 4px solid rgba(var(--frontRGB), var(--borderOpacity));

  p {
    margin: 0 0 0 0;
    @include r('padding-top', 50, 100);
    @include r('padding-bottom', 50, 100);
    color: rgba(var(--frontRGB), 0.55);
    @include r('font-size', 18, 24);
    line-height: 1.4;
    text-align: center;

    a {
      color: var(--front);
      text-decoration: none;
      transition: all 100ms $ease;

      &:hover {
        color: $primary;
      }
    }
  }
}

.--theme-dark {
  .icon-grid-empty {
    border-color: rgba(var(--frontRGB), var(--borderOpacity));
  }
}

</style>
