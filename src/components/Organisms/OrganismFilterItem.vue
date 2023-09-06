<script lang="ts" setup>
  import MoleculeSupplyBox from '../Molecules/MoleculeSupplyBox.vue'
  import { FiltersView } from '../../core/types/filters'
  import { useItem } from '../../core/composables/useItem'

  const { getItems, setCurrentView, selectItem, getSectionColor, getSectionIdFromItem } = useItem()

  function clickItem(sectionId: number) {
    selectItem(sectionId)
    setCurrentView(FiltersView.SELECTED_ITEM)
  }
</script>

<template>
  <div class="supplies">
    <div class="supply" v-for="item in getItems" :key="`item_${item.id}`">
      <MoleculeSupplyBox
        :color="getSectionColor(getSectionIdFromItem(item.id))"
        :icon="item.icon"
        :description="item.itemName"
        :icon-width="60"
        @click="clickItem(item.id)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .supplies {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: flex-start;
    width: 60%;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    .supply {
      margin: 10px;
      width: 100px;
      height: 90px;
    }
  }
</style>
