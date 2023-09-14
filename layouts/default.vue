<template>
  <div>
    <VitePwaManifest />
    <TopNavBar v-if="breakpoint.breakpoints.mdAndUp" />
    <BottomNavBar v-else-if="breakpoint.breakpoints.smAndDown" />
    <div class="mb-16 md:mb-0 min-h-screen">
      <slot></slot>
      <TheFooter />
    </div>
    <div
      v-show="showToast"
      :class="`toast toast-start toast-top md:toast-bottom`"
      :style="`transition: opacity 0.3s ease; opacity: ${
        toastVisible ? '100%' : '0%'
      }`"
    >
      <div class="alert alert-success">
        <span>{{ toastText }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const breakpoint = useBreakpoint();
const user = useCurrentUser();
const { t } = useI18n();
const toastVisible = ref(false);
const showToast = ref(false);
const toastText = ref("");

watch(user, (user, prevUser) => {
  if (prevUser && !user) {
    toastText.value = t("f-toast-successful-logout");
    toastVisible.value = true;
    showToast.value = true;
    setTimeout(() => {
      toastVisible.value = false;
      setTimeout(() => {
        showToast.value = false;
      }, 400);
    }, 5000);
  } else if (user) {
    toastText.value = t("f-toast-successful-login", 2, {
      named: { user: user.displayName },
    });
    toastVisible.value = true;
    showToast.value = true;
    setTimeout(() => {
      toastVisible.value = false;
      setTimeout(() => {
        showToast.value = false;
      }, 400);
    }, 5000);
  }
});
</script>
