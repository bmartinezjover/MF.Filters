<script lang="ts" setup>
import { ref } from "vue";
import AtomBox from "../Atoms/AtomBox.vue";
import { Icon } from "@iconify/vue";

const numberToMove = ref(1);

function changeNumberToMove(num: number) {
  if (numberToMove.value > 1 || num > 0) {
    numberToMove.value += num;
  }
}
const showSelectRoom = ref(true);
</script>

<template>
  <AtomBox>
    <Transition name="fade">
      <div class="select-room" v-if="showSelectRoom">
        <h3>Please select zone to start moving</h3>
      </div>
      <div class="move-box" v-else>
        <h3>Pick quantity</h3>
        <div class="quantity">
          <div class="minus" @click="changeNumberToMove(-1)">
            <Icon color="#d70000" icon="zondicons:minus-solid" width="17.5px" />
          </div>
          <div class="number">{{ numberToMove }}</div>
          <div class="sum" @click="changeNumberToMove(1)">
            <Icon class="icon" icon="flat-color-icons:plus" width="20px" />
          </div>
        </div>
        <div class="total">50/200</div>
        <div class="move-btn">Move!</div>
      </div>
    </Transition>
  </AtomBox>
</template>

<style lang="scss" scoped>
.move-box {
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
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
      cursor: pointer;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: #fff;
    }
    .number {
      font-size: 20px;
    }
  }
  .total {
    font-size: 10px;
  }
  .move-btn {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: #008cba;
    border-radius: 10px;
    margin-top: 15px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
