<script lang="ts" setup>
const props = defineProps({
  backgroundColor: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  iconWidth: {
    type: String,
    required: true
  }
})

function getImg() {
  return new URL(`/src/assets/icons/${props.icon}`, import.meta.url).toString()
}
</script>

<template>
  <div class="icon">
    <img :src="getImg()" />
  </div>
</template>

<style lang="scss" scoped>
.icon {
  display: flex;
  background-color: v-bind('backgroundColor');
  padding: 25px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin: 0;
  img {
    width: v-bind('iconWidth + `px`');
  }
}
</style>
