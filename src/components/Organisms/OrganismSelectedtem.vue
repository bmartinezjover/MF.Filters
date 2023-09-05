<script lang="ts" setup>
import { computed } from 'vue'
import MoleculeSupplyBox from '../Molecules/MoleculeSupplyBox.vue'
import CircleProgress from 'vue3-circle-progress'

const color = computed(() => '#B6DBD8')
</script>

<template>
  <div id="selected-item">
    <div id="selected-item-description">
      <MoleculeSupplyBox backgroundColor="#B6DBD8" icon="pills.svg" description="pills" />
    </div>
    <div id="selected-item-information">
      <div class="stock"><CircleProgress :percent="40" :fill-color="color" /></div>
      <div class="pick"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
