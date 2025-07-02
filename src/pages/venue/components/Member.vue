<template>
  <div class="member">
    <div class="member-trade">{{ title }}</div>
    <div class="member-list">
      <div class="member-item" v-for="(item, index) in memberList" :key="index">
        <img :src="item.img" alt="" />
        <div class="member-info">
          <div class="name">{{ item.name }}</div>
          <div class="trade">{{ item.trade }}</div>
        </div>

        <div class="trade-time">
          <div class="price">{{ item.price }}</div>

          <div class="time-or-appointment">
            <div v-if="item.time" class="time">{{ item.time }}</div>
            <div v-else class="appointment" @click="handleAppointment(item)">
              预约
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";

const props = defineProps({
  memberList: {
    type: Array as () => Array<{
      name: string;
      trade: string;
      time?: string;
      price: string;
      img: string;
    }>,
    default: () => [],
  },
  title: {
    type: String,
    default: "会员列表",
  },
});

const handleAppointment = (item: any) => {
  Taro.showToast({
    title: `预约${item.name}成功！`,
    icon: "success",
    duration: 2000,
  });

  console.log("预约课程:", item);
};
</script>

<style lang="scss">
.member {
  width: 100%;
  margin-top: 40px;

  .member-trade {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .member-list {
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    padding-top: 30px;

    .member-item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      font-size: 20px;

      img {
        z-index: 99;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 10px;
      }

      .member-info {
        flex-grow: 1;

        .name {
          color: #626366;
          margin-bottom: 10px;
        }

        .trade {
          font-weight: 600;
          color: #303133;
        }
      }

      .trade-time {
        text-align: right;
        min-width: 120px;


        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .price {
          color: #a52e3a;
          font-weight: bold;
          margin-top: 10px;
          order: 2;
        }

        .time-or-appointment {
          order: 1;

          .time {
            color: #999;
            font-size: 16px;
          }

          .appointment {
            background-color: #b83441;
            color: white;
            padding: 8px 18px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;

            &:active {
              background-color: #c0392b;
          }
        }
      }
    }
  }
}
</style>
