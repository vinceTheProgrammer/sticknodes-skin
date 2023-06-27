<template>
  <div class="navbar bg-base-300">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl mr-5">SN.skin</NuxtLink>
      <div class="tabs">
        <NuxtLink to="/skins" class="tab">Skins</NuxtLink>
        <NuxtLink to="/users" class="tab">Users</NuxtLink>
      </div>
    </div>
    <div class="flex-none mr-5">
      <NuxtLink to="/notifications">
        <IconNotif iconClass="fa-lg" />
      </NuxtLink>
    </div>
    <div class="flex-none mr-5">
      <IconTheme />
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-hover dropdown-end">
        <div class="flex">
          <label tabindex="0" class="btn btn-ghost flex px-1">
            <div class="avatar btn-circle flex">
              <div class="w-10 h-10 rounded-full self-center">
                <img
                  src="https://api.dicebear.com/6.x/identicon/svg?seed=Precious&backgroundColor=c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf" />
              </div>
            </div>
            <font-awesome-icon class="self-center -ml-3" icon="fa-solid fa-angle-down" />
          </label>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content p-2 shadow rounded-box w-52 bg-secondary z-50 border-2">
          <li>
            <NuxtLink to="/user/you">@username <br />
              Go to your profile</NuxtLink>
          </li>
          <div class="divider my-1"></div>
          <li>
            <NuxtLink to="/upload/file-upload"><font-awesome-icon icon="fa-solid fa-file-arrow-up" />Upload a
              skin</NuxtLink>
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
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>