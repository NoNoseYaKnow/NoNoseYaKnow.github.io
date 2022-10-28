<template>
  <ShowcaseFeatureList :features="inventoryFeatures"></ShowcaseFeatureList>
</template>

<script setup lang="ts">
import ShowcaseFeatureList from "src/modules/Common/components/ShowcaseFeatureList.vue";

import { ShowcaseFeature } from "src/modules/Common/components/ShowcaseFeatureSection.vue";

const inventoryFeatures: ShowcaseFeature[] = [
  {
    title: "",
    highlights: [""],
  },
];
</script>

<style></style>
