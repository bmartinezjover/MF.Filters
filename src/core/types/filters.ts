export type ItemStock = {
  [floor: number]: number
}

export type Item = {
  id: number
  itemName: string
  total: number
  icon: string
}

export type FilterSection = {
  id: number
  groupName: string
  color: string
  icon: string
  items: Item[]
}

export enum FiltersView {
  SECTIONS,
  ITEMS,
  SELECTED_ITEM,
}
