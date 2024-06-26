<template>
  <div class="btm-nav bg-base-300 z-10">
    <button>
      <NuxtLink :to="localePath({ name: 'index' })"
        ><Icon name="mdi:home" size="2em"
      /></NuxtLink>
    </button>
    <button>
      <BottomNavDropdown :button-count="5" :button-index="1">
        <template #label>
          <Icon name="mdi:magnify" size="2em" />
        </template>
        <template #ul>
          <li>
            <NuxtLink :to="localePath({ name: 'browse-skins' })"
              >Skins</NuxtLink
            >
          </li>
          <li>
            <NuxtLink :to="localePath({ name: 'browse-users' })">{{
              useCapitalize($t("user", 2))
            }}</NuxtLink>
          </li>
        </template>
      </BottomNavDropdown>
    </button>
    <button>
      <NuxtLink :to="localePath({ name: 'notifications' })">
        <IconNotif size="2em" />
      </NuxtLink>
    </button>
    <button>
      <NuxtLink :to="localePath({ name: 'dashboard-overview' })"
        ><Icon name="mdi:finance" size="2em"
      /></NuxtLink>
    </button>
    <button
      v-if="useCurrentUser().value === null"
      @click="loginModalOpen = true"
    >
      <Icon class="self-center -ml-3" name="mdi:login" size="2em" />
    </button>
    <span
      v-show="useCurrentUser().value === undefined"
      class="loading loading-ring loading-md"
    ></span>
    <button
      v-if="
        useCurrentUser().value !== null && useCurrentUser().value !== undefined
      "
    >
      <BottomNavDropdown :button-count="5" :button-index="4">
        <template #label>
          <div class="avatar h-full p-3 justify-center">
            <div class="rounded-full">
              <img
                :src="
                  userDoc
                    ? userDoc.avatar
                    : 'https://api.dicebear.com/6.x/identicon/svg?seed=default&backgroundColor=c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf'
                "
              />
            </div>
          </div>
        </template>
        <template #ul>
          <li>
            <NuxtLink
              :to="
                localePath({
                  name: 'user-username',
                  params: { username: userDoc ? userDoc.username : 'default' },
                })
              "
              >@{{ userDoc ? userDoc.username : "null" }} <br />
              {{ useCapitalize($t("profile-menu-item")) }}</NuxtLink
            >
          </li>
          <div class="divider my-1"></div>
          <li>
            <NuxtLink :to="localePath({ name: 'upload-file-upload' })">
              <Icon size="1.5em" name="mdi:file-upload" />
              {{ useCapitalize($t("upload-menu-item")) }}
            </NuxtLink>
          </li>
          <div class="divider my-1"></div>
          <li>
            <NuxtLink :to="localePath({ name: 'tool-template' })">{{
              useCapitalize($t("tool", 2))
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath({ name: 'notifications' })">{{
              useCapitalize($t("notification", 2))
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath({ name: 'dashboard-overview' })">{{
              useCapitalize($t("dashboard"))
            }}</NuxtLink>
          </li>
          <li v-if="isMod">
            <NuxtLink :to="localePath({ name: 'mod-dashboard' })">{{
              useStartCase($t("mod-dashboard"))
            }}</NuxtLink>
          </li>
          <li v-if="isAdmin">
            <NuxtLink :to="localePath({ name: 'admin-dashboard' })">{{
              useStartCase($t("admin-dashboard"))
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath({ name: 'settings-appearance' })">{{
              useCapitalize($t("setting", 2))
            }}</NuxtLink>
          </li>
          <div class="divider my-1"></div>
          <li>
            <a data-toggle-theme="snsDark,snsLight"
              ><Icon size="1.5em" name="mdi:theme-light-dark" />
              {{ useCapitalize($t("toggle-dark-menu-item")) }}</a
            >
          </li>
          <div class="divider my-1"></div>
          <li>
            <a @click="signOut()">{{ useCapitalize($t("logout")) }}</a>
          </li>
        </template>
      </BottomNavDropdown>
    </button>
  </div>
  <LoginModal
    :modal-open="loginModalOpen"
    @modal-change="(newValue: boolean) => (loginModalOpen = newValue)"
  />
</template>

<script setup lang="ts">
import { doc } from "firebase/firestore";
import { themeChange } from "theme-change";
import { useCurrentUser } from "vuefire";

const localePath = useLocalePath();
const loginModalOpen = ref(false);

const user = useCurrentUser();
const { hasAdmin, hasMod } = useHasRoles().value;

const isAdmin = ref(false);
const isMod = ref(false);

const db = useFirestore();
const userIdSource = computed(() =>
  doc(db, "users", user.value ? user.value.uid : "default")
);
const userDoc = useDocument(userIdSource);

onMounted(async () => {
  isAdmin.value = await hasAdmin();
  isMod.value = await hasMod();
});

watch(user, async () => {
  isAdmin.value = await hasAdmin();
  isMod.value = await hasMod();
});

onMounted(() => {
  themeChange(false);
});
</script>
