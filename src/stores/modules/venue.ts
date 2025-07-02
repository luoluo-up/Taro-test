import { defineStore } from "pinia";
import { ref } from "vue";

export const useVenueStore = defineStore("app", () => {
  const tabbar = ref(0);

  function changeTabbar(value) {
    tabbar.value = value;
  }

  const MemberList = ref([]);
  function setMemberList(list) {
    MemberList.value = list;
  }
  return { tabbar, changeTabbar, MemberList, setMemberList };
});
