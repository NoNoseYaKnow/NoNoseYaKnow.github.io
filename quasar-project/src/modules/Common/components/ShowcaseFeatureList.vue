<template>
  <q-card
    class="prominence-3 text-prominence-3 shadow-2 rounded-borders-10"
    style="width: 84vw; max-width: 1000px"
  >
    <!-- Title -->
    <q-card-section
      class="text-h5 text-weight-bold q-pb-xs"
      style="text-decoration: underline"
    >
      {{ title }}
    </q-card-section>

    <!-- Features -->
    <q-card-section>
      <ShowcaseFeatureSection
        v-for="(feature, index) in features"
        :key="index"
        :feature="feature"
      ></ShowcaseFeatureSection>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ShowcaseFeature } from "src/modules/Common/components/ShowcaseFeatureSection.vue";
import ShowcaseFeatureSection from "src/modules/Common/components/ShowcaseFeatureSection.vue";

export interface ShowcaseFeatureListProps {
  title?: string;
  features: ShowcaseFeature[];
}
withDefaults(defineProps<ShowcaseFeatureListProps>(), {
  title: "Features & Highlights",
});
</script>

<style></style>
