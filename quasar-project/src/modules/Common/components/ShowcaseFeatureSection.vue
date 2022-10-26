<template>
  <div>
    <!-- Title -->
    <div class="row full-width text-h6 text-weight-bold">
      {{ feature.title }}
    </div>

    <!-- Subtitle -->
    <div v-if="false" class="row full-width text-body1 text-weight-bold">
      {{ feature.subtitle }}
    </div>

    <!-- Highlights -->
    <div class="row full-width text-body1 rounded-borders-10">
      <ul style="margin-top: 4px; margin-bottom: 16px; padding-left: 28px">
        <li
          v-for="(highlight, index) in feature.highlights"
          :key="index"
          style="padding-bottom: 12px"
        >
          {{ highlight }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface ShowcaseFeature {
  title?: string;
  subtitle?: string;
  highlights?: string[];
}
export interface ShowcaseFeatureSectionProps {
  feature: ShowcaseFeature;
}
withDefaults(defineProps<ShowcaseFeatureSectionProps>(), {
  feature: () => ({
    title: "Feature Title",
    subtitle: "",
    highlights: ["Feature Highlight 1", "Feature Highlight 2"],
  }),
});
</script>

<style></style>
