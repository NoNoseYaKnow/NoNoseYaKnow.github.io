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
      "Nutrient totals represented as a percentage of daily goals, including a total progress bar",
      "Calendar navigation to quickly view past days' logs or preview your food planned for tomorrow",
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
  {
    title: "Meal Planning",
    highlights: [
      "Creation of weekly meal plans, containing daily meal plans and individual meals",
      "Nutrition data for meal plans updates in real-time with every change to assist in fine tuning your plans",
      "Meal plans can be activated and foods will show up in your daily log for the days they are scheduled, ready to be instantly logged",
      "Meal plans can be cloned to quickly create new plans with similar foods",
    ],
  },
  {
    title: "Recipe Database",
    highlights: [
      "Over 2.3 million recipes from 500+ top food blogs and websites, ready to be added to meal plans",
      "Full nutritional information for each recipe, including a breakdown of calories, macronutrients, micronutrients, and ingredient list",
      "Browse recipes by name, category, or diet/allergy filters",
    ],
  },
];
</script>

<style></style>
