<template>
  <div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-2 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">{{ useStartCase($t("input-settings")) }}</h1>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">{{
              useCapitalize($t("pick-a-skin"))
            }}</span>
          </label>
          <input
            type="file"
            accept=".zip"
            class="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
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
