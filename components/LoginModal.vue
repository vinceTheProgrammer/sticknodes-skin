<template>
  <dialog
    :class="`modal modal-bottom md:modal-middle ${
      modalOpen ? 'modal-open' : ''
    }`"
  >
    <div
      :class="`modal-box ${breakpoint.breakpoints.smAndDown ? 'w-full' : ''}`"
    >
      <button
        class="btn w-full"
        @click="
          () => {
            signInWithGoogle();
            closeModal();
          }
        "
      >
        <Icon class="self-center -ml-3" name="mdi:google" size="1.5em" />{{
          useCapitalize($t("login-with-google"))
        }}
      </button>
    </div>
    <form method="dialog" class="modal-backdrop" @submit="closeModal()">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
const breakpoint = useBreakpoint();
const props = defineProps({
  modalOpen: {
    type: Boolean,
    required: true,
  },
});
const { modalOpen } = toRefs(props);

const emit = defineEmits(["modal-change"]);
const sendModalChangeEvent = () => emit("modal-change", false);

function closeModal() {
  sendModalChangeEvent();
}
</script>
