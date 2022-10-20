<template>
  <q-layout class="gradient-prominence-1">
    <!-- Feature Graphic -->
    <div class="q-px-sm q-pt-lg q-pb-md row full-width justify-center">
      <q-img
        class="rounded-borders-10 shadow-2"
        src="~assets/img/nutralyz/feature-graphic.png"
        fit="contain"
        style="width: 84vw; max-width: 800px"
      ></q-img>
    </div>

    <!-- Screenshots -->
    <ShowcaseCarousel :photos="photos"></ShowcaseCarousel>

    <!-- Store Links -->
    <div class="row justify-center items-center q-pt-sm">
      <q-img
        v-if="false"
        src="src/assets/img/app-store-badge.svg"
        fit="contain"
        style="max-width: 250px; max-height: 76px; cursor: pointer"
        @click="handleAppleClick"
      ></q-img>
      <q-img
        src="src/assets/img/google-play-badge.png"
        fit="contain"
        style="max-width: 300px; cursor: pointer"
        @click="handleGoogleClick"
      ></q-img>
    </div>

    <!-- Legal -->
    <div class="row justify-start text-subtitle text-prominence-3 q-px-sm">
      Google Play and the Google Play logo are trademarks of Google LLC
    </div>
  </q-layout>
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
