<script lang="ts" setup>
import MoleculeSupplyBox from "../Molecules/MoleculeSupplyBox.vue";
import { FiltersView } from "../../core/types/filters";
import { useItem } from "../../core/composables/useItem";

const {
  getItems,
  setCurrentView,
  selectItem,
  getSectionColor,
  getSectionIdFromItem,
} = useItem();

function clickItem(sectionId: number) {
  selectItem(sectionId);
  setCurrentView(FiltersView.SELECTED_ITEM);
}
</script>

<template>
  <div class="supplies">
    <div class="supply" v-for="item in getItems" :key="`item_${item.id}`">
      <MoleculeSupplyBox
        :color="getSectionColor(getSectionIdFromItem(item.id))"
        :icon="item.icon"
        :description="item.itemName"
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
  align-items: center;
  width: 60%;
  flex-wrap: wrap;
  .supply {
    margin: 10px;
  }
}
</style>
