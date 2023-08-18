<template>
  <footer
    class="footer p-10 bg-base-300 text-neutral-content sticky top-[100vh]"
  >
    <div>
      <span class="footer-title">{{ useCapitalize($t("resource", 2)) }}</span>
      <NuxtLink
        :to="localePath({ name: 'about-us' })"
        class="link link-hover"
        >{{ useCapitalize($t("about-us")) }}</NuxtLink
      >
      <NuxtLink :to="localePath({ name: 'contact' })" class="link link-hover">{{
        useCapitalize($t("contact", 2))
      }}</NuxtLink>
      <a
        href="https://github.com/vinceTheProgrammer/sticknodes-skin/issues"
        class="link link-hover"
        >{{ useCapitalize($t("report-a-bug")) }}</a
      >
      <a
        href="https://github.com/vinceTheProgrammer/sticknodes-skin/issues"
        class="link link-hover"
        >{{ useCapitalize($t("make-a-suggestion")) }}</a
      >
    </div>
    <div>
      <span class="footer-title">{{ useCapitalize($t("interact")) }}</span>
      <a
        href="https://sticknodes.com/groups/sticknodes-modders/"
        class="link link-hover"
        >sticknodes.com {{ $t("group") }}</a
      >
    </div>
    <div>
      <span class="footer-title">{{ useCapitalize($t("legal")) }}</span>
      <NuxtLink
        :to="localePath({ name: 'legal-terms' })"
        class="link link-hover"
        >{{ useCapitalize($t("terms-of-use")) }}</NuxtLink
      >
      <NuxtLink
        :to="localePath({ name: 'legal-privacy' })"
        class="link link-hover"
        >{{ useCapitalize($t("privacy-policy")) }}</NuxtLink
      >
      <NuxtLink
        :to="localePath({ name: 'legal-rules' })"
        class="link link-hover"
        >{{ useCapitalize($t("rules")) }}</NuxtLink
      >
      <NuxtLink
        :to="localePath({ name: 'legal-security' })"
        class="link link-hover"
        >{{ useCapitalize($t("security")) }}</NuxtLink
      >
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
