import { reactive, ref, computed } from "vue";
import { FilterSection, FiltersView } from "../types/filters";
import { useFilter } from "./useFilter";

const $_sections = reactive<FilterSection[]>([]);
const $_currentView = ref<FiltersView>(FiltersView.SECTIONS);
const $_sectionIdSelected = ref<number>(0);
const $_itemIdSelected = ref<number>(0);

export const useItem = function () {
  const getSelectedSection = computed(() =>
    $_sections.find((x) => x.id === $_sectionIdSelected.value)
  );
  const getItems = computed(() => {
    const { filterValue, getFiteredItems } = useFilter();
    if (filterValue.value) return getFiteredItems.value;
    else return getSelectedSection.value?.items ?? [];
  });

  const getSelectedItem = computed(
    () => getItems.value?.find((x) => x.id === $_itemIdSelected.value)
  );

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

  function getSectionColor(sectionId?: number) {
    return $_sections.find((x) => x.id === sectionId).color;
  }

  function getSectionIdFromItem(itemId: number) {
    return $_sections.find((x) => x.items.find((x) => x.id === itemId)).id;
  }

  const sections = computed(() => $_sections);
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
    getSelectedItem,
    getSectionColor,
    getSectionIdFromItem,
    sections,
    currentView,
    sectionIdSelected,
    itemIdSelected,
  };
};
