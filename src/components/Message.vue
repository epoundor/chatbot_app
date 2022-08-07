<template>
  <div
    class="flex items-center justify-end gap-x-4"
    :class="{ 'flex-row-reverse': !mine }"
  >
    <span class="text-[10px]">{{ time }}</span>
    <div
      class="py-3 px-4 max-w-[200px] text-xs flex items-center bg-[#FAAE2B] rounded-[20px] text-left"
    >
      {{ msg }}
    </div>
    <div class="w-10 aspect-square rounded-full bg-slate-400 overflow-hidden">
      <img
        v-if="mine"
        class="w-full h-full object-cover"
        src="../assets/profile_pic.JPG"
        alt=""
      />
      <img v-else class="w-full h-full object-cover" :src="author_pic" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ author_pic: string; msg: string; mine: Boolean; time: string }>();
</script>
<style scoped></style>
