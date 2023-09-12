<template>
  <div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-2 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">{{ useStartCase($t("output-settings")) }}</h1>
        <label class="label">
          <span class="label-text">{{
            useStartCase($t("stick-nodes-version"))
          }}</span>
        </label>
        <select v-model="value" class="select select-bordered w-full">
          <option :value="items[0].value">{{ items[0].title }}</option>
          <option
            v-for="item in items.slice(1)"
            :key="item.value"
            :value="item.value"
          >
            {{ item.title }}
          </option>
        </select>
        <label class="label">
          <span class="label-text">{{
            useStartCase($t("template-style"))
          }}</span>
        </label>
        <select v-model="light" class="select select-bordered w-full">
          <option>Light</option>
          <option>Dark</option>
        </select>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">{{
              useCapitalize($t("include-atlas-text-files"))
            }}</span>
            <input v-model="includeTxt" type="checkbox" class="checkbox" />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">{{ useCapitalize($t("outlined")) }}</span>
            <input
              disabled
              type="checkbox"
              :checked="outlined"
              class="checkbox"
            />
          </label>
        </div>
      </div>
    </div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-2 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">{{ useCapitalize($t("result")) }}</h1>
        <button class="btn" @click="downloadSkinTemplate()">
          {{ useCapitalize($t("download")) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getStorage, ref as fbRef, getDownloadURL } from "firebase/storage";
const firebaseApp = useFirebaseApp();

// const includeAtlas = ref(false);
const outlined = ref(false);

const storage = getStorage(firebaseApp);
// const storageRef = fbRef(storage);
const txtHdLight334 = fbRef(
  storage,
  "assets/3-3-4/TemplateZips/skinTxtTemplateHDLight334.zip"
);
const HdLight334 = fbRef(
  storage,
  "assets/3-3-4/TemplateZips/skinTemplateHDLight334.zip"
);
const txtHdDark334 = fbRef(
  storage,
  "assets/3-3-4/TemplateZips/skinTxtTemplateHDDark334.zip"
);
const HdDark334 = fbRef(
  storage,
  "assets/3-3-4/TemplateZips/skinTemplateHDDark334.zip"
);

const items = ref([
  {
    title: "3.3.4",
    value: "334",
  },
]);
const value = ref(items.value[0].value);
const light = ref("Light");
const includeTxt = ref(true);

function downloadSkinTemplate(): void {
  let templateRef = txtHdLight334;
  if (light.value === "Dark") {
    if (includeTxt.value === true) templateRef = txtHdDark334;
    else templateRef = HdDark334;
  } else if (includeTxt.value === true) templateRef = txtHdLight334;
  else templateRef = HdLight334;
  getDownloadURL(templateRef)
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (_event) => {
        const blob = xhr.response;
        saveBlob(blob, templateRef.name);
      };
      xhr.open("GET", url);
      xhr.send();
    })
    .catch((error) => {
      console.log(error);
    });
}

function saveBlob(blob: Blob | MediaSource, fileName: string) {
  const a = document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = fileName;
  a.dispatchEvent(new MouseEvent("click"));
}
</script>
