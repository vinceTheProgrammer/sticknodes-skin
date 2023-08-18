<template>
  <div class="grid md:grid-cols-3 gap-5 m-5">
    <div>
      <div class="card bg-secondary shadow-xl md:col-span-1">
        <div class="card-body">
          <h1 class="card-title">{{ useCapitalize($t("notification", 2)) }}</h1>
          <h1>{{ useCapitalize($t("manage")) }}</h1>
          <div class="card-actions justify-end">
            <button class="btn btn-error">
              {{ useCapitalize($t("clear-all")) }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="md:col-span-2">
      <div class="card bg-secondary shadow-xl sns-card">
        <div class="card-body">
          <h2 class="card-title">
            {{ useCapitalize($t("example-notification")) }} 1
          </h2>
          <p>{{ $t("f-example-notification-description") }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">
              {{ useCapitalize($t("dismiss")) }}
            </button>
          </div>
        </div>
      </div>
      <div class="card bg-secondary shadow-xl sns-card">
        <div class="card-body">
          <h2 class="card-title">
            {{ useCapitalize($t("example-notification")) }} 2
          </h2>
          <p>{{ $t("f-example-notification-description") }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">
              {{ useCapitalize($t("dismiss")) }}
            </button>
          </div>
        </div>
      </div>
      <div class="card bg-secondary shadow-xl sns-card">
        <div class="card-body">
          <h2 class="card-title">
            {{ useCapitalize($t("example-notification")) }} 3
          </h2>
          <p>{{ $t("f-example-notification-description") }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">
              {{ useCapitalize($t("dismiss")) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
