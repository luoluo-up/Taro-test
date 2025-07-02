<template>
  <div class="container">
    <Search />
    <Venue />
    <Member title="实时成交" :member-list="memberRecords" />
    <Member title="精选课程" :member-list="courseRecommendations" />
    <Recommend />
  </div>
</template>

<script setup lang="ts">
import CustomStatusBar from "@/components/CustomStatusBar";
import Search from "./components/Search.vue";
import Venue from "./components/Venue.vue";
import Member from "./components/Member.vue";
import Recommend from "./components/Recommend.vue";
import { getMemberList, getClassList } from "@/http/index";
import { ref, onMounted } from "vue";
import Taro from "@tarojs/taro";

const memberRecords = ref<any[]>([]);
const courseRecommendations = ref<any[]>([]);

// 获取会员消费记录
const fetchMemberRecords = async () => {
  try {
    const response = await getMemberList();
    if (response.code === 200 && Array.isArray(response.data)) {
      memberRecords.value = response.data;
    } else {
      console.error("获取会员数据失败:", response.message);
      Taro.showToast({
        title: response.message || "获取会员数据失败",
        icon: "none",
      });
    }
  } catch (error: any) {
    console.error("请求异常:", error.message);
    Taro.showToast({
      title: error.message || "网络请求失败",
      icon: "none",
    });
  }
};

// 获取课程推荐
const fetchCourseRecommendations = async () => {
  try {
    const response = await getClassList();
    if (response.code === 200 && Array.isArray(response.data)) {
      courseRecommendations.value = response.data.map((course) => ({
        name: course.class,
        trade: `${course.name}  ${course.description}`,
        price: course.price,
        img: course.img,
      }));
    } else {
      console.error("获取课程数据失败:", response.message);
      Taro.showToast({
        title: response.message || "获取课程数据失败",
        icon: "none",
      });
    }
  } catch (error: any) {
    console.error("请求异常:", error.message);
    Taro.showToast({
      title: error.message || "网络请求失败",
      icon: "none",
    });
  }
};

onMounted(() => {
  fetchMemberRecords();
  fetchCourseRecommendations();
});
</script>
<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  padding: 35px 35px;
  padding-right: 35px;
  padding-bottom: 160px;
}
div {
  box-sizing: border-box;
}
</style>
