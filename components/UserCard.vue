<template>
  <NuxtLink
    :to="
      localePath({
        name: 'user-username',
        params: { username: user.username },
      })
    "
  >
    <div
      class="card card-compact bg-secondary shadow-xl sns-card hover:brightness-110"
    >
      <div class="card-body">
        <div class="flex flex-row">
          <img :src="user.avatar" class="max-w-[5rem]" />
          <div class="flex flex-col self-center pl-5">
            <h1 class="card-title">{{ user.displayname }}</h1>
            <h3 class="text-md">@{{ user.username }}</h3>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const { user } = toRefs(props);
</script>
