import { reactive, ref, computed } from "vue";
import { FilterSection, FiltersView } from "../types/filters";

const $_sections = reactive<FilterSection[]>([]);
const $_currentView = ref<FiltersView>(FiltersView.SECTIONS);
const $_sectionIdSelected = ref<number>(0);
const $_itemIdSelected = ref<number>(0);

export const useItem = function () {
  const getSelectedSection = computed(() =>
    $_sections.find((x) => x.id === $_sectionIdSelected.value)
  );
  const getItems = computed(() => getSelectedSection.value?.items ?? []);

  function initItems(newValue: FilterSection[]) {
    Object.assign($_sections, newValue);
  }
  function setCurrentView(newValue: FiltersView) {
    $_currentView.value = newValue;
  }
  function selectSection(sectionId: number) {
    $_sectionIdSelected.value = sectionId;
  }

  function selectItem(itemId: number) {
    $_itemIdSelected.value = itemId;
  }

  const sections = computed(() => $_sections.values);
  const currentView = computed(() => $_currentView.value);
  const sectionIdSelected = computed(() => $_sectionIdSelected.value);
  const itemIdSelected = computed(() => $_itemIdSelected.value);
  return {
    initItems,
    setCurrentView,
    selectSection,
    selectItem,
    getItems,
    getSelectedSection,
    sections,
    currentView,
    sectionIdSelected,
    itemIdSelected,
  };
};
