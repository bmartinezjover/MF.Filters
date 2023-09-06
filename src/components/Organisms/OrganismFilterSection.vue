<script lang="ts" setup>
  import MoleculeSupplyBox from '../Molecules/MoleculeSupplyBox.vue'
  import { FiltersView } from '../../core/types/filters'
  import { useItem } from '../../core/composables/useItem'

  const { selectSection, setCurrentView, sections } = useItem()

  function clickSection(sectionId: number) {
    selectSection(sectionId)
    setCurrentView(FiltersView.ITEMS)
  }
</script>

<template>
  <div id="supplies">
    <div class="supply" v-for="section in sections" :key="`section_${section.id}`">
      <MoleculeSupplyBox
        :color="section.color"
        :icon="section.icon"
        :icon-width="120"
        :description="section.groupName"
        @click="clickSection(section.id)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #supplies {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 60%;
    flex-wrap: wrap;
    .supply {
      margin: 10px;
    }
  }
</style>
