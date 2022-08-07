<template>
  <div
    class="flex flex-row w-full py-2 justify-center items-center gap-4 cursor-pointer"
    :class="{ 'bg-slate-100': over }"
    @mouseenter="over = true"
    @mouseleave="over = false"
  >
    <!-- Profile pic -->
    <img
      class="rounded-full w-[60px] object-cover aspect-square"
      :src="pic"
      alt=""
    />
    <!-- Message -->
    <div class="flex flex-col w-64 relative">
      <span class="font-bold text-[#00473E]">{{ label }}</span>
      <span class="text-[#475D5B] text-xs" title="I will do the voice over">{{
        msg.title
      }}</span>
      <span class="absolute top-0 right-0 text-[#475D5B] text-xs">{{
        msg.time
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  pic: string;
  label: string;
  msg: {
    title: string;
    time: string;
  };
}>();

const over = ref(false);
</script>

<style scoped></style>
