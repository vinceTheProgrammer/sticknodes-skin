<template>
    <div class="flex">
        <button ref="btnLight" data-set-theme="snsLight"></button>
        <button ref="btnDark" data-set-theme="snsDark"></button>
        <label :class="`swap ${isCoolingDown ? 'cursor-not-allowed' : ''}`">
            <input v-model="isChecked" type="checkbox" :disabled="isCoolingDown" />
            <transition name="bounce" mode="out-in">
                <font-awesome-icon :key="new Date().getTime()" :class="`fa-lg ${isChecked ? '' : '-ml-[5px]'}`"
                    :icon="`fa-solid ${isChecked ? 'fa-moon' : 'fa-sun'}`" />
            </transition>
        </label>
    </div>
</template>

<script setup lang="ts">

import { themeChange } from 'theme-change';
const btnLight = ref();
const btnDark = ref();

onMounted(() => {
    themeChange(false);
    const attributeValue = document.documentElement.getAttribute('data-theme');
    if (attributeValue == 'snsLight') isChecked.value = true;
    watch(isChecked, (value) => {
        if (value) btnLight.value.dispatchEvent(new Event("click"));
        if (!value) btnDark.value.dispatchEvent(new Event("click"));
        isCoolingDown.value = true;
        setTimeout(() => {
            isCoolingDown.value = false;
        }, cooldownTime.value);
    });
})

const isChecked = ref(false);
const isCoolingDown = ref(false);
const cooldownTime = ref(1000);
</script>

<style>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}
</style>