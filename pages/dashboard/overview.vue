<template>
  <div>
    <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
      <div class="card-body">
        <h1 class="card-title">{{ useCapitalize($t("overview")) }}</h1>
        <div class="grid grid-cols-2 gap-5">
          <div
            class="card card-compact bg-base-200 shadow-xl col-span-2 sm:col-span-1"
          >
            <div class="card-body">
              <div class="stat">
                <div class="stat-figure text-primary">
                  <Icon size="2em" name="mdi:download" />
                </div>
                <div class="stat-title">
                  {{ useCapitalize($t("download", 2)) }}
                </div>
                <div class="stat-value text-primary">0</div>
                <div class="stat-desc">
                  {{
                    useCapitalize(
                      $t("from-skins", 2, {
                        named: { count: "0" },
                      })
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
