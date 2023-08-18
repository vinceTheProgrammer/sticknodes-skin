<template>
  <div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-2 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">{{ useStartCase($t("output-settings")) }}</h1>
        <label class="label">
          <span class="label-text">{{
            useStartCase($t("stick-nodes-version"))
          }}</span>
        </label>
        <select class="select select-bordered w-full">
          <option selected>3.3.4</option>
          <option>4.0.1</option>
        </select>
        <label class="label">
          <span class="label-text">{{
            useStartCase($t("template-style"))
          }}</span>
        </label>
        <select class="select select-bordered w-full">
          <option selected>Light</option>
          <option>Dark</option>
        </select>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">{{
              useCapitalize($t("include-atlas-text-files"))
            }}</span>
            <input type="checkbox" :checked="includeAtlas" class="checkbox" />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">{{ useCapitalize($t("outlined")) }}</span>
            <input type="checkbox" :checked="outlined" class="checkbox" />
          </label>
        </div>
      </div>
    </div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-2 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">{{ useCapitalize($t("result")) }}</h1>
        <button class="btn">{{ useCapitalize($t("download")) }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const includeAtlas = ref(false);
const outlined = ref(false);
</script>
