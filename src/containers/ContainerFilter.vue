<script lang="ts" setup>
import OrganismFilterSection from "../components/Organisms/OrganismFilterSection.vue";
import OrganismFilterItem from "../components/Organisms/OrganismFilterItem.vue";
import OrganismSelectedItem from "../components/Organisms/OrganismSelectedItem.vue";
import AtomInput from "../components/Atoms/AtomInput.vue";
import { PropType, onMounted } from "vue";
import { FilterSection, FiltersView } from "../core/types/filters";
import { useItem } from "../core/composables/useItem";
import { useFilter } from "../core/composables/useFilter";

const props = defineProps({
  sections: {
    type: Array as PropType<FilterSection[]>,
    required: true,
  },
});
const { initItems, currentView, setCurrentView } = useItem();
const { setFilterValue, filterValue } = useFilter();
onMounted(() => {
  initItems(props.sections);
});

function setNewFilterValue(newValue: string) {
  setFilterValue(newValue);
  if (newValue) {
    setCurrentView(FiltersView.ITEMS);
  } else {
    setCurrentView(FiltersView.SECTIONS);
  }
}
</script>

<template>
  <div id="filter">
    <div class="filter-bar">
      <AtomInput :input-value="filterValue" @input="setNewFilterValue" />
    </div>
    <div class="supplies">
      <OrganismFilterSection v-if="currentView === FiltersView.SECTIONS" />
      <OrganismFilterItem v-if="currentView === FiltersView.ITEMS" />
      <OrganismSelectedItem v-if="currentView === FiltersView.SELECTED_ITEM" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#filter {
  width: 100vw;
  height: 100vh;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  .supplies {
    height: 300px;
    margin-bottom: 30px;
    width: 100%;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .filter-bar {
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    max-width: 600px;
  }
}
</style>
