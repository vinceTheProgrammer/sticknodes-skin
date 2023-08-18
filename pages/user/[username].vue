<template>
  <div class="m-5">
    <div class="flex ml-5">
      <div class="avatar self-center">
        <div class="w-24 rounded-full inline">
          <img
            src="https://api.dicebear.com/6.x/identicon/svg?seed=Precious&backgroundColor=c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf"
          />
        </div>
      </div>
      <p class="text-3xl self-center font-bold inline pl-5">
        {{ $route.params.username }}
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-5 m-5">
      <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
        <div class="card-body">
          <div class="divider my-1"></div>

          <h1>
            <Icon class="mr-2" name="mdi:download" size="1.5em" />
            <span class="text-lg font-bold">0</span> {{ $t("download", 2) }}
          </h1>
          <h1>
            <Icon class="mr-2" name="mdi:heart-multiple" size="1.5em" />
            <span class="text-lg font-bold">0</span> {{ $t("follower", 2) }}
          </h1>
          <h1>
            <Icon class="mr-2" name="mdi:account-clock" size="1.5em" />
            {{
              useCapitalize(
                $t("joined-ago", 2, {
                  named: { amount: "0", unit: $t("years") },
                })
              )
            }}
          </h1>
          <div class="divider my-1"></div>
          <h1>
            <Icon class="mr-2" name="mdi:card-account-details" size="1.5em" />
            {{ useCapitalize($t("user")) }} {{ $t("ID") }}:
            <span class="badge"
              >dj46sa9 <Icon class="mr-2" name="mdi:clipboard-text"
            /></span>
          </h1>
        </div>
      </div>
      <div class="md:col-span-2">
        <div class="card card-compact bg-secondary shadow-xl w-full sns-card">
          <div class="card-body">
            <h1 class="card-title">{{ useCapitalize($t("information")) }}</h1>
            <div class="card bg-base-200 p-5">
              <h1 class="card-title">Bio</h1>
              <p>This is an epic bio.</p>
            </div>
          </div>
        </div>
        <div class="card card-compact bg-secondary shadow-xl w-full sns-card">
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
    </div>
  </div>
</template>
