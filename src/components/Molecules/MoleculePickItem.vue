<script lang="ts" setup>
import { ref } from "vue";
import AtomBox from "../Atoms/AtomBox.vue";

const numberToPick = ref(1);

function changeNumberToPick(num: number) {
  if (numberToPick.value > 1 || num > 0) {
    numberToPick.value += num;
  }
}
</script>

<template>
  <AtomBox>
    <div class="pick-box">
      <div class="quantity">
        <div class="minus" @click="changeNumberToPick(-1)">-</div>
        <div class="number">{{ numberToPick }}</div>
        <div class="sum" @click="changeNumberToPick(1)">+</div>
      </div>
      <div class="total">50/200</div>
      <div class="pick-btn">Pick!</div>
    </div>
  </AtomBox>
</template>

<style lang="scss" scoped>
.pick-box {
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
    .minus,
    .sum {
      padding: 5px;
      width: 10px;
      height: 10px;
      font-weight: bold;
      font-size: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
      line-height: 0;
      cursor: pointer;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: #fff;
    }
    .minus {
      color: #fff;
      border: 1px solid #a01010;
    }
    .sum {
      color: #fff;
      border: 1px solid #02aa1e;
    }
    .number {
      font-size: 20px;
    }
  }
  .total {
    font-size: 12px;
  }
}
</style>
