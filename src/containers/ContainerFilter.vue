<script lang="ts" setup>
import MoleculeSupplyBox from "../components/Molecules/MoleculeSupplyBox.vue";
import { PropType, onMounted } from "vue";
import { FilterSection, FiltersView } from "../core/types/filters";
import { useItem } from "../core/composables/useItem";

const props = defineProps({
  sections: {
    type: Array as PropType<FilterSection[]>,
    required: true,
  },
});
const {
  initItems,
  selectItem,
  selectSection,
  setCurrentView,
  getItems,
  currentView,
  getSelectedSection,
} = useItem();
onMounted(() => {
  initItems(props.sections);
});

function clickSection(sectionId: number) {
  selectSection(sectionId);
  setCurrentView(FiltersView.ITEMS);
}
function clickItem(itemId: number) {
  selectItem(itemId);
  setCurrentView(FiltersView.SELECTED_ITEM);
}
</script>

<template>
  <div id="filter">
    <div class="supplies">
      <div class="sections" v-if="currentView === FiltersView.SECTIONS">
        <div
          class="section"
          v-for="section in sections"
          :key="`section_${section.id}`"
        >
          <MoleculeSupplyBox
            :color="section.color"
            :icon="section.icon"
            :description="section.groupName"
            @click="clickSection(section.id)"
          />
        </div>
      </div>
      <div class="items" v-else>
        <div class="item" v-for="item in getItems" :key="`item_${item.id}`">
          <MoleculeSupplyBox
            :color="getSelectedSection.color"
            :icon="item.icon"
            :description="item.itemName"
            @click="clickItem(item.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#filter {
  width: 100vw;
  height: 100vh;
  background-color: #f9f9f9;
  flex-flow: row;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  .supplies {
    width: 100%;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    display: flex;
    .sections,
    .items {
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      width: 60%;
      flex-wrap: wrap;
    }
    .section,
    .item {
      margin: 10px;
      cursor: pointer;
    }
  }
}
</style>
