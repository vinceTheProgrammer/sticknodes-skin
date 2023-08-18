<template>
  <div class="grid md:grid-cols-3 gap-5 m-5">
    <div>
      <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
        <div class="card-body">
          <h1 class="card-title">{{ useCapitalize($t("upload")) }}</h1>
          <ul class="steps steps-vertical">
            <li class="step step-primary">
              {{ useStartCase($t("choose-files")) }}
            </li>
            <li class="step">{{ useStartCase($t("set-metadata")) }}</li>
            <li class="step">{{ useStartCase($t("review-&-publish")) }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="md:col-span-2">
      <NuxtPage />
    </div>
  </div>
</template>
