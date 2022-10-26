<template>
  <ShowcaseFeatureList :features="nutralyzFeatures"></ShowcaseFeatureList>
</template>

<script setup lang="ts">
import ShowcaseFeatureList from "src/modules/Common/components/ShowcaseFeatureList.vue";

import { ShowcaseFeature } from "src/modules/Common/components/ShowcaseFeatureSection.vue";

const nutralyzFeatures: ShowcaseFeature[] = [
  {
    title: "Extensive Food Database",
    highlights: [
      "Detailed nutritional information for over 1 million food items, including restaurant and brand items",
      "Search by name, category, ranges of nutrients, or diet/allergy filters",
    ],
  },
  {
    title: "Create Custom Foods",
    highlights: [
      "Any food not in the database can be created and used across the application with ease",
      "Browse through your custom foods sorted by name, creation date, last logged, or quantity of any nutrient",
    ],
  },
  {
    title: "Barcode Scanning",
    highlights: [
      "Scan barcodes to quickly find foods in the database",
      "615,000 unique UPC/Barcodes in the database",
      "If a barcode is not found in the database, a custom food or supplement can be created and linked to that barcode for future scans",
    ],
  },
  {
    title: "Daily Food Log",
    highlights: [
      "Log foods & supplements eaten throughout the day",
      "View daily totals for calories, nutrients, and macronutrients as they update in real-time",
      "Totals represented as a percentage of daily goals, including a total progress bar",
      "Calendar view to quickly navigate to past days or preview your food planned for tomorrow",
      "Users on pro plan can freely edit any past logs if they need to make changes",
    ],
  },
  {
    title: "Daily Health Log",
    highlights: [
      "Rate your mood and give a rough estimate of your level of exercise/activity each day",
      "Track how much water you consume each day, with settings for a custom goal and custom glass & bottle sizes for quick logging",
      "All of these factors can be viewed alongside nutrition in the history chart to see how all of these factors interact in your daily life",
    ],
  },
];
</script>

<style></style>
