<script lang="ts" setup>
import MoleculeSupplyBox from "../Molecules/MoleculeSupplyBox.vue";
import MoleculeStockItem from "../Molecules/MoleculeStockItem.vue";
import MoleculePickItem from "../Molecules/MoleculePickItem.vue";
import MoleculeMoveItem from "../Molecules/MoleculeMoveItem.vue";
import { useItem } from "../../core/composables/useItem";

const { getSelectedItem, getSelectedSection } = useItem();
</script>

<template>
  <div id="selected-item">
    <div id="selected-item-description">
      <MoleculeSupplyBox
        :color="getSelectedSection.color"
        :icon="getSelectedItem.icon"
        :description="getSelectedItem.itemName"
      />
    </div>
    <div id="selected-item-information">
      <div class="row">
        <div class="stock">
          <MoleculeStockItem />
        </div>
      </div>
      <div class="row bottom">
        <div class="pick">
          <MoleculePickItem />
        </div>
        <div class="move">
          <MoleculeMoveItem />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#selected-item {
  display: flex;
  flex-flow: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 60%;
  #selected-item-description {
    height: 100%;
    display: flex;
  }
  #selected-item-information {
    margin-left: 20px;
    height: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    width: 400px;
    > div {
      height: 45%;
    }
    .row {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &.bottom {
        margin: auto;
      }
    }
    .pick,
    .move {
      width: 45%;
    }
    .stock {
      width: 60%;
      height: 100%;
    }
  }
}
</style>
