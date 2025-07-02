<template>
  <div class="search">
    <img class="search-icon" :src="searchIcon" alt="" />
    <nut-input
      style="padding-left: 20px"
      v-model="val"
      placeholder="课程/场馆/教练/运动项目"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import searchIcon from "../../../assets/images/venue/search-icon.png";
const val = ref("");
</script>

<style lang="scss">
.search {
  width: 100%;
  border-radius: 55px;
  position: relative;
  background-color: #f5f5f5;
  .search-icon {
    padding-right: 20px;
    z-index: 99;
    width: 35px;
    height: 35px;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
}
</style>
