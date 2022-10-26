<template>
  <q-layout class="gradient-prominence-1">
    <!-- Feature Graphic -->
    <div class="q-px-sm q-pt-lg q-pb-md row full-width justify-center">
      <q-img
        class="rounded-borders-10 shadow-2"
        src="~assets/img/nutralyz/feature-graphic.png"
        fit="contain"
        style="width: 84vw; max-width: 800px"
        @click="handleFeatureGraphicClick"
      ></q-img>
    </div>

    <!-- Statement -->
    <div class="q-px-sm q-pt-md q-pb-md row full-width justify-center">
      <ShowcaseStatement>
        Empowering users to take charge of their mental and physical health by
        gaining the insights needed to improve their dietary habits!
      </ShowcaseStatement>
    </div>

    <!-- Screenshots -->
    <NutralyzCarousel></NutralyzCarousel>

    <!-- Store Links -->
    <div class="row justify-center items-center q-pt-sm">
      <q-img
        src="~assets/img/app-store-badge.svg"
        fit="contain"
        style="max-width: 250px; max-height: 76px; cursor: pointer"
        @click="handleAppleClick"
      ></q-img>
      <q-img
        src="~assets/img/google-play-badge.png"
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
import NutralyzCarousel from "src/modules/Nutralyz/components/NutralyzCarousel.vue";
import ShowcaseStatement from "src/modules/Common/components/ShowcaseStatement.vue";

import { useQuasar } from "quasar";

const $q = useQuasar();

function handleAppleClick(): void {
  window.open("https://apps.apple.com/app/id6443520011", "_blank");
}

function handleGoogleClick(): void {
  window.open(
    "https://play.google.com/store/apps/details?id=com.nutralyz",
    "_blank",
  );
}

function handleFeatureGraphicClick() {
  if ($q.platform.is.ios) {
    handleAppleClick();
  } else if ($q.platform.is.android) {
    handleGoogleClick();
  }
}
</script>

<style></style>
