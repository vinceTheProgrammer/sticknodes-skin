<template>
  <div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-2 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">Output Settings</h1>
        <label class="label">
          <span class="label-text">Stick Nodes Version</span>
        </label>
        <select class="select select-bordered w-full">
          <option selected>3.3.4</option>
          <option>4.0.1</option>
        </select>
        <label class="label">
          <span class="label-text">Template Style</span>
        </label>
        <select class="select select-bordered w-full">
          <option selected>Light</option>
          <option>Dark</option>
        </select>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Include atlas text files</span>
            <input type="checkbox" :checked="includeAtlas" class="checkbox" />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Outlined</span>
            <input type="checkbox" :checked="outlined" class="checkbox" />
          </label>
        </div>
      </div>
    </div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-2 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">Result</h1>
        <button class="btn">Download</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const includeAtlas = ref(false);
const outlined = ref(false);
</script>
