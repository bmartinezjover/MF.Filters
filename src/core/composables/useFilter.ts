import { computed, ref } from 'vue'
import { useItem } from './useItem'

const $_filterValue = ref('')

export const useFilter = function () {
  const getFiteredItems = computed(() => {
    const { sections } = useItem()

    return sections.value.flatMap((x) =>
      x.items.filter((y) => y.itemName.toLowerCase().includes($_filterValue.value.toLowerCase())),
    )
  })
  function setFilterValue(newValue: string) {
    $_filterValue.value = newValue
  }

  const filterValue = computed(() => $_filterValue.value)

  return {
    setFilterValue,
    filterValue,
    getFiteredItems,
  }
}
