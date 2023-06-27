<template>
  <div class="grid md:grid-cols-3 gap-5 m-5">
    <div>
      <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
        <div class="card-body">
          <h1 class="card-title">Upload</h1>
          <ul class="steps steps-vertical">
            <li class="step step-primary">Choose Files</li>
            <li class="step">Set Metadata</li>
            <li class="step">Review & Publish</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="md:col-span-2">
      <NuxtPage />
    </div>
  </div>
</template>
