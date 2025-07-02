<template>
  <!-- <nut-tabbar v-model="selected">
    <nut-tabbar-item
      v-for="(item, index) in list"
      :key="index"
      :tab-title="item.text"
      @click="switchTab(index, item.pagePath)"
    >
      <template #icon>
        <img
          :src="selected === index ? user_selected : user_default"
          alt=""
          srcset=""
        />
      </template>
    </nut-tabbar-item>
  </nut-tabbar> -->
  <!-- 修改后的模板 -->
  <div class="custom-tab-bar">
    <div
      v-for="(item, index) in list"
      :key="index"
      :class="[
        'custom-tab-bar-item',
        { 'custom-tab-bar-item-selected': selected === index },
      ]"
      @click="switchTab(index, item.pagePath)"
    >
      <span class="tab-text">{{ item.text }}</span>
      <span class="tab-english">{{ item.English }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import { computed, ref } from "vue";
import { useStore } from "@/stores";
import { TabItem } from "./type.ts";
const venue = useStore("venue");
const selected = computed(() => venue.tabbar);

const switchTab = (index, url) => {
  setSelected(index);
  Taro.switchTab({ url });
};

const setSelected = (index) => {
  venue.changeTabbar(index);
};
const list = ref<TabItem[]>([
  {
    text: "场馆",
    English: "Venue",
    pagePath: "/pages/venue/index",
  },
  {
    pagePath: "/pages/more/index",
    text: "更多",
    English: "More",
  },
  {
    pagePath: "/pages/my/index",
    text: "我的",
    English: "My",
  },
]);
</script>

<style lang="scss">
.custom-tab-bar {
  width: 100%;
  display: flex;
  padding-bottom: 30px;
  background: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); /* 添加顶部投影增强层次 */

  .custom-tab-bar-item {
    flex: 1;
    margin: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 8px;
    transition: all 0.3s ease-in-out;

    .tab-text {
      font-size: 28px;
      font-weight: 550;
      transition: inherit;
    }

    .tab-english {
      font-size: 22px;
      color: #626366;
      transition: inherit;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 5px;
      background: #a52e3a;
      transform: translateX(-50%);
      transition: all 0.3s ease-in-out;
    }

    &-selected {
      &::after {
        width: 40%;
        opacity: 1;
      }
    }
  }
}
</style>
