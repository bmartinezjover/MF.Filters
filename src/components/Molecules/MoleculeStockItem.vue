<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import AtomBox from '../Atoms/AtomBox.vue'
  import circleProgress from 'vue3-circle-progress'

  const percentage = ref(25)

  const fillColor = computed(() => {
    if (percentage.value > 60) return '#31a84f'
    if (percentage.value > 25) return '#ffd731'
    return '#ff2e16'
  })
</script>

<template>
  <AtomBox>
    <div class="stock-box">
      <h3>Stock</h3>
      <div class="percent-circle">
        <circle-progress :percent="percentage" :fill-color="fillColor" size="100" />
        <div class="remaining">50/100</div>
      </div>
    </div>
  </AtomBox>
</template>

<style lang="scss" scoped>
  .stock-box {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    h3 {
      margin: 0;
    }
    .percent-circle {
      position: relative;
      .remaining {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
    }
  }
</style>
