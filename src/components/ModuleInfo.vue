<template>
  <div class="module-info">
    <div class="module">
      <div class="copy">
        <h2>Vue module</h2>
        <a
          href="https://www.npmjs.com/package/@bitcoin-design/bitcoin-icons-vue" 
          rel="nofollow" 
        >
          <img
            src="https://img.shields.io/npm/v/@bitcoin-design/bitcoin-icons-vue.svg?style=flat-square"
            alt="Vue module npm version" 
          >
        </a>
        <a
          href="https://www.npmjs.com/package/@bitcoin-design/bitcoin-icons-vue"
          rel="nofollow"
        >
          <img
            src="https://img.shields.io/npm/dm/@bitcoin-design/bitcoin-icons-vue.svg?style=flat-square"
            alt="Vue module npm downloads"
          >
        </a>
      </div>
      <a href="https://www.npmjs.com/package/@bitcoin-design/bitcoin-icons-vue">Get it</a>
    </div>
    <div class="module">
      <div class="copy">
        <h2>React module</h2>
        <a
          href="https://www.npmjs.com/package/@bitcoin-design/bitcoin-icons-react" 
          rel="nofollow" 
        >
          <img
            src="https://img.shields.io/npm/v/@bitcoin-design/bitcoin-icons-react.svg?style=flat-square"
            alt="React module npm version" 
          >
        </a>
        <a
          href="https://www.npmjs.com/package/@bitcoin-design/bitcoin-icons-react"
          rel="nofollow"
        >
          <img
            src="https://img.shields.io/npm/dm/@bitcoin-design/bitcoin-icons-react.svg?style=flat-square"
            alt="React module npm downloads"
          >
        </a>
      </div>
      <a href="https://www.npmjs.com/package/@bitcoin-design/bitcoin-icons-react">Get it</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleInfo',

  props: {

  }
}
</script>

<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.module-info {
  display: flex;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  @include r('margin-top', 40, 80);
  padding-left: 10px;
  padding-right: 10px;

  .module {
    text-align: center;
      
    .copy {
      h2  {
        margin: 0;
        @include r('font-size', 22, 27);
        @include r('letter-spacing', -0.5, -1);
        font-weight: 400;
        color: var(--front);
      }

      a {
        margin-top: 10px;
        display: inline-block;

        & + a {
          margin-left: 5px;
        }
      }
    }

    > a {
      margin: 20px 0 0 0;
      display: inline-block;
      border: 2px solid var(--front);
      color: var(--front);
      text-decoration: none;
      line-height: 40px;
      padding: 0 20px;
      font-weight: 600;
      transition: all 100ms $ease;

      svg {
        display: inline-block;
        vertical-align: middle;
        width: 24px;
        height: 24px;
        transition: all 150ms $ease;
        transform: translate(0, -2px);
      }

      img {
        filter: invert(100%);
        vertical-align: middle;
        display: inline-block;
        margin-left: 10px;
        transition: all 150ms $ease;
      }

      &:hover {
        border-color: $primary;
        color: $primary;
      }
    }
  }

  @include media-query(small) {
    flex-direction: column;
    
    .module {
      & + .module {
        @include r('margin-top', 40, 80);
      }
    }
  }

  @include media-query(medium-up) {
    .module {
      flex-grow: 1;
    }
  }
}

.--theme-dark {
  .site-info {

  }
}

</style>
