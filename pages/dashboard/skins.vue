<template>
  <div>
    <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
      <div class="card-body">
        <h1 class="card-title">Skins</h1>
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>{{ useCapitalize($t("name")) }}</th>
                <th>{{ useCapitalize($t("ID")) }}</th>
                <th>{{ useCapitalize($t("status")) }}</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <th>1</th>
                <td>My cool skin</td>
                <td>fds78a7v8vs98a8a7d8</td>
                <td>Private</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
