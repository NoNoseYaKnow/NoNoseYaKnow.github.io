<template>
  <q-layout class="gradient-prominence-1">
    <!-- Feature Graphic -->
    <div class="q-px-sm q-pt-lg row full-width justify-center">
      <q-img
        class="rounded-borders-10 shadow-2"
        src="~assets/img/invAssistant/feature-graphic.png"
        fit="contain"
        style="max-width: 800px"
      ></q-img>
    </div>

    <!-- Screenshots -->
    <InventoryCarousel></InventoryCarousel>
  </q-layout>
</template>

<script setup lang="ts">
import InventoryCarousel from "src/modules/Inventory/components/InventoryCarousel.vue";
</script>

<style></style>
