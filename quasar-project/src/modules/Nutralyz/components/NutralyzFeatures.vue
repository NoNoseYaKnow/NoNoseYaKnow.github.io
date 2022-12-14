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
  {
    title: "Custom Supplements",
    highlights: [
      "Create custom supplements to track the nutrients you take in supplement form",
      "Supplements can be added to your daily log or meal plans just like foods or recipes",
      "Supplements can be linked to a barcode for quick scanning",
      "Any nutrient or ingredient can be added to a supplement, including custom ones",
      "Custom nutrients/ingredients can have a specific daily goal set for them as well, great for tracking caffeine or nootropics",
    ],
  },
  {
    title: "Personalized Goals",
    highlights: [
      "Use the default nutrient daily values from a 2000 calorie diet, or set your own goals",
      "Daily goals can be set for any nutrient, including custom ones",
      "View the macro percentages for your daily goals as you modify them in real-time",
    ],
  },
  {
    title: "Calorie Calculator",
    highlights: [
      "Instead of manually setting nutrient goals, the calorie calculator can be used to determine a target daily caloric goal",
      "The rest of the nutrient goals can be automatically adjusted based on your daily caloric goal if desired, or tweaked individually",
      "Caloric goal calculated using your sex, age, height, weight, activity level, and weight loss/gain desired",
    ],
  },
  {
    title: "Dark/Light Mode",
    highlights: [
      "Toggle between light and dark mode to suit your preferences",
      "Dark and light themes based on the elegant Nord color palette",
    ],
  },
  {
    title: "Food Item Analysis",
    highlights: [
      "Swipe right on any food/supplement/recipe across the app to begin analyzing it",
      "See a breakdown of the nutrients in the food, including a breakdown of the macronutrients and micronutrients",
      "Quantity and measurements can be adjusted to see how the nutrient breakdown changes",
      "Accessible from the analysis menu are: History, Comparison, and Substitution",
    ],
  },
  {
    title: "Food Item History",
    highlights: [
      "From the analysis screen, the history of a food item can be viewed",
      "See the dates the food item was logged, the quantity and measurements used, and the meal it was logged to",
      "See a summary of any meal plans the food item is included in, including what meal it is in the plan and the specific quantity and measurement of the food",
    ],
  },
  {
    title: "Food Item Comparison",
    highlights: [
      "Comparison can be triggered from the analysis screen of any food item",
      "Compare with any other food item in the database, or any custom food or supplement",
      "Find an item to compare with by searching the database or by using the barcode scanner",
      "See a detailed breakdown of the nutrients and macronutrients in both foods, and how they compare to each other",
    ],
  },
  {
    title: "Food Item Substitution",
    highlights: [
      "Substitution can be triggered from the analysis screen of any food item",
      "Substitution suggestions will be generated by finding foods with similar calorie and macronutrient profiles",
      "See a breakdown of the macronutrients in both foods, and how they compare to each other",
      "Substitution suggestions learn user preferences anonymously over time from all users, and will be more accurate the more the feature is used",
    ],
  },
  {
    title: "Cloud Backup",
    highlights: [
      "Pro users can sync their data across all devices with a single account",
      "Daily logs, meal plans, and custom foods/supplements will all be backed up to the cloud",
    ],
  },
  {
    title: "Tutorials & Tips",
    highlights: [
      "Straightforward interactive tutorials built in to the app to help getting started with the main features",
      "Helpful tips for the current page can be triggered as needed from the tutorial list",
    ],
  },
  {
    title: "History Chart",
    highlights: [
      "View a history chart of your daily nutrition, mood, activity level, and water consumption",
      "Select any date range quickly from calendar view, with presets for past week, 2 weeks, month, and year",
      "Select up to three individual nutrients to view on the chart alongside other health trends",
    ],
  },
];
</script>

<style></style>
