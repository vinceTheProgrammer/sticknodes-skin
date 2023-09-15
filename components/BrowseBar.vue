<template>
  <div class="card card-compact bg-secondary shadow-xl justify-items-center">
    <div class="card-body flex flex-row flex-wrap">
      <div class="pt-6">
        <button
          v-if="breakpoint.breakpoints.lgAndDown"
          class="btn"
          @click="toggleFilterPane()"
        >
          <Icon name="mdi:filter" size="1.5em" />{{
            useStartCase($t("filter", 2))
          }}...
        </button>
      </div>
      <div class="flex flex-wrap">
        <label class="mb-1"><Icon name="mdi:magnify" size="1.5em" /></label>
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="`${useCapitalize($t('search'))} ${
            getCategory(undefined).name.toLowerCase() === 'users'
              ? $t('user', 2)
              : getCategory(undefined).name.toLowerCase()
          }...`"
          class="input input-bordered w-full max-w-xs inline"
          @change="sendBrowseBarChangeEvent()"
        />
      </div>
      <div class="flex flex-wrap">
        <label class="mb-1">{{
          useCapitalize(useStartCase($t("sort-by")))
        }}</label>
        <select
          v-model="sortBy"
          class="select select-bordered w-full max-w-xs"
          @change="sendBrowseBarChangeEvent()"
        >
          <option :value="getCategory(undefined).options[0].id">
            {{ useStartCase($t(getCategory(undefined).options[0].id)) }}
          </option>
          <option
            v-for="option in getCategory(undefined).options.slice(
              1,
              getCategory(undefined).options.length
            )"
            :key="option.id"
            :value="option.id"
          >
            {{ useStartCase($t(option.id)) }}
          </option>
        </select>
      </div>
      <div class="flex flex-wrap">
        <label class="mb-1">{{
          useCapitalize(useStartCase($t("show-per-page")))
        }}</label>
        <select
          v-model="showPerPage"
          class="select select-bordered w-full max-w-xs"
          @change="sendBrowseBarChangeEvent()"
        >
          <option :value="6" selected>6</option>
          <option :value="10">10</option>
          <option :value="16">16</option>
          <option :value="20">20</option>
          <option :value="50">50</option>
          <option :value="100">100</option>
        </select>
      </div>
      <div class="pt-6">
        <button class="btn" @click="cycleViewMode()">
          <Icon :name="getViewModeIconName()" size="1.5em" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteLocationNormalized } from "vue-router";
import useBreakpoint from "~/composables/useBreakpoint";
import ViewMode from "~/types/viewMode";

const emit = defineEmits(["browse-bar-change"]);
const sendBrowseBarChangeEvent = () =>
  emit("browse-bar-change", {
    browseFiltersOpen: browseFiltersOpen.value,
    viewMode: viewMode.value,
    sortBy: sortBy.value,
    showPerPage: showPerPage.value,
    searchQuery: searchQuery.value,
  });

const route = useRoute();
const sortBy = ref("latest");
const showPerPage = ref(6);
const searchQuery = ref("");
const browseFiltersOpen = ref(false);
const viewMode = ref(ViewMode.LIST);

const breakpoint = useBreakpoint();

onMounted(() => {
  sortBy.value = getCategory(route as RouteLocationNormalized).options[0].id;
  sendBrowseBarChangeEvent();
});

onBeforeRouteUpdate((to) => {
  sortBy.value = getCategory(to).options[0].id;
  sendBrowseBarChangeEvent();
});

const categories = {
  skins: {
    name: "Skins",
    options: [
      {
        name: "Download Count",
        id: "download-count",
      },
      {
        name: "Follow Count",
        id: "follow-count",
      },
      {
        name: "Recently Published",
        id: "recently-published",
      },
      {
        name: "Recently Updated",
        id: "recently-updated",
      },
    ],
  },
  users: {
    name: "Users",
    options: [
      {
        name: "Follow Count",
        id: "follow-count",
      },
      {
        name: "Recently Registered",
        id: "recently-registered",
      },
    ],
  },
  default: {
    name: "",
    options: [
      {
        name: "Latest",
        id: "latest",
      },
    ],
  },
};

function getCategory(newRoute: RouteLocationNormalized | undefined) {
  let _route = route as RouteLocationNormalized;
  if (newRoute) _route = newRoute;
  if (_route.name) {
    switch (_route.name.toString().split("___")[0]) {
      case "browse-skins":
        return categories.skins;
      case "browse-users":
        return categories.users;
      default:
        return categories.default;
    }
  } else {
    return categories.default;
  }
}

function cycleViewMode() {
  if (viewMode.value === ViewMode.LIST) viewMode.value = ViewMode.GRID;
  else if (viewMode.value === ViewMode.GRID) viewMode.value = ViewMode.GALLERY;
  else if (viewMode.value === ViewMode.GALLERY) viewMode.value = ViewMode.LIST;
  sendBrowseBarChangeEvent();
}

function getViewModeIconName() {
  if (viewMode.value === ViewMode.LIST) return "mdi:format-list-bulleted";
  else if (viewMode.value === ViewMode.GRID) return "mdi:view-grid";
  // else if (viewMode.value === ViewMode.GALLERY) return "mdi:image";
  else return "mdi:image";
}

function toggleFilterPane() {
  browseFiltersOpen.value = !browseFiltersOpen.value;
  sendBrowseBarChangeEvent();
}
</script>
~/types/viewMode
