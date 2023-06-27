<template>
  <div class="btm-nav bg-base-300 z-10">
    <button>
      <NuxtLink to="/"><font-awesome-icon class="fa-xl" icon="fa-solid fa-house"></font-awesome-icon></NuxtLink>
    </button>
    <button>
      <BottomNavDropdown :buttonCount="5" :buttonIndex="1">
        <template #label>
          <font-awesome-icon class="fa-xl" icon="fa-solid fa-magnifying-glass" />
        </template>
        <template #ul>
          <li>
            <NuxtLink to="/skins">Skins</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/users">Users</NuxtLink>
          </li>
        </template>
      </BottomNavDropdown>
    </button>
    <button>
      <NuxtLink to="/notifications">
        <IconNotif iconClass="fa-xl" />
      </NuxtLink>
    </button>
    <button>
      <NuxtLink to="/dashboard/overview"><font-awesome-icon class="fa-xl" icon="fa-solid fa-chart-line" /></NuxtLink>
    </button>
    <button>
      <BottomNavDropdown :buttonCount="5" :buttonIndex="4">
        <template #label>
          <div class="avatar h-full p-3 justify-center">
            <div class="rounded-full">
              <img
                src="https://api.dicebear.com/6.x/identicon/svg?seed=Precious&backgroundColor=c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf" />
            </div>
          </div>
        </template>
        <template #ul>
          <li>
            <NuxtLink to="/user/you">@username <br />
              Go to your profile</NuxtLink>
          </li>
          <div class="divider my-1"></div>
          <li>
            <NuxtLink to="/upload/file-upload">
              <font-awesome-icon class="fa-lg" icon="fa-solid fa-file-arrow-up" />
              Upload a skin
            </NuxtLink>
          </li>
          <div class="divider my-1"></div>
          <li>
            <NuxtLink to="/tools/template">Tools</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/notifications">Notifications</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dashboard/overview">Dashboard</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/settings/appearance">Settings</NuxtLink>
          </li>
          <div class="divider my-1"></div>
          <li>
            <NuxtLink data-toggle-theme="snsDark,snsLight"><font-awesome-icon class="fa-lg"
                icon="fa-solid fa-cloud-sun" /> Toggle Dark Mode</NuxtLink>
          </li>
          <div class="divider my-1"></div>
          <li><a>Logout</a></li>
        </template>
      </BottomNavDropdown>
    </button>
  </div>
</template>

<script setup lang="ts">
import { themeChange } from 'theme-change';

onMounted(() => {
  themeChange(false);
})
</script>
