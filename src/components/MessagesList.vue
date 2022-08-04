<template>
  <div class="flex flex-col gap-2 my-7 w-full">
    <Message
      :msg="msg.msg"
      :mine="msg.mine"
      :time="msg.time"
      v-for="msg in messages"
    />
    <Message msg="..." time="" :mine="false" v-if="isProcessing" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import Message from "./Message.vue";
interface Message {
  msg: string;
  mine: Boolean;
  time: string;
}

const props = defineProps({
  messages: Object as PropType<Message[]>,
  isProcessing: Boolean,
});
</script>

<style scoped></style>
