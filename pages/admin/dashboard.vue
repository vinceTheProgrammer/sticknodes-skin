<template>
  <div>
    <input
      v-model="email"
      type="text"
      placeholder="email of user to make admin"
      class="input input-bordered w-full max-w-xs inline"
    />
    <button
      class="btn btn-warning"
      @click="
        addAdminRole({ email: email }).then((result) => {
          console.log(result);
        })
      "
    >
      Make Admin
    </button>
  </div>
</template>

<script setup lang="ts">
import { getFunctions, httpsCallable } from "firebase/functions";
const email = ref("");

const firebaseApp = useFirebaseApp();
const functions = getFunctions(firebaseApp);
const addAdminRole = httpsCallable(functions, "addAdminRole");
</script>
