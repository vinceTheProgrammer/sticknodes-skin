<template>
  <div class="indicator flex">
    <span
      :class="`indicator-item badge badge-error scale-50 ${
        notifs.length > 0 ? '' : 'bg-transparent'
      }`"
    ></span>
    <font-awesome-icon :class="`${iconClass}`" icon="fa-solid fa-bell" />
  </div>
</template>

<script setup lang="ts">
import useNotifs from "~/composables/useNotifs";

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
});
const { iconClass } = toRefs(props);

const notifs = useNotifs();
</script>
