<template>
  <li v-for="item in items" :key="item.name">
    <slot name="item" v-bind="item"></slot>
  </li>
</template>

<script setup lang="ts">
import { RouteLocationNormalized } from "~/.nuxt/vue-router";
const { t } = useI18n();

const props = defineProps({
  routes: {
    type: Array<Array<String>>,
    required: true,
  },
});
const { routes } = toRefs(props);
const translatedRoutes = ref<Array<Array<string>>>();
const translatedRouteStrings = ref<string[]>([]);
const routeStrings = ref<string[]>([]);

interface ReturnItem {
  active: boolean;
  route: string;
  name: string;
}

const items = ref<ReturnItem[]>([]);

onMounted(() => {
  for (const route of routes.value) {
    let routeString = "";
    for (const routePart of route) {
      routeString = routeString + "/" + routePart;
    }
    routeStrings.value.push(routeString);
  }
  translatedRoutes.value = routes.value.map((route) =>
    route.map((routePart) => t(routePart.toString()))
  );
  for (const route of translatedRoutes.value) {
    let routeString = "";
    for (const routePart of route) {
      routeString = routeString + "/" + routePart;
    }
    translatedRouteStrings.value.push(routeString);
  }
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
    for (const [index, route] of routeStrings.value.entries()) {
      const returnItem: ReturnItem = {
        active: false,
        route: "",
        name: "",
      };
      if (route === currentRoute.path.toString()) returnItem.active = true;
      returnItem.route = replaceSlashes(route.toString());
      const nameArr = translatedRouteStrings.value[index].toString().split("/");
      const rawname = nameArr[nameArr.length - 1];
      returnItem.name = rawname.charAt(0).toUpperCase() + rawname.slice(1);
      items.value.push(returnItem);
    }
  }
}

function replaceSlashes(path: string): string {
  const parts = path.split("/").filter(Boolean); // Split the path by slashes and remove empty parts
  return parts.join("-"); // Join the parts with hyphens
}
</script>
