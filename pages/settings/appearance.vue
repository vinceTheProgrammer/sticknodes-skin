<template>
  <div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-1 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">{{ useCapitalize($t("theme")) }}</h1>
        <select data-choose-theme class="select select-bordered">
          <option value="">Default</option>
          <option value="snsDark">Dark</option>
          <option value="snsLight">Light</option>
          <option value="acid">Acid</option>
          <option value="aqua">Aqua</option>
          <option value="autumn">Autumn</option>
          <option value="black">Black</option>
          <option value="bumblebee">Bumblebee</option>
          <option value="business">Business</option>
          <option value="coffee">Coffee</option>
          <option value="corporate">Corporate</option>
          <option value="cmyk">Cmyk</option>
          <option value="cupcake">Cupcake</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="dracula">Dracula</option>
          <option value="emerald">Emerald</option>
          <option value="fantasy">Fantasy</option>
          <option value="forest">Forest</option>
          <option value="garden">Garden</option>
          <option value="halloween">Halloween</option>
          <option value="lemonade">Lemonade</option>
          <option value="lofi">Lofi</option>
          <option value="luxury">Luxury</option>
          <option value="night">Night</option>
          <option value="pastel">Pastel</option>
          <option value="synthwave">Synthwave</option>
          <option value="valentine">Valentine</option>
          <option value="wireframe">Wireframe</option>
          <option value="winter">Winter</option>
        </select>
      </div>
    </div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-1 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">{{ useCapitalize($t("language")) }}</h1>
        <select
          v-model="currentLang"
          class="select select-bordered"
          @change="changeLanguage(currentLang)"
        >
          <option
            v-for="_locale in availableLocales"
            :key="_locale.code"
            :value="_locale.code"
          >
            {{ _locale.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";
import { themeChange } from "theme-change";

const { locale, locales, setLocale } = useI18n();
// const switchLocalePath = useSwitchLocalePath();

const currentLang = ref(locale.value);

const availableLocales = computed(() => {
  return locales.value.filter(
    (item): item is LocaleObject => typeof item !== "string"
  );
});

function changeLanguage(lang: string) {
  setLocale(lang);
}

onMounted(() => {
  themeChange(false);
});
</script>
