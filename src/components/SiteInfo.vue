<template>
  <div class="site-info">
    <h2>About these icons</h2>
    <p>Bitcoin has many unique elements users come in contact with. We’ve found that applications built on Bitcoin have similar needs for icons and decided to create this set for anyone to use.</p>
    <p>The goal is to create high-quality icons that cover general UI needs (home, arrows...) and Bitcoin-specific needs (wallet, node...), and can be easily used for design, prototyping, as well as distribution in software.</p>
    <div class="visuals">
      <figure>
        <img
          src="icon-grid.svg"
          width="300"
          height="300"
          alt="Icon grid"
        >
        <figcaption>A grid we are working on for consistency and crisp rendering.</figcaption>
      </figure>
      <figure>
        <img
          src="icon-grid-sample.svg"
          width="300"
          height="300"
          alt="Icon grid sample application"
        >
        <figcaption>Example of how the wallet icon fits on the grid.</figcaption>
      </figure>
    </div>
    <p>This is an open-source & open-design project. It gets better with your feedback and contribution. To take a peek behind the scenes, <a href="https://www.figma.com/community/file/948545404023677970/Bitcoin-icon-set" target="_blank" rel="noreferrer noopener">Figma</a> and <a href="https://github.com/BitcoinDesign/Bitcoin-Icons" target="_blank" rel="noreferrer noopener">Github</a> are the best places to start.</p>
  </div>
</template>

<script>
export default {
  name: 'SiteInfo',

  props: {

  }
}
</script>

<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.site-info {
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  @include r('margin-top', 40, 80);
  padding-left: 10px;
  padding-right: 10px;

  h2 {
    margin: 0;
    @include r('font-size', 22, 27);
    @include r('letter-spacing', -0.5, -1);
    font-weight: 400;
    color: var(--front);
  }

  p {
    @include r('font-size', 16, 18);
    line-height: 1.4;
    color: rgba(var(--frontRGB), 0.55);

    a {
      color: var(--front);
      text-decoration: none;

      &:hover {
        color: $primary;
        text-decoration: underline;
        transition: all 100ms $ease;
      }
    }
  }

  .visuals {
    @include r('margin-top', 20, 40);

    figure {
      margin: 0;

      img {
        width: 100%;
        height: auto;
      }

      figcaption {
        @include r('margin-top', 10, 20);
        text-align: center;
        @include r('font-size', 13, 15);
        line-height: 1.4;
        color: rgba(var(--frontRGB), 0.55);
      }
    }

    & + p {
      @include r('margin-top', 20, 40);
    }
  }

  @include media-query(small) {
    .visuals {
      figure {
        & + figure {
          margin-top: 20px;
        }
      }
    }
  }

  @include media-query(medium-up) {
    .visuals {
      display: flex;

      figure {
        flex-basis: 50%;
        flex-shrink: 1;

        & + figure {
          margin-left: 40px;
        }
      }
    }
  }
}

.--theme-dark {
  .site-info {
    .visuals {
      figure {
        img {
          filter: invert(100%);
        }
      }
    }
  }
}

</style>
