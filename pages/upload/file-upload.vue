<template>
  <div class="card card-compact bg-secondary shadow-xl md:col-span-2 sns-card">
    <div class="card-body">
      <h1 class="card-title">Step 1: Choose Files</h1>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Pick a skin (.zip)</span>
        </label>
        <input
          type="file"
          accept=".zip"
          class="file-input file-input-bordered w-full max-w-xs"
        />
      </div>
      <div class="grid grid-cols-2 gap-1">
        <div class="col-span-1"></div>
        <div class="col-span-1">
          <button class="btn float-right">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
