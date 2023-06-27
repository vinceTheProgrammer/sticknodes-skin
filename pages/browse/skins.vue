<template>
  <div>
    <SkinCard v-for="num in nums" :key="num" />
  </div>
</template>

<script setup>
definePageMeta({
  title: "Browse Skins",
  alias: "/skins",
});

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>
