<template>
  <div class="recommend">
    <div class="recommend-title">
      <span style="font-weight: 600; font-size: 13px">推荐场馆</span>
      <span style="font-weight: normal; color: #999">更多</span>
    </div>
    <div class="recommend-list">
      <div
        class="recommend-item"
        v-for="(item, index) in recommendList"
        :key="index"
      >
        <img :src="item.img" alt="" />
        <div class="recommend-info">
          <div class="name">{{ item.name }}</div>
          <div class="address">{{ item.address }}</div>
          <div class="time">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import recommendImg from "../../../assets/images/venue/venue.png";
import recommendImg1 from "../../../assets/images/venue/venue1.png";
import recommendImg2 from "../../../assets/images/venue/venue2.png";
const recommendList = ref([
  {
    name: "寰宇空间健身体验馆",
    address: "天河区体育西107号盛雅商务中心A座4楼",
    time: "营业中：09:00-22:00",
    img: recommendImg,
  },
  {
    name: "名狮羽毛球馆",
    address: "海珠区赤岗西路20-22号长流小区2号楼（客村地铁站D...",
    time: "营业中：09:00-21:00",
    img: recommendImg1,
  },
  {
    name: "华景会所欧奕健身游泳池",
    address: "天河区华景新城190号华经会所一楼",
    time: "营业中：09:00-20:00",
    img: recommendImg2,
  },
]);
</script>
<style lang="scss">
.recommend {
  width: 100%;
  margin-top: 40px;
  .recommend-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-bottom: 30px;
    font-size: 20px;
  }
  .recommend-list {
    .recommend-item {
      margin-bottom: 50px;
      img {
        width: 100%;
        height: 300px;
      }
      .recommend-info {
        margin-top: 10px;
        padding-left: 30px;
        .name {
          font-size: 24px;
          font-weight: bold;
          color: #333;
        }
        .address {
          font-size: 18px;
          color: #666;
          margin-top: 10px;
        }
        .time {
          font-size: 18px;
          color: #999;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
