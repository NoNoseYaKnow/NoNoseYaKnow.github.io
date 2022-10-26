<template>
  <q-layout class="gradient-prominence-1">
    <!-- Header -->
    <div
      class="text-h2 text-center text-weight-light q-pt-md q-pb-xs full-width"
    >
      I Build Apps
    </div>
    <div class="text-h6 text-center q-py-xs q-px-md full-width">
      ~ Check out my work below! ~
    </div>

    <!-- Nutralyz -->
    <div class="q-px-sm q-py-md row full-width justify-center">
      <q-img
        class="rounded-borders-10 shadow-2 cursor-pointer"
        src="~assets/img/nutralyz/feature-graphic.png"
        fit="contain"
        style="max-width: 800px"
        @click="handleNutralyzClick"
      ></q-img>
    </div>

    <!-- Inventory Assistant -->
    <div class="q-px-sm q-py-md row full-width justify-center">
      <q-img
        class="rounded-borders-10 shadow-2 cursor-pointer"
        src="~assets/img/invAssistant/feature-graphic.png"
        fit="contain"
        style="max-width: 800px"
        @click="handleInventoryClick"
      ></q-img>
    </div>

    <!-- Contact -->
    <div class="q-px-sm q-py-md row full-width justify-center fixed-bottom">
      <q-btn
        push
        icon="mdi-email"
        label="Business Inquiries Welcome"
        color="input-primary"
        href="mailto:josh@burchventures.com?subject=Business%20Inquiry"
      ></q-btn>
    </div>
    <div style="height: 10vh"></div>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function handleNutralyzClick(): void {
  router.push({ name: "NutralyzShowcase" });
}

function handleInventoryClick(): void {
  router.push({ name: "InventoryShowcase" });
}
</script>

<style></style>
