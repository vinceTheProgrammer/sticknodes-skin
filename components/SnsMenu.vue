<template>
  <li v-for="item in items" :key="item.name">
    <slot name="item" v-bind="item"></slot>
  </li>
</template>

<script setup lang="ts">
import { RouteLocationNormalized } from "~/.nuxt/vue-router";

const props = defineProps({
  routes: {
    type: Array<String>,
    required: true,
  },
});
const { routes } = toRefs(props);

interface ReturnItem {
  active: boolean;
  route: string;
  name: string;
}

const items = ref<ReturnItem[]>([]);

onMounted(() => {
  updateItems(useRoute());
});

onBeforeRouteUpdate((to) => {
  updateItems(to);
});

function updateItems(to: RouteLocationNormalized) {
  items.value = [];
  const currentRoute = to;
  if (
    currentRoute !== null &&
    currentRoute !== undefined &&
    currentRoute.name
  ) {
    for (const route of routes.value) {
      const returnItem: ReturnItem = {
        active: false,
        route: "",
        name: "",
      };
      if (route === currentRoute.path.toString()) returnItem.active = true;
      returnItem.route = route.toString();
      const nameArr = route.toString().split("/");
      const rawname = nameArr[nameArr.length - 1];
      returnItem.name = rawname.charAt(0).toUpperCase() + rawname.slice(1);
      items.value.push(returnItem);
    }
  }
}
</script>
