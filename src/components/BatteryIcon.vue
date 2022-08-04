<template>
  <div
    class="w-[18px] h-[10px] border-black border rounded-sm battery relative p-[1px]"
  >
    <div class="absolute left-1/2 -translate-x-1/2 -top-1" v-if="charging">
      <svg
        width="10"
        height="15"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.58563 12.5179L9.47426 0.719957C9.47446 0.719666 9.47466 0.719375 9.47485 0.719084C9.53723 0.627192 9.62844 0.558676 9.73409 0.524362C9.83952 0.49012 9.95332 0.491889 10.0576 0.52936C10.1576 0.566879 10.2429 0.635429 10.3012 0.72499C10.358 0.81244 10.386 0.915408 10.3815 1.01945L9.61286 8.14639L9.55316 8.70001H10.11L16 8.70001L16.0007 8.7C16.0916 8.69987 16.1807 8.72448 16.2586 8.77119C16.3365 8.81791 16.4002 8.88496 16.4429 8.96515C16.4856 9.04534 16.5056 9.13564 16.5008 9.22635C16.496 9.31706 16.4666 9.40475 16.4157 9.48L16.4143 9.48209L8.52574 21.28C8.52551 21.2803 8.52529 21.2807 8.52507 21.281C8.47927 21.3484 8.41769 21.4036 8.34568 21.4418C8.27331 21.4801 8.19264 21.5001 8.11074 21.5L8.10998 22L8.11057 21.5C8.05284 21.4999 7.99555 21.4899 7.94126 21.4703C7.83641 21.4317 7.74748 21.3591 7.68867 21.2641C7.62975 21.169 7.60447 21.0567 7.6169 20.9455L7.61706 20.944L8.38706 13.854L8.44722 13.3H7.88998L1.99998 13.3L1.99923 13.3C1.90839 13.3001 1.81924 13.2755 1.74134 13.2288C1.66343 13.1821 1.59973 13.1151 1.55706 13.0349C1.5144 12.9547 1.49438 12.8644 1.49917 12.7737C1.50396 12.683 1.53336 12.5953 1.58423 12.52L1.58563 12.5179Z"
          fill="white"
          stroke="black"
        />
      </svg>
    </div>
    <div
      ref="bar"
      class="h-full bg-black rounded-[1px]"
      :style="'width:' + getBatteryLevel + '%'"
    ></div>
  </div>
</template>

<script lang="ts">
import { computed, ref, toRef } from "vue";

export default {
  props: {
    level: Number,
    charging: Boolean,
  },
  setup(props) {
    const level = toRef(props, "level");
    const getBatteryLevel = computed(() => {
      return level.value * 100;
    });
    return { level, getBatteryLevel };
  },
};
</script>

<style scoped>
.battery::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 3.5px;
  top: 50%;
  transform: translateY(-50%);
  left: 100%;
  background-color: black;
}
</style>
