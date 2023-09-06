<script lang="ts" setup>
  import AtomBox from '../Atoms/AtomBox.vue'
  import { Icon } from '@iconify/vue'

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
    iconWidth: {
      type: Number,
      required: true,
    },
  })
</script>

<template>
  <div class="supply-box">
    <AtomBox>
      <div class="supply-content">
        <Icon class="icon" :icon="icon" :width="iconWidth" :color="color" />
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
    }
  }
</style>
