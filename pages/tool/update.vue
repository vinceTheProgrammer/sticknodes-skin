<template>
  <div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-2 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">Input Settings</h1>
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
        <label class="label">
          <span class="label-text">Stick Nodes Version</span>
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
        <h1 class="card-title">Output Settings</h1>
        <label class="label">
          <span class="label-text">Stick Nodes Version</span>
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
        <h1 class="card-title">Result</h1>
        <button class="btn">Download</button>
      </div>
    </div>
  </div>
</template>
