export type Item = {
  id: number
  stock: number
  max: number
}

export type Room = {
  id: number
  items: Item[]
}

export type FloorSection = {
  id: number
  floor: number
  roomNumber: number
  rooms: Room[]
}
