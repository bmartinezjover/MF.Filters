<script lang="ts" setup>
import OrganismFilterSection from "../components/Organisms/OrganismFilterSection.vue";
import OrganismFilterItem from "../components/Organisms/OrganismFilterItem.vue";
import OrganismSelectedItem from "../components/Organisms/OrganismSelectedItem.vue";
import AtomInput from "../components/Atoms/AtomInput.vue";
import AtomIcon from "../components/Atoms/AtomIcon.vue";
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
const { initItems, setCurrentView, currentView, previousView } = useItem();
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
function goBack() {
  setCurrentView(previousView.value);
}
</script>

<template>
  <div id="filter">
    <div class="filter-bar">
      <AtomInput
        :input-value="filterValue"
        @input="setNewFilterValue"
        v-if="currentView !== FiltersView.SELECTED_ITEM"
      />
    </div>
    <div class="filter-container">
      <OrganismFilterSection v-if="currentView === FiltersView.SECTIONS" />
      <OrganismFilterItem v-if="currentView === FiltersView.ITEMS" />
      <OrganismSelectedItem v-if="currentView === FiltersView.SELECTED_ITEM" />
    </div>
    <div class="back-button">
      <AtomIcon
        background-color="#fff"
        icon="system-uicons:wrap-back"
        icon-width="30px"
        @click="goBack()"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#filter {
  margin: auto;
  width: 60%;
  height: 100vh;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  position: relative;
  .filter-container {
    height: 300px;
    margin-bottom: 30px;
    width: 100%;
    flex-flow: row;
    justify-content: center;
    align-items: flex-start;
    display: flex;
  }
  .filter-bar {
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin-bottom: 20px;
  }
  .back-button {
    position: absolute;
    right: 34px;
    bottom: 10px;
  }
}
</style>
