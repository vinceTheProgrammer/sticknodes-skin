<template>
  <div class="flex flex-col lg:grid lg:grid-cols-12 gap-5 m-5">
    <div
      v-if="browseFiltersOpen || breakpoint.breakpoints.is == 'xl'"
      class="lg:col-span-3 lg:order-1 order-2"
    >
      <BrowseFilters />
    </div>
    <div
      :class="`lg:col-span-${
        browseFiltersOpen || breakpoint.breakpoints.is == 'xl' ? '9' : 'full'
      } lg:order-2 order-1`"
    >
      <BrowseBar @browse-bar-change="setBrowseBarValues" />
      <div
        v-if="breakpoint.breakpoints.lgAndUp"
        class="mt-5"
        vclass="lg:col-span-9 order-3"
      >
        <NuxtPage />
      </div>
    </div>
    <div
      v-if="breakpoint.breakpoints.lgAndUp == false"
      class="lg:col-span-9 order-3"
    >
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import ViewModes from "~/types/viewModes";
import useBreakpoint from "~/composables/useBreakpoint";
const breakpoint = useBreakpoint();

const browseFiltersOpen = ref(false);
const viewMode = ref(ViewModes.LIST);
const sortBy = ref("latest");
const showPerPage = ref(6);
const searchQuery = ref("");

function setBrowseBarValues(browseBarChanges: {
  browseFiltersOpen: boolean;
  viewMode: ViewModes;
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
</script>
