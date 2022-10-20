<template>
  <q-card
    class="prominence-2 text-prominence-2 shadow-2 rounded-borders-10"
    style="width: 84vw; max-width: 800px"
  >
    <q-card-section class="text-h5 text-weight-bold">
      Frequently Asked Questions
    </q-card-section>
    <q-card-section class="no-padding">
      <q-separator></q-separator>
      <q-list separator>
        <q-expansion-item
          v-for="(faq, index) in faqs"
          :key="index"
          :label="faq.question"
          header-class="text-body1 text-weight-bold"
          class="overflow-hidden"
        >
          <div
            class="text-body1 prominence-3 text-prominence-3 q-px-md q-py-sm"
          >
            {{ faq.answer }}
          </div>
        </q-expansion-item>
      </q-list>
      <q-separator></q-separator>
    </q-card-section>
    <q-card-section class="q-pa-xs"> </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: "What is Nutralyz?",
    answer: `Nutralyz is a mobile application that helps you track your daily food/water 
    intake, mood, and exercise level. It is also a powerful tool for developing 
    meal plans and comparing nutritional values between foods or meal plans`,
  },
  {
    question: "How do I use Nutralyz?",
    answer: `To use Nutralyz, you must create an account when first opening the app. 
    Once you create your account, you can start tracking your daily food and 
    health. You can also create personalized nutrition targets based on your body and 
    goals, and develop a meal plan based on your nutrition targets.`,
  },
  {
    question: "Where does the nutritional data come from?",
    answer: `The nutritional data for foods & recipes comes from Edamam's food database.
    The daily nutritional values are calculated based on the nutritional values for a 
    2000 calorie per day diet as laid out by the US FDA.`,
  },
  {
    question: "Can I request a new feature?",
    answer: `Yes! You can request a new feature by emailing feedback@nutralyz.com. I 
    will review your request and get back to you as soon as possible.`,
  },
];
</script>

<style></style>
