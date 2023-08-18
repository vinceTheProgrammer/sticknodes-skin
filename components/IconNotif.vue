<template>
  <div class="indicator flex">
    <span
      :class="`indicator-item badge badge-error scale-50 ${
        notifs.length > 0 ? '' : 'bg-transparent'
      }`"
    ></span>
    <Icon :size="size" name="mdi:bell" />
  </div>
</template>

<script setup lang="ts">
import useNotifs from "~/composables/useNotifs";

const props = defineProps({
  size: {
    type: String,
    required: true,
  },
});
const { size } = toRefs(props);

const notifs = useNotifs();
</script>
