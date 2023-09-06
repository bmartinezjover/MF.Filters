<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  backgroundColor: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  iconWidth: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="icon">
    <Icon :icon="props.icon" :width="props.iconWidth" />
  </div>
</template>

<style lang="scss" scoped>
.icon {
  display: flex;
  background-color: v-bind("backgroundColor");
  border: 1px solid #cccccc;
  padding: 15px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
  &:hover {
    background-color: #a6d0e1;
  }
}
</style>
