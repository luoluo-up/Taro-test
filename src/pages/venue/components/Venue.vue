<template>
  <div class="venue">
    <div class="venue-item" v-for="(item, index) in list" :key="index">
      <img :src="item.path" alt="" srcset="" />
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import icon1 from "../../../assets/images/venue/1 (1).png";
import icon2 from "../../../assets/images/venue/1 (2).png";
import icon3 from "../../../assets/images/venue/1 (3).png";
import icon4 from "../../../assets/images/venue/1 (4).png";
import icon5 from "../../../assets/images/venue/1 (5).png";
import icon6 from "../../../assets/images/venue/1 (6).png";
import icon7 from "../../../assets/images/venue/1 (7).png";
import icon8 from "../../../assets/images/venue/1 (8).png";
import { ref } from "vue";
const list = ref([
  {
    path: icon1,
    text: "健身房",
  },
  {
    path: icon2,
    text: "篮球馆",
  },
  {
    path: icon3,
    text: "羽毛球馆",
  },
  {
    path: icon4,
    text: "乒乓球",
  },
  {
    path: icon5,
    text: "游泳馆",
  },
  {
    path: icon6,
    text: "瑜伽馆",
  },
  {
    path: icon7,
    text: "网球馆",
  },
  {
    path: icon8,
    text: "查看更多",
  },
]);
</script>
<style lang="scss">
.venue {
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .venue-item {
    margin-top: 20px;
    width: 25%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
    }
    span {
      font-size: 14px;
      color: #333;
    }
  }
}
</style>
