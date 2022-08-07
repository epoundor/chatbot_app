<template>
  <div
    class="phone overflow-hidden w-[360px] h-[800px] rounded-[20px] bg-white relative"
  >
    <!-- Area -->
    <div class="h-8 mx-4 flex justify-between items-center">
      <div class="text-xs">
        <span> {{ parseTime }}</span>
      </div>
      <div class="">
        <div class="flex items-center justify-between gap-x-2">
          <!-- Network -->
          <NetworkIcon :type="type" />

          <!-- Wifi -->
          <WifiIcon :rtt="rtt" />
          <!-- Battery -->
          <BatteryIcon :level="battery" :charging="charging" />
        </div>
      </div>
    </div>
    <Chat v-if="content === 'chat'" :data="chatData" />
    <List v-if="content === 'list'" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch, inject } from "vue";
import BatteryIcon from "./components/BatteryIcon.vue";
import NetworkIcon from "./components/NetworkIcon.vue";
import WifiIcon from "./components/WifiIcon.vue";
import Chat from "./Chat.vue";
import List from "./List.vue";

import { parseTime } from "./utils";

// ============Props================
defineProps<{ content: string }>();

//Event Bus must get event
const event = inject("$eventbus");

const chatData = ref({
  pic: "/src/assets/profile_pic.JPG",
  label: "Séréna",
  msg: { title: "I will do the voice over", time: "10:30" },
});

const battery = ref(1);
const charging = ref(false);

const rtt = ref(0);
const type = ref(null);

const messages = ref();

onMounted(async () => {
  setInterval(async () => {
    rtt.value = navigator.connection.rtt;
    type.value = navigator.connection.effectiveType;
    await navigator.getBattery().then((res: any) => {
      battery.value = res.level;
      charging.value = res.charging;
    });
  }, 500);
});
event.on("changeChat", (data: any) => {
  chatData.value = data.detail;
  console.log(data.detail);
});
</script>

<style scoped>
.phone {
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.25);
}
</style>
