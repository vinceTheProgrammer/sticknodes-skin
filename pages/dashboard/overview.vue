<template>
  <div>
    <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
      <div class="card-body">
        <h1 class="card-title">Overview</h1>
        <div class="grid grid-cols-2 gap-5">
          <div
            class="card card-compact bg-base-200 shadow-xl col-span-2 sm:col-span-1"
          >
            <div class="card-body">
              <div class="stat">
                <div class="stat-figure text-primary">
                  <font-awesome-icon
                    class="fa-xl"
                    icon="fa-solid fa-download"
                  />
                </div>
                <div class="stat-title">Downloads</div>
                <div class="stat-value text-primary">0</div>
                <div class="stat-desc">from 0 skins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
