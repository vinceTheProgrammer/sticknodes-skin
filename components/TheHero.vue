<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">SN.skin</h1>
        <p class="py-6">
          {{ $t("f-hero-tagline") }}
        </p>
        <NuxtLink
          :to="localePath({ name: 'browse-skins' })"
          class="btn btn-primary mr-5"
          >{{ useCapitalize($t("browse")) }}</NuxtLink
        >
        <NuxtLink
          :to="localePath({ name: 'tool-template' })"
          class="btn btn-outline btn-neutral"
          >{{ useCapitalize($t("create")) }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
