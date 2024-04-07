<template>
  <div>
    <h1 v-show="pending"></h1>
    <h1 v-show="error !== null">{{ error }}</h1>
    <div v-if="users !== null">
      <UserCard
        v-for="(user, index) in users.docs"
        v-show="user.data().displayname.length > 0"
        :key="`user-card-${index}`"
        :user="user.data()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { query, collection, getDocs, limit } from "firebase/firestore";
import ViewMode from "~/types/viewMode";
const db = useFirestore();

type QueryObject = {
  showPerPage: number;
  searchQuery: string;
  sortBy: string;
  viewMode: ViewMode;
};

const props = defineProps({
  queryObject: {
    type: Object as () => QueryObject,
    required: true,
  },
});
const { queryObject } = toRefs(props);

let {
  data: users,
  pending,
  error,
} = await useAsyncData(
  "sns-users",
  () => {
    return getDocs(
      query(collection(db, "users"), limit(queryObject.value.showPerPage))
    );
  },
  { lazy: true, server: true }
);

watch(queryObject, async () => {
  ({
    data: users,
    pending,
    error,
  } = await useAsyncData(
    "sns-users",
    () => {
      return getDocs(
        query(collection(db, "users"), limit(queryObject.value.showPerPage))
      );
    },
    { lazy: true, server: true }
  ));
});
</script>
