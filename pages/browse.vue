<template>
  <div class="flex flex-col lg:grid lg:grid-cols-12 gap-5 m-5">
    <div
      v-if="browseFiltersOpen || breakpoint.breakpoints.is == 'xl'"
      class="lg:col-span-3 lg:order-1 order-2"
    >
      <BrowseFilters @filters-change="setFiltersValues" />
    </div>
    <div
      :class="`${
        browseFiltersOpen || breakpoint.breakpoints.is == 'xl'
          ? 'lg:col-start-4 col-end-13'
          : 'lg:col-start-1 col-end-13'
      } lg:order-2 order-1`"
    >
      <BrowseBar @browse-bar-change="setBrowseBarValues" />
      {{ activeFiltersUsers }}
      <div
        v-if="breakpoint.breakpoints.lgAndUp"
        class="mt-5"
        vclass="lg:col-span-9 order-3"
      >
        <ClientOnly>
          <NuxtPage
            :query-object="{
              showPerPage: showPerPage,
              searchQuery: searchQuery,
              sortBy: sortBy,
              viewMode: viewMode,
            }"
          />
          <template #fallback>
            <span class="loading loading-dots loading-lg"></span>
          </template>
        </ClientOnly>
      </div>
    </div>
    <div
      v-if="breakpoint.breakpoints.lgAndUp == false"
      class="lg:col-span-9 order-3"
    >
      <ClientOnly>
        <NuxtPage
          :query-object="{
            showPerPage: showPerPage,
            searchQuery: searchQuery,
            sortBy: sortBy,
            viewMode: viewMode,
          }"
        />
        <template #fallback>
          <span class="loading loading-dots loading-lg"></span>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import ViewMode from "~/types/viewMode";
import useBreakpoint from "~/composables/useBreakpoint";
const breakpoint = useBreakpoint();

const browseFiltersOpen = ref(false);
const viewMode = ref(ViewMode.LIST);
const sortBy = ref("latest");
const showPerPage = ref(6);
const searchQuery = ref("");
const activeFiltersSkins = ref(new Map());
const activeFiltersUsers = ref(new Map());

function setBrowseBarValues(browseBarChanges: {
  browseFiltersOpen: boolean;
  viewMode: ViewMode;
  sortBy: string;
  showPerPage: number;
  searchQuery: string;
}) {
  browseFiltersOpen.value = browseBarChanges.browseFiltersOpen;
  viewMode.value = browseBarChanges.viewMode;
  sortBy.value = browseBarChanges.sortBy;
  showPerPage.value = browseBarChanges.showPerPage;
  searchQuery.value = browseBarChanges.searchQuery;
}

function setFiltersValues(filtersChanges: {
  activeFiltersSkins: Map<string, boolean>;
  activeFiltersUsers: Map<string, boolean>;
}) {
  activeFiltersSkins.value = filtersChanges.activeFiltersSkins;
  activeFiltersUsers.value = filtersChanges.activeFiltersUsers;
}
</script>
