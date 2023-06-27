<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">SN.skin</h1>
        <p class="py-6">
          {{ $t('hero-tagline') }}
        </p>
        <NuxtLink to="/skins" class="btn btn-primary mr-5">Browse</NuxtLink>
        <NuxtLink to="/tools/template" class="btn btn-outline btn-neutral">Create</NuxtLink>
      </div>
    </div>
  </div>
</template>
