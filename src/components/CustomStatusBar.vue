<template>
  <view class="custom-nav-bar" :style="navBarStyle">
    <!-- 顶部状态栏区域（显示时间、电量）-->
    <view class="status-area" :style="statusAreaStyle">
      <!-- 时间显示（右对齐） -->
      <text class="status-time">14:14</text>
      <!-- 电量显示（右对齐） -->
      <text class="battery">99%</text>
    </view>

    <!-- 主导航栏区域（显示位置、标题、菜单）-->
    <view class="nav-content" :style="navContentStyle">
      <!-- 左侧位置显示 -->
      <text class="location">广州</text>

      <!-- 中央标题 -->
      <text class="title">场馆</text>

      <!-- 右侧胶囊按钮 -->
      <view class="capsule-buttons">
        <view class="dot"></view>
        <view class="dot"></view>
        <view class="dot"></view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Taro from "@tarojs/taro";

// 获取系统信息
const systemInfo = Taro.getSystemInfoSync();

// 导航栏高度计算
const navBarHeight = computed(() => {
  // 固定高度方案（非计算）
  return systemInfo.platform === "ios" ? 128 : 120;
});

// 状态区域高度（顶部时间、电量显示区）
const statusHeight = 24; // 固定高度

// 导航栏样式
const navBarStyle = computed(() => ({
  height: `${navBarHeight.value}px`,
  backgroundColor: "#000", // 黑色背景
  color: "#fff", // 白色文字
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}));

// 状态区域样式
const statusAreaStyle = computed(() => ({
  height: `${statusHeight}px`,
  paddingRight: "16px", // 右侧内边距
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  fontSize: "14px", // 小字号
  opacity: 0.9, // 稍微透明
}));

// 导航内容区域样式
const navContentStyle = computed(() => ({
  height: `${navBarHeight.value - statusHeight}px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)", // 顶部微细分割线
}));
</script>

<style lang="scss" scoped>
.custom-nav-bar {
  /* 全局导航栏样式 */

  .status-area {
    /* 状态区域样式 */
    .status-time {
      margin-right: 16px;
    }

    .battery {
      /* 电量样式 */
    }
  }

  .nav-content {
    /* 导航内容区域 */

    .location {
      font-size: 16px;
      font-weight: 500;
    }

    .title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      font-weight: bold;
    }

    .capsule-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      .dot {
        width: 5px;
        height: 5px;
        background-color: #fff;
        border-radius: 50%;
        margin: 2px 0;
      }
    }
  }
}
</style>
