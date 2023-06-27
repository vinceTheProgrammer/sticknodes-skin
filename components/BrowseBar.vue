<template>
    <div class="card card-compact bg-secondary shadow-xl justify-items-center">
        <div class="card-body flex flex-row flex-wrap">
            <div class="pt-6">
                <button v-if="breakpoint.breakpoints.lgAndDown" @click="toggleFilterPane()" class="btn"><font-awesome-icon
                        icon="fa-solid fa-filter" />Filters...</button>
            </div>
            <div class="flex flex-wrap">
                <label class="mb-1"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></label>
                <input @change="sendBrowseBarChangeEvent()" v-model="searchQuery" type="text"
                    :placeholder="`Search ${getCategory(undefined).name}...`"
                    class="input input-bordered w-full max-w-xs inline" />
            </div>
            <div class="flex flex-wrap">
                <label class="mb-1">Sort by</label>
                <select @change="sendBrowseBarChangeEvent()" v-model="sortBy"
                    class="select select-bordered w-full max-w-xs">
                    <option :value="getCategory(undefined).options[0].id">{{ getCategory(undefined).options[0].name }}
                    </option>
                    <option v-for="option in getCategory(undefined).options.slice(1, getCategory(undefined).options.length)"
                        :value="option.id">
                        {{ option.name }}
                    </option>
                </select>
            </div>
            <div class="flex flex-wrap">
                <label class="mb-1">Show per page</label>
                <select @change="sendBrowseBarChangeEvent()" v-model="showPerPage"
                    class="select select-bordered w-full max-w-xs">
                    <option :value="6" selected>6</option>
                    <option :value="10">10</option>
                    <option :value="16">16</option>
                    <option :value="20">20</option>
                    <option :value="50">50</option>
                    <option :value="100">100</option>
                </select>
            </div>
            <div class="pt-6">
                <button @click="cycleViewMode()" class="btn"><font-awesome-icon
                        :icon="`fa-solid fa-${getViewModeIconName()}`" /></button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouteLocationNormalized } from 'vue-router';
import useBreakpoint from '~/composables/useBreakpoint';
import ViewModes from '~/types/viewModes';

const emit = defineEmits(["browse-bar-change"]);
const sendBrowseBarChangeEvent = () => emit("browse-bar-change", { browseFiltersOpen: browseFiltersOpen.value, viewMode: viewMode.value, sortBy: sortBy.value, showPerPage: showPerPage.value, searchQuery: searchQuery.value });

const route = useRoute();
const sortBy = ref('latest');
const showPerPage = ref(6);
const searchQuery = ref('');
const browseFiltersOpen = ref(false);
const viewMode = ref(ViewModes.LIST);

const breakpoint = useBreakpoint();

onMounted(() => {
    sortBy.value = getCategory(route).options[0].id;
    sendBrowseBarChangeEvent();
});

onBeforeRouteUpdate((to) => {
    sortBy.value = getCategory(to).options[0].id;
    sendBrowseBarChangeEvent();
})

const categories = {
    skins: {
        name: 'Skins',
        options: [
            {
                name: "Download Count",
                id: "download-count"
            },
            {
                name: "Follow Count",
                id: "follow-count"
            },
            {
                name: "Recently Published",
                id: "recently-published"
            },
            {
                name: "Recently Updated",
                id: "recently-updated"
            }
        ]
    },
    users: {
        name: 'Users',
        options: [
            {
                name: "Follow Count",
                id: "follow-count"
            },
            {
                name: "Recently Registered",
                id: "recently-registered"
            }
        ]
    },
    default: {
        name: '',
        options: [
            {
                name: "Latest",
                id: "latest"
            }
        ]
    }
};

function getCategory(newRoute: RouteLocationNormalized | undefined) {
    let _route = route;
    if (newRoute) _route = newRoute
    if (_route.name) {
        switch (_route.name) {
            case 'browse-skins':
                return categories.skins;
            case 'browse-users':
                return categories.users;
            default:
                return categories.default;
        }
    } else {
        return categories.default;
    }
}

function cycleViewMode() {
    if (viewMode.value == ViewModes.LIST) viewMode.value = ViewModes.GRID;
    else if (viewMode.value == ViewModes.GRID) viewMode.value = ViewModes.GALLERY;
    else if (viewMode.value == ViewModes.GALLERY) viewMode.value = ViewModes.LIST;
    sendBrowseBarChangeEvent();
}

function getViewModeIconName() {
    if (viewMode.value == ViewModes.LIST) return 'list-ul';
    else if (viewMode.value == ViewModes.GRID) return 'border-all';
    else if (viewMode.value == ViewModes.GALLERY) return 'image';
}

function toggleFilterPane() {
    browseFiltersOpen.value = !browseFiltersOpen.value;
    sendBrowseBarChangeEvent();
}
</script>