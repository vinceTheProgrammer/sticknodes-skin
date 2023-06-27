<template>
  <div class="dropdown dropdown-top object-scale-down w-full h-full">
    <div class="flex align-middle h-full justify-center">
      <label tabindex="0" class="items-center flex">
        <slot name="label"></slot>
      </label>
    </div>

    <ul
      tabindex="0"
      class="dropdown-content menu p-2 shadow-[0_-4px_6px_0_rgba(0,0,0,0.3)] bg-secondary rounded-box w-screen z-50"
      :style="{ left: `-${(100 / buttonCount) * buttonIndex}vw` }"
    >
      <slot name="ul"></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  buttonCount: {
    type: Number,
    required: true,
  },
  buttonIndex: {
    type: Number,
    required: true,
  },
});
const { buttonCount, buttonIndex } = toRefs(props);
</script>
