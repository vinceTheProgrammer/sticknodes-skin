<template>
    <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
        <div class="card-body">
            <button class="btn"><font-awesome-icon icon="fa-solid fa-circle-xmark" /> Clear Filters</button>
            <ul class="w-full mx-0">
                <li v-for="category in getFilters()">
                    <h1 class="text-xl font-bold">{{ category.label }}</h1>
                    <div v-for="filter in category.filters" class="form-control">
                        <label class="label cursor-pointer">
                            <span class="label-text">{{ filter }}</span>
                            <input type="checkbox" :checked="false" class="checkbox" />
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const filterCategories = {
    skins: [
        {
            label: "Category",
            filters: ["One", "Two", "Three", "Four"]

        },
        {
            label: "Thing",
            filters: ["Lol", "Spp", "Lek"]
        },
        {
            label: "NOoooooO",
            filters: ["yes", "double yes", "si"]
        }
    ],
    users: [
        {
            label: "leppo",
            filters: ["s", "aaa", "lolol"]

        },
        {
            label: "no",
            filters: ["ssss", "gibberish"]
        },
        {
            label: "yes",
            filters: ["AHHHHH", "E", "a"]
        }
    ],
    default: [
        {
            label: "Error",
            filters: ["Error finding labels"]
        }
    ]
}

function getFilters() {
    if (route.name) {
        switch (route.name) {
            case 'browse-skins':
                return filterCategories.skins;
            case 'browse-users':
                return filterCategories.users;
            default:
                return filterCategories.default;
        }
    } else {
        return filterCategories.default;
    }
}
</script>
