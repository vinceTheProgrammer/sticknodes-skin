<template>
  <footer
    class="footer p-10 bg-base-300 text-neutral-content sticky top-[100vh]"
  >
    <div>
      <span class="footer-title">Resources</span>
      <NuxtLink to="/about-us" class="link link-hover">About us</NuxtLink>
      <NuxtLink to="/contact" class="link link-hover">Contact</NuxtLink>
      <a
        href="https://github.com/vinceTheProgrammer/sticknodes-skin/issues"
        class="link link-hover"
        >Report a bug</a
      >
      <a
        href="https://github.com/vinceTheProgrammer/sticknodes-skin/issues"
        class="link link-hover"
        >Make a suggestion</a
      >
    </div>
    <div>
      <span class="footer-title">Interact</span>
      <a
        href="https://sticknodes.com/groups/sticknodes-modders/"
        class="link link-hover"
        >sticknodes.com Group</a
      >
    </div>
    <div>
      <span class="footer-title">Legal</span>
      <NuxtLink to="/legal/terms" class="link link-hover"
        >Terms of use</NuxtLink
      >
      <NuxtLink to="/legal/privacy" class="link link-hover"
        >Privacy policy</NuxtLink
      >
      <NuxtLink to="/legal/rules" class="link link-hover">Rules</NuxtLink>
      <NuxtLink to="/legal/security" class="link link-hover">Security</NuxtLink>
    </div>
  </footer>
</template>
