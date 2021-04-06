<template>
  <div class="icon-grid">
    <IconGridItem
      v-for="(icon, iconId) in filteredIconData"
      :key="iconId"
      :iconId="iconId"
      :iconData="icon"
      :styleOption="styleOption"
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

.icon-grid {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid rgba(var(--frontRGB), 0.07);
  border-left: 1px solid rgba(var(--frontRGB), 0.07);
}

.--theme-dark {
  .icon-grid {
    border-color: rgba(var(--frontRGB), 0.2);
  }
}

</style>
