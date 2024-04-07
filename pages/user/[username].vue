<template>
  <div>
    {{ userId }}
    <div v-if="userDoc && userDoc.username !== ''" class="m-5">
      <div class="flex ml-5">
        <div
          :class="`avatar self-center`"
          @mouseover="hoverAvatar = true"
          @mouseleave="hoverAvatar = false"
          @touchstart="hoverAvatar = true"
          @touchend="hoverAvatar = false"
          @click="changingAvatar = true"
        >
          <div class="relative w-24 h-24">
            <img
              :class="`w-full h-full object-cover rounded-full ${
                hoverAvatar ? 'brightness-50' : ''
              }`"
              :src="
                userDoc
                  ? userDoc.avatar
                  : 'https://api.dicebear.com/6.x/identicon/svg?seed=default&backgroundColor=c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf'
              "
            />
            <div
              :class="`absolute inset-0 flex items-center justify-center ${
                hoverAvatar ? '' : 'invisible'
              }`"
            >
              <Icon name="mdi:pencil" size="2em" />
            </div>
          </div>
        </div>
        <div class="flex flex-col self-center">
          <p class="text-4xl font-bold inline pl-5">
            {{ userDoc ? userDoc.displayname : "null" }}
          </p>
          <p class="text-lg font-bold inline pl-5">
            @{{ userDoc ? userDoc.username : "null" }}
          </p>
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-5 m-5">
        <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
          <div class="card-body">
            <div class="divider my-1"></div>

            <h1>
              <Icon class="mr-2" name="mdi:download" size="1.5em" />
              <span class="text-lg font-bold">{{
                userDoc ? userDoc.downloadCount : 0
              }}</span>
              {{ $t("download", 2) }}
            </h1>
            <h1>
              <Icon class="mr-2" name="mdi:heart-multiple" size="1.5em" />
              <span class="text-lg font-bold">{{
                userDoc ? userDoc.followerCount : 0
              }}</span>
              {{ $t("follower", 2) }}
            </h1>
            <h1>
              <Icon class="mr-2" name="mdi:account-clock" size="1.5em" />
              {{
                useCapitalize(
                  $t("joined-ago", 2, {
                    named: {
                      relativeTime: relativeTime,
                    },
                  })
                )
              }}
            </h1>
            <div class="divider my-1"></div>
            <h1>
              <Icon class="mr-2" name="mdi:card-account-details" size="1.5em" />
              {{ useCapitalize($t("user")) }} {{ $t("ID") }}:
              <span class="badge"
                >{{
                  userDoc ? useTruncate(userDoc.id, { length: 12 }) : "default"
                }}<Icon class="mr-2" name="mdi:clipboard-text"
              /></span>
            </h1>
          </div>
        </div>
        <div class="md:col-span-2">
          <div class="card card-compact bg-secondary shadow-xl w-full sns-card">
            <div class="card-body">
              <h1 class="card-title">{{ useCapitalize($t("information")) }}</h1>
              <div class="card bg-base-200 p-5">
                <h1 class="card-title">Bio</h1>
                <p>{{ userDoc ? userDoc.bio : "null" }}</p>
              </div>
            </div>
          </div>
          <div class="card card-compact bg-secondary shadow-xl w-full sns-card">
            <div class="card-body">
              <h1 class="card-title">Skins</h1>
              <div class="overflow-x-auto">
                <table class="table">
                  <!-- head -->
                  <thead>
                    <tr>
                      <th></th>
                      <th>{{ useCapitalize($t("name")) }}</th>
                      <th>{{ useCapitalize($t("ID")) }}</th>
                      <th>{{ useCapitalize($t("status")) }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- row 1 -->
                    <tr>
                      <th>1</th>
                      <td>My cool skin</td>
                      <td>fds78a7v8vs98a8a7d8</td>
                      <td>Private</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>user not found</div>
    <dialog :class="`modal ${changingAvatar ? 'modal-open' : ''}`">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Change Avatar</h3>
        <p class="py-4">
          Please click the button below to select a new avatar image.<br />
        </p>
        <button
          class="btn btn-outline"
          @click="open({ accept: 'image/*', multiple: false })"
        >
          Choose Image
        </button>
        <button
          :disabled="files === undefined || files === null"
          class="btn btn-outline"
          @click="uploadPicture()"
        >
          Upload Avatar
        </button>
        <img v-if="url" :src="url" />
        {{ uploadProgress }}
        {{ uploadError }}
        <button
          class="btn btn-outline"
          :disabled="url === undefined || url === null"
          @click="setAvatar()"
        >
          Set Avatar
        </button>
      </div>
      <form
        method="dialog"
        class="modal-backdrop"
        @submit="changingAvatar = false"
      >
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { useDocument, useFirebaseStorage, useStorageFile } from "vuefire";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { useFileDialog } from "@vueuse/core";
import { ref as storageRef } from "firebase/storage";
const db = useFirestore();
const userId = ref("default");
const userDocSource = computed(() => doc(db, "users", userId.value));
const userAvatarStorageSource = computed(() =>
  storageRef(storage, `meta/avatars/${userId.value}`)
);
const userDoc = useDocument(userDocSource);
const hoverAvatar = ref(false);

const relativeTime = ref("");
setInterval(() => {
  relativeTime.value = getRelativeTime(
    userDoc.value ? new Date(userDoc.value.accountCreated) : new Date(0)
  );
}, 1000);

onMounted(async () => {
  const route = useRoute("user-username");
  const username = route.params.username;
  const usersRef = collection(db, "users");
  const usernameQuery = query(usersRef, where("username", "==", username));
  const users = (await getDocs(usernameQuery)).docs;
  if (users.length > 0) {
    const fetchedUser = users[0];
    const id = fetchedUser.id;
    userId.value = id;
  }
});
const changingAvatar = ref(false);

const storage = useFirebaseStorage();

const { url, uploadProgress, uploadError, upload } = useStorageFile(
  userAvatarStorageSource
);

function uploadPicture() {
  const data = files.value?.item(0);
  if (data) {
    upload(data);
  }
}

const { files, open } = useFileDialog();

async function setAvatar() {
  await updateDoc(userDocSource.value, {
    avatar: url.value,
  });
  changingAvatar.value = false;
}
</script>
