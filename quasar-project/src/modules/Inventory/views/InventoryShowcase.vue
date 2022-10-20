<template>
  <q-layout class="gradient-prominence-1">
    <div class="q-px-sm q-pt-lg row full-width justify-center">
      <q-img
        class="rounded-borders-10 shadow-2"
        src="~assets/img/invAssistant/feature-graphic.png"
        fit="contain"
        style="max-width: 800px"
      ></q-img>
    </div>
    <!-- Screenshots -->
    <ShowcaseCarousel :photos="photos" wide-shots></ShowcaseCarousel>
  </q-layout>
</template>

<script setup lang="ts">
import ShowcaseCarousel from "src/modules/Common/components/ShowcaseCarousel.vue";

const photos = [
  "src/assets/img/invAssistant/screen9.png",
  "src/assets/img/invAssistant/screen1.png",
  "src/assets/img/invAssistant/screen2.png",
  "src/assets/img/invAssistant/screen3.png",
  "src/assets/img/invAssistant/screen4.png",
  "src/assets/img/invAssistant/screen5.png",
  "src/assets/img/invAssistant/screen6.png",
  "src/assets/img/invAssistant/screen7.png",
];
</script>

<style></style>
