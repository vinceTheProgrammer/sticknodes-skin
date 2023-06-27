<template>
  <div>
    <TopNavBar v-if="breakpoint.breakpoints.mdAndUp" />
    <BottomNavBar v-else-if="breakpoint.breakpoints.smAndDown" />
    <div class="mb-16 md:mb-0 min-h-screen">
      <slot />
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
const breakpoint = useBreakpoint();
</script>