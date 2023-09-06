<script lang="ts" setup>
import AtomIcon from "../Atoms/AtomIcon.vue";
import AtomBox from "../Atoms/AtomBox.vue";
import { Icon } from "@iconify/vue";

defineProps({
  color: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="supply-box">
    <AtomBox>
      <div class="supply-content">
        <Icon class="icon" :icon="icon" width="200" :color="color" />
        <span class="description">
          {{ description }}
        </span>
      </div>
    </AtomBox>
  </div>
</template>

<style lang="scss" scoped>
.supply-box {
  display: flex;
  width: 100%;
  height: 100%;

  .supply-content {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    .description {
      margin-top: 10px;
    }
  }
}
</style>
