<template>
  <div class="flex">
    <div class="flex items-baseline w-[10px] h-[10px] gap-x-[1px]">
      <div class="w-[2.5px] h-1/3 bg-gray-400">
        <div class="w-full h-full bg-black" v-if="rttLevel >= 0"></div>
      </div>
      <div class="w-[2.5px] h-2/3 bg-gray-400">
        <div class="w-full h-full bg-black" v-if="rttLevel >= 1"></div>
      </div>
      <div class="w-[2.5px] h-full bg-gray-400">
        <div class="w-full h-full bg-black" v-if="rttLevel >= 2"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, toRef } from "vue";

export default {
  props: {
    type: String,
  },
  setup(props: any) {
    const type = toRef(props, "type");
    const rttLevel = ref(0);
    setInterval(() => {
      if (type.value == "4g") {
        rttLevel.value = 2;
      } else if (type.value == "3g") {
        rttLevel.value = 1;
      }
    }, 500);

    return {
      rttLevel,
    };
  },
};
</script>

<style lang="scss" scoped></style>
