<template>
  <div class="filter-box">
    <input
        type="text"
        name="filter"
        placeholder="Search icons..."
        v-model="textModel"
        @keyup="keyUp"
    >
  </div>
</template>

<script>
export default {
  name: 'FilterBox',

  props: {
    filterText: String
  },

  data() {
    return {
        textModel: ''
    }
  },

  methods: {
    keyUp() {
        this.$emit('setFilterText', this.textModel)
    }
  }
}
</script>


<style lang="scss" scoped>

@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/animations.scss";

.filter-box {
    flex-grow: 1;

    input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        appearance: none;
        border-width: 0;
        font-size: 18px;
        height: 60px;
        padding: 0 0 0 20px;
        background-color: transparent;
        color: var(--front);

        &:focus {
          outline: none;
        }
    }

    @include media-query(small) {
      flex-basis: 100%;
      border-bottom: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
    }
}

.--theme-dark {
  .filter-box {
    border-color: rgba(var(--frontRGB), var(--borderOpacity));
  }
}

</style>
