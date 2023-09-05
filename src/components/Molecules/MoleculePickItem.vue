<script lang="ts" setup>
import AtomBox from '../Atoms/AtomBox.vue'
</script>

<template>
  <AtomBox>
    <div class="pick-box">
      <div class="quantity">
        <span class="minus">-</span>
        <span class="number">2</span>
        <span class="sum">+</span>
      </div>
      <div class="total">50/200</div>
      <div class="pick-btn">Pick!</div>
    </div>
  </AtomBox>
</template>

<style lang="scss" scoped>
#pick-box {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .quantity {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    span {
      margin: 5px;
      &.minus,
      &.sum {
        border: 1px solid #cccccc;
        padding: 5px;
      }
      &.number {
        font-size: 14px;
      }
    }
  }
}
</style>
