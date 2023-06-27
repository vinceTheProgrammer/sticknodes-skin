<template>
  <div class="indicator flex">
    <span :class="`indicator-item badge badge-error scale-50 ${notifs.length > 0 ? '' : 'bg-transparent'}`"></span>
    <font-awesome-icon :class="`${iconClass}`" icon="fa-solid fa-bell" />
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  iconClass:{
    type: String,
    required: true
  },
})
const iconClass = props.iconClass;

import useNotifs from '~/composables/useNotifs'

const notifs = useNotifs();

</script>