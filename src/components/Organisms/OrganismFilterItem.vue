<script lang="ts" setup>
import MoleculeSupplyBox from '../Molecules/MoleculeSupplyBox.vue'
</script>

<template>
  <div id="filter">
    <div class="supplies">
      <div class="supply">
        <MoleculeSupplyBox color="#B6DBD8" icon="healthicons:medicines" description="pills" />
      </div>
      <div class="supply">
        <MoleculeSupplyBox color="#B6DBD8" icon="healthicons:medicines" description="pills" />
      </div>
      <div class="supply">
        <MoleculeSupplyBox color="#B6DBD8" icon="healthicons:medicines" description="pills" />
      </div>
      <div class="supply">
        <MoleculeSupplyBox color="#B6DBD8" icon="healthicons:medicines" description="pills" />
      </div>
      <div class="supply">
        <MoleculeSupplyBox color="#B6DBD8" icon="healthicons:medicines" description="pills" />
      </div>
      <div class="supply">
        <MoleculeSupplyBox color="#B6DBD8" icon="healthicons:medicines" description="pills" />
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
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 60%;
    flex-wrap: wrap;
    .supply {
      min-width: 25%;
      margin: 10px;
    }
  }
}
</style>
