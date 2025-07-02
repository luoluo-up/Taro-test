<template>我的</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
const onClick = () => {
  show.value = true;
};
</script>
