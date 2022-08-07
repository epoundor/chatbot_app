<template>
  <div class="bg-yellow-300 flex justify-center items-center w-screen h-screen">
    <div class="flex flex-row gap-10">
      <Phone content="list" />
      <Phone content="chat" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Phone from "./Phone.vue";
</script>

<style scoped></style>
