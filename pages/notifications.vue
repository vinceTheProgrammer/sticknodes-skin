<template>
    <div class="grid md:grid-cols-3 gap-5 m-5">
      <div>
        <div class="card bg-secondary shadow-xl md:col-span-1">
          <div class="card-body">
            <h1 class="card-title">Notifications</h1>
            <h1>Manage</h1>
            <div class="card-actions justify-end">
              <button class="btn btn-error">Clear all</button>
            </div>
          </div>
        </div>
      </div>
      <div class="md:col-span-2">
        <div class="card bg-secondary shadow-xl sns-card">
          <div class="card-body">
            <h2 class="card-title">Example notification 1</h2>
            <p>This is an example notification</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Dismiss</button>
            </div>
          </div>
        </div>
        <div class="card bg-secondary shadow-xl sns-card">
          <div class="card-body">
            <h2 class="card-title">Example notification 2</h2>
            <p>This is an example notification</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Dismiss</button>
            </div>
          </div>
        </div>
        <div class="card bg-secondary shadow-xl sns-card">
          <div class="card-body">
            <h2 class="card-title">Example notification 3</h2>
            <p>This is an example notification</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  