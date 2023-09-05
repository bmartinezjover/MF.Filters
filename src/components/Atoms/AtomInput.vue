<script lang="ts" setup>
const emits = defineEmits<{
  (e: 'input', value: string): void
}>()

defineProps({
  inputValue: {
    type: String,
    default: ''
  }
})

function emitInput(event: Event): void {
  emits('input', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input type="string" :value="inputValue" @change="emitInput" />
</template>

<style lang="scss" scoped>
input[type='string'] {
  border-radius: 10px;
  border: 1px solid #cccccc;
}
</style>
