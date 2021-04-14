<template>
  <div class="icon-grid">
    <IconGridItem
      v-for="(icon, iconId) in filteredIconData"
      :key="iconId"
      :iconId="iconId"
      :iconData="icon"
      :styleOption="styleOption"
      :size="size"
      :activeIcon="activeIcon"
      @select="setActiveIcon"
    />
    <IconGridEmpty
      v-if="showEmptyMessage"
      :filterText="filterText"
    />
  </div>
</template>

<script>
import IconGridItem from '../components/IconGridItem.vue'
import IconGridEmpty from '../components/IconGridEmpty.vue'

export default {
  name: 'IconGrid',
  
  components: {
    IconGridItem,
    IconGridEmpty
  },

  props: {
    iconData: Object,
    filterText: String,
    styleOption: String,
    size: String,
    activeIcon: Object
  },

  computed: {
    filteredIconData() {
      if(this.filterText.length == 0) {
        return this.iconData;
      }

      var searchText = this.filterText.toLowerCase();
      var result = {};

      var icon;
      var nameMatch;
      var descriptionMatch;
      for(var iconId in this.iconData) {
        icon = this.iconData[iconId];

        nameMatch = icon.name.toLowerCase().indexOf(searchText) !== -1;
        descriptionMatch = (icon.description && icon.description.toLowerCase().indexOf(searchText) !== -1);

        if(nameMatch || descriptionMatch) {
          result[iconId] = icon;
        }
      }

      return result;
    },

    showEmptyMessage() {
      return Object.keys(this.filteredIconData).length == 0;
    }
  },

  methods: {
    setActiveIcon(value) {
      this.$emit('setActiveIcon', value)
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../scss/variables.scss";

.icon-grid {
  display: flex;
  flex-wrap: wrap;
  border-top: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
  border-left: $borderWidth solid rgba(var(--frontRGB), var(--borderOpacity));
}

.--theme-dark {
  .icon-grid {
    border-color: rgba(var(--frontRGB), var(--borderOpacity));
  }
}

</style>
