<script lang="ts" setup>
import ContainerFilter from "../containers/ContainerFilter.vue";
import { FilterSection } from "../core/types/filters";

const exampleData: FilterSection[] = [
  {
    id: 1,
    groupName: "Medications",
    color: "#B6DBD8",
    icon: "healthicons:medicines",
    items: [
      {
        id: 1,
        itemName: "Aspirin",
        stock: { 1: 100, 2: 50, 3: 75 },
        total: 225,
        icon: "healthicons:medicines",
      },
      {
        id: 2,
        itemName: "Ibuprofen",
        stock: { 1: 80, 2: 60, 3: 40 },
        total: 180,
        icon: "healthicons:medicines",
      },
    ],
  },
];
</script>

<template>
  <ContainerFilter :sections="exampleData" />
</template>
