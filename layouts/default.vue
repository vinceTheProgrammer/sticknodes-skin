<template>
  <div>
    <VitePwaManifest />
    <TopNavBar v-if="breakpoint.breakpoints.mdAndUp" />
    <BottomNavBar v-else-if="breakpoint.breakpoints.smAndDown" />
    <div class="mb-16 md:mb-0 min-h-screen">
      <slot></slot>
      <TheFooter />
    </div>
    <div
      v-show="showToast"
      :class="`toast toast-start toast-top md:toast-bottom`"
      :style="`transition: opacity 0.3s ease; opacity: ${
        toastVisible ? '100%' : '0%'
      }`"
    >
      <div class="alert alert-success">
        <span>{{ toastText }}</span>
      </div>
    </div>
    <RegistrationModal
      :modal-open="showRegisterDialog"
      @modal-change="(modalOpen: boolean) => (showRegisterDialog = modalOpen)"
    />
  </div>
</template>

<script setup lang="ts">
import { User } from "@firebase/auth";
import { doc, getDoc, onSnapshot } from "@firebase/firestore";
const breakpoint = useBreakpoint();
const user = useCurrentUser();
const toastVisible = ref(false);
const showToast = ref(false);
const toastText = ref("");
const showRegisterDialog = ref(false);
const db = useFirestore();
let tryingRegistration = false;

onMounted(async () => {
  if (user.value) {
    const docRef = doc(db, "users", user.value.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) tryRegistration(user.value);
  }
});

watch(user, (user, prevUser) => {
  if (prevUser && !user) {
    toastText.value = t("f-toast-successful-logout");
    toastVisible.value = true;
    showToast.value = true;
    setTimeout(() => {
      toastVisible.value = false;
      setTimeout(() => {
        showToast.value = false;
      }, 400);
    }, 5000);
  } else if (user) {
    tryRegistration(user);
    toastText.value = t("f-toast-successful-login", 2, {
      named: { user: user.displayName },
    });
    toastVisible.value = true;
    showToast.value = true;
    setTimeout(() => {
      toastVisible.value = false;
      setTimeout(() => {
        showToast.value = false;
      }, 400);
    }, 5000);
  }
});

watch(showRegisterDialog, async (value) => {
  if (value === false) {
    const uid = user.value?.uid;
    if (uid) {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) signOut();
      else {
        toastText.value = t("registration-completed");
        toastVisible.value = true;
        showToast.value = true;
        setTimeout(() => {
          toastVisible.value = false;
          setTimeout(() => {
            showToast.value = false;
          }, 400);
        }, 5000);
      }
    }
  }
});

async function tryRegistration(theUser: User) {
  if (tryingRegistration || showRegisterDialog.value) return;
  tryingRegistration = true;
  const docRef = doc(db, "users", theUser.uid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) showRegisterDialog.value = true;
  const unsub = onSnapshot(docRef, (theDoc) => {
    if (theDoc.exists()) {
      showRegisterDialog.value = false;
      unsub();
    }
  });
  tryingRegistration = false;
}
</script>
