<template>
  <q-layout class="gradient-prominence-1"> </q-layout>
</template>

<script setup lang="ts">
import ShowcaseCarousel from "src/modules/Common/components/ShowcaseCarousel.vue";

const photos = [
  "src/assets/img/nutralyz/screen2.png",
  "src/assets/img/nutralyz/screen3.png",
  "src/assets/img/nutralyz/screen4.png",
  "src/assets/img/nutralyz/screen1.png",
  "src/assets/img/nutralyz/screen5.png",
  "src/assets/img/nutralyz/screen6.png",
  "src/assets/img/nutralyz/screen7.png",
  "src/assets/img/nutralyz/screen8.png",
];

function handleAppleClick() {
  window.open("", "_blank");
}

function handleGoogleClick() {
  window.open(
    "https://play.google.com/store/apps/details?id=com.nutralyz",
    "_blank",
  );
}
</script>

<style></style>
