<template>
  <q-layout class="gradient-prominence-1">
    <!-- Feature Graphic -->
    <div class="q-px-sm q-pt-lg q-pb-md row full-width justify-center">
      <q-img
        class="rounded-borders-10 shadow-2"
        src="~assets/img/invAssistant/feature-graphic.png"
        fit="contain"
        style="max-width: 800px"
      ></q-img>
    </div>

    <!-- Statement -->
    <div class="q-px-sm q-pt-lg q-pb-md row full-width justify-center">
      <ShowcaseStatement>
        Enabling fine-tuned inventory tracking and generation of truly
        profit-based employee commission payments!
      </ShowcaseStatement>
    </div>

    <!-- Screenshots -->
    <InventoryCarousel></InventoryCarousel>
  </q-layout>
</template>

<script setup lang="ts">
import InventoryCarousel from "src/modules/Inventory/components/InventoryCarousel.vue";
import ShowcaseStatement from "src/modules/Common/components/ShowcaseStatement.vue";
</script>

<style></style>
