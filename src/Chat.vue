<template>
  <ChatView :data="data" />
</template>

<script setup lang="ts">
import ChatView from "./components/ChatView.vue";
//============Props===========
const props = defineProps<{
  data: {
    pic: string;
    label: string;
    msg: { title: string; time: string };
  };
}>();
</script>

<style scoped></style>
