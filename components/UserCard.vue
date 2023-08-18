<template>
  <div class="card card-compact bg-secondary shadow-xl sns-card">
    <div class="card-body">
      <h1 class="card-title">{{ username }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  username: {
    type: String,
    required: true,
  },
});
const { username } = toRefs(props);
</script>
