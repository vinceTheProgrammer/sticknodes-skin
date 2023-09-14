<template>
  <div class="navbar bg-base-300">
    <div class="flex-1">
      <NuxtLink
        :to="localePath({ name: 'index' })"
        class="btn btn-ghost normal-case text-xl mr-5"
        >SN.skin</NuxtLink
      >
      <div class="tabs">
        <NuxtLink :to="localePath({ name: 'browse-skins' })" class="tab"
          >Skins</NuxtLink
        >
        <NuxtLink :to="localePath({ name: 'browse-users' })" class="tab">{{
          useCapitalize($t("user", 2))
        }}</NuxtLink>
      </div>
    </div>
    <div class="flex-none mr-5">
      <NuxtLink :to="localePath({ name: 'notifications' })">
        <IconNotif size="1.5em" />
      </NuxtLink>
    </div>
    <div class="flex-none mr-5">
      <IconTheme />
    </div>
    <div v-if="useCurrentUser().value === null">
      <button class="btn btn-outline" @click="loginModalOpen = true">
        <Icon class="self-center -ml-3" name="mdi:login" size="1.5em" />{{
          useCapitalize($t("login"))
        }}
      </button>
      <dialog :class="`modal ${loginModalOpen ? 'modal-open' : ''}`">
        <div class="modal-box">
          <button class="btn w-full" @click="signInWithGoogle()">
            <Icon class="self-center -ml-3" name="mdi:google" size="1.5em" />{{
              useCapitalize($t("login-with-google"))
            }}
          </button>
        </div>
        <form
          method="dialog"
          class="modal-backdrop"
          @submit="loginModalOpen = false"
        >
          <button>close</button>
        </form>
      </dialog>
    </div>
    <span
      v-show="useCurrentUser().value === undefined"
      class="loading loading-ring loading-md"
    ></span>
    <div
      v-if="
        useCurrentUser().value !== null && useCurrentUser().value !== undefined
      "
      class="flex-none"
    >
      <div class="dropdown dropdown-hover dropdown-end">
        <div class="flex">
          <label tabindex="0" class="btn btn-ghost flex px-1">
            <div class="avatar btn-circle flex">
              <div class="w-10 h-10 rounded-full self-center">
                <img
                  src="https://api.dicebear.com/6.x/identicon/svg?seed=Precious&backgroundColor=c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf"
                />
              </div>
            </div>
            <Icon
              class="self-center -ml-3"
              name="mdi:chevron-down"
              size="1.5em"
            />
          </label>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content p-2 shadow rounded-box w-52 bg-secondary z-50 border-2"
        >
          <li>
            <NuxtLink
              :to="
                localePath({
                  name: 'user-username',
                  params: { username: 'hugh2' },
                })
              "
              >@username <br />
              {{ useCapitalize($t("profile-menu-item")) }}</NuxtLink
            >
          </li>
          <div class="divider my-1"></div>
          <li>
            <NuxtLink :to="localePath({ name: 'upload-file-upload' })"
              ><Icon name="mdi:file-upload" size="1.5em" />{{
                useCapitalize($t("upload-menu-item"))
              }}</NuxtLink
            >
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
          <li>
            <NuxtLink :to="localePath({ name: 'settings-appearance' })">{{
              useCapitalize($t("setting", 2))
            }}</NuxtLink>
          </li>
          <div class="divider my-1"></div>
          <li>
            <a @click="signOut()">{{ useCapitalize($t("logout")) }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCurrentUser } from "vuefire";

const localePath = useLocalePath();
const loginModalOpen = ref(false);
</script>
