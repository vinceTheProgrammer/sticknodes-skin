<template>
  <dialog
    :class="`modal modal-bottom md:modal-middle ${
      modalOpen ? 'modal-open' : ''
    }`"
  >
    <div class="modal-box w-full">
      <h2 class="font-bold text-lg mb-5">
        {{ useStartCase($t("finish-registration")) }}
      </h2>
      <form @submit="onSubmit">
        <label class="label">
          <span
            :class="`label-text ${
              errors.username !== undefined ? 'text-error' : ''
            }`"
            >Username</span
          >
          <span
            :class="`label-text-alt ${
              errors.username !== undefined ? 'text-error' : ''
            }`"
            >required</span
          >
        </label>
        <input
          v-bind="username"
          name="username"
          type="text"
          placeholder="Username"
          autocomplete="off"
          :class="`input input-bordered
        w-full mb-2 ${errors.username !== undefined ? 'border-error' : ''}`"
        />
        <label class="label">
          <span class="label-text-alt text-error">{{ errors.username }}</span>
        </label>

        <label class="label">
          <span
            :class="`label-text ${
              errors.displayname !== undefined ? 'text-error' : ''
            }`"
            >Display Name</span
          >
        </label>
        <input
          v-bind="displayname"
          name="displayname"
          type="text"
          placeholder="Display Name"
          autocomplete="off"
          :class="`input input-bordered w-full mb-2 ${
            errors.displayname !== undefined ? 'border-error' : ''
          }`"
        />
        <label class="label">
          <span class="label-text-alt text-error">{{
            errors.displayname
          }}</span>
        </label>

        <label class="label">
          <span
            :class="`label-text ${
              errors.bio !== undefined ? 'text-error' : ''
            }`"
            >Bio</span
          >
          <span
            :class="`label-text-alt ${
              errors.bio !== undefined ? 'text-error' : ''
            }`"
            >{{ values.bio ? values.bio.length || 0 : 0 }}/512</span
          >
        </label>
        <textarea
          v-bind="bio"
          name="bio"
          :class="`textarea textarea-bordered w-full mb-2 ${
            errors.bio !== undefined ? 'border-error' : ''
          }`"
          autocomplete="off"
          placeholder="Bio"
        ></textarea>
        <label class="label">
          <span class="label-text-alt text-error">{{ errors.bio }}</span>
        </label>

        <button
          type="submit"
          :disabled="loading || isSubmitting"
          class="btn w-full"
          @mouseover="handleHover"
        >
          {{ useCapitalize($t("finish")) }}
        </button>
      </form>
      <!-- <pre>values: {{ values }}</pre> -->
    </div>
    <form method="dialog" class="modal-backdrop" @submit="null">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { collection, getDocs, where, query } from "firebase/firestore";
import { useForm } from "vee-validate";
const db = useFirestore();
const loading = ref(false);

const usernameRules = [
  (v: string | any[]) => v.length >= 1 || "Minimum username length is 1.",
  (v: string | any[]) => v.length <= 32 || "Maximum username length is 32.",
  (v: string) =>
    v.slice(0, 1).search(/[a-z0-9]/) > -1 ||
    "Must begin with a lowercase alphanumeric character. (a-z or 0-9)",
  (v: string) =>
    v.slice(-1).search(/[a-z0-9]/) > -1 ||
    "Must end with a lowercase alphanumeric character. (a-z or 0-9)",
  (v: string) =>
    v.search(/--/) === -1 || "Must not have two consecutive hyphens (--).",
  (v: string) =>
    v.search(/__/) === -1 || "Must not have two consecutive underscores (__).",
  (v: string) =>
    v.search(/_-/) === -1 ||
    "Must not have a hyphen next to an underscore (_-).",
  (v: string) =>
    v.search(/-_/) === -1 ||
    "Must not have a hyphen next to an underscore (-_).",
  (v: string) =>
    v.search(/[^a-z0-9-_]/) === -1 ||
    "Must contain only lowercase alphanumeric characters, hyphens, and underscores. (a-z, 0-9, -, or _) [no spaces allowed]",
  async (v: string) => {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("username", "==", v));
    loading.value = true;
    const querySnapshot = await getDocs(q);
    loading.value = false;
    if (querySnapshot.size === 0) return true;
    else return "Username already exists.";
  },
];
const displaynameRules = [
  (v: string | any[]) => v.length >= 1 || "Minimum display name length is 1.",
  (v: string | any[]) => v.length <= 32 || "Maximum display name length is 32.",
];

const bioRules = [
  (v: string | any[]) => v.length <= 512 || "Maximum bio length is 512.",
];

async function tryAllRules(
  val: any,
  rules: string | any[]
): Promise<string | true> {
  if (val === undefined) return true;
  for (let i = 0; i < rules.length; i++) {
    const result = await rules[i](val);
    if (typeof result === "string") {
      return result;
    }
  }
  return true;
}

const { values, defineInputBinds, handleSubmit, errors, isSubmitting } =
  useForm({
    validationSchema: {
      username: async (val: any) => {
        if (val === undefined) return "Username is required";
        return await tryAllRules(val, usernameRules);
      },
      displayname: async (val: any) => await tryAllRules(val, displaynameRules),
      bio: async (val: any) => await tryAllRules(val, bioRules),
    },
  });
const username = defineInputBinds("username");
const displayname = defineInputBinds("displayname");
const bio = defineInputBinds("bio");

const props = defineProps({
  modalOpen: {
    type: Boolean,
    required: true,
  },
});
const { modalOpen } = toRefs(props);

// const emit = defineEmits(["modal-change"]);
// const sendModalChangeEvent = () => emit("modal-change", false); TODO: figure out why it's closing the model after registration without me needing to manually send the change event

const onSubmit = handleSubmit(async (_values) => {
  await registerUser({
    username: _values.username,
    displayname: _values.displayname || "",
    bio: _values.bio || "",
  }).catch((err) => {
    console.log(err);
  });
});

function handleHover(e: Event) {
  const el = e.target;
  if (el && el instanceof HTMLButtonElement) el.focus();
}
</script>
