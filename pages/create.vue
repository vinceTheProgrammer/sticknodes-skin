<template>
  <div class="grid grid-cols-2 gap-5 m-5">
    <div class="card bg-secondary shadow-xl col-span-2 md:col-span-1">
      <div class="card-body">
        <h2 class="card-title">Tools</h2>
        <ul class="list-disc">
          <li><NuxtLink to="/tools" class="link link-primary">All tools</NuxtLink></li>
          <li><NuxtLink to="/tool/template" class="link link-primary">Download any available skin template</NuxtLink></li>
          <li><NuxtLink to="/tool/update" class="link link-primary">Update outdated skins</NuxtLink></li>
          <li><NuxtLink to="/tool/split" class="link link-primary">Split skins into individual images</NuxtLink></li>
          <li><NuxtLink to="/tool/compile" class="link link-primary">Re-combine individual images into a skin</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="card bg-secondary shadow-xl col-span-2 md:col-span-1">
      <div class="card-body">
        <h2 class="card-title">Publishing</h2>
        <ul class="list-disc">
          <li><NuxtLink to="/upload/file-upload" class="link link-primary">Upload a skin</NuxtLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>
