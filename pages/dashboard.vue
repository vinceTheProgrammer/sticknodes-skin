<template>
  <div class="grid md:grid-cols-3 gap-5 m-5">
    <div>
      <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
        <div class="card-body">
          <h1 class="card-title">Dashboard</h1>
          <ul class="menu bg-transparent w-full mx-0 rounded-box">
            <SnsMenu :routes="['/dashboard/overview','/dashboard/skins']">
              <template #item="{ active, route, name }">
                <NuxtLink :class="`${active ? 'active' : ''}`" :to="route">{{
                  name
                }}</NuxtLink>
              </template>
            </SnsMenu>
          </ul>
        </div>
      </div>
    </div>
    <div class="md:col-span-2">
      <NuxtPage />
    </div>
  </div>
</template>
