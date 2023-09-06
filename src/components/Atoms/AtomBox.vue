<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.box {
  border: 1px solid #cccccc;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
