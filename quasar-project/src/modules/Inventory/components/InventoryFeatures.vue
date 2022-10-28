<template>
  <ShowcaseFeatureList :features="inventoryFeatures"></ShowcaseFeatureList>
</template>

<script setup lang="ts">
import ShowcaseFeatureList from "src/modules/Common/components/ShowcaseFeatureList.vue";

import { ShowcaseFeature } from "src/modules/Common/components/ShowcaseFeatureSection.vue";

const inventoryFeatures: ShowcaseFeature[] = [
  {
    title: "Job Tracking",
    highlights: [
      "Keep track of all company jobs on a daily basis, with job number, address, sale price, and job details",
      "Technicians can view jobs assigned to themselves, while inventory or admin employees can see all jobs",
      "Filter jobs by status, technician, or date range",
    ],
  },
];
</script>

<style></style>
