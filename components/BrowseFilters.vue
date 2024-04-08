<template>
  <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
    <div class="card-body">
      <button class="btn">
        <Icon name="mdi:close-circle-multiple" size="1.5em" />
        {{ useCapitalize($t("clear-filters")) }}
      </button>
      <ul class="w-full mx-0">
        <li
          v-for="category in getFilters(CategoryType.CHECKBOX)"
          :key="category.label"
          class="mt-2"
        >
          <h1 class="text-xl font-bold">{{ useStartCase(category.label) }}</h1>
          <div
            v-for="filter in category.filters"
            :key="filter"
            class="form-control"
          >
            <label class="label cursor-pointer">
              <span class="label-text">{{ useStartCase(filter) }}</span>
              <input
                type="checkbox"
                :v-model="false"
                class="checkbox"
                @change="updateFilters(filter, $event)"
              />
            </label>
          </div>
        </li>

        <li
          v-for="category in getFilters(CategoryType.MULTI)"
          :key="category.label"
          class="mt-2"
        >
          <h1 class="text-xl font-bold pb-1">
            {{ useStartCase(category.label) }}
          </h1>
          <multiselect
            v-model="versions"
            :options="category.filters"
            :multiple="true"
            :close-on-select="false"
            :placeholder="`${useStartCase(category.label)}...`"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Multiselect from "vue-multiselect";
import { categories } from "~/assets/filters";
import { CategoryType } from "~/types/categories";
const route = useRoute();

const activeFiltersSkins = ref(new Map());
const activeFiltersUsers = ref(new Map());

const versions = ref(null);

initFilters();

function initFilters() {
  for (const category of categories.skins) {
    for (const skin of category.filters) {
      activeFiltersSkins.value.set(skin, false);
    }
  }
  for (const category of categories.users) {
    for (const user of category.filters) {
      activeFiltersUsers.value.set(user, false);
    }
  }
}

function updateFilters(filterLabel: string, event: Event) {
  const target = event.target;
  if (target === null) return;
  if (isCheckboxInput(target)) {
    if (route.name) {
      const routeName = route.name.toString().split("___")[0];
      if (routeName === "browse-skins")
        activeFiltersSkins.value.set(filterLabel, target.checked);
      sendFiltersChangeEvent();
      if (routeName === "browse-users")
        activeFiltersUsers.value.set(filterLabel, target.checked);
      sendFiltersChangeEvent();
    }
  }
}

const emit = defineEmits(["filters-change"]);
const sendFiltersChangeEvent = () =>
  emit("filters-change", {
    activeFiltersSkins,
    activeFiltersUsers,
  });

onMounted(() => {
  sendFiltersChangeEvent();
});

function getFilters(categoryType: CategoryType) {
  if (route.name) {
    switch (route.name.toString().split("___")[0]) {
      case "browse-skins":
        return categories.skins.filter(
          (category) => category.type === categoryType
        );
      case "browse-users":
        return categories.users.filter(
          (category) => category.type === categoryType
        );
      default:
        return categories.default.filter(
          (category) => category.type === categoryType
        );
    }
  } else {
    return categories.default.filter(
      (category) => category.type === categoryType
    );
  }
}

function isCheckboxInput(
  target: EventTarget | null
): target is HTMLInputElement {
  return target instanceof HTMLInputElement && target.type === "checkbox";
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style>
.multiselect__tags {
  @apply bg-base-100 border-base-200;
}

.multiselect__content-wrapper {
  @apply bg-base-100 border-base-200;
  color: hsl(var(--bc));
}

.multiselect__option--selected {
  @apply bg-[#41b883];
}

.multiselect__option--highlight {
  @apply bg-secondary;
}

.multiselect__option--highlight::after {
  @apply bg-secondary;
}
</style>
