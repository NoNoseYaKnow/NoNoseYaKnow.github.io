<template>
  <q-carousel
    v-model="slide"
    animated
    arrows
    infinite
    style="height: 95vh; max-height: 900px"
    :style="wideShots ? 'height: 80vh; max-height: 800px' : ''"
    class="transparent"
    control-color="input-primary"
    control-type="push"
  >
    <slot></slot>
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from "vue";

export interface ShowcaseCarouselProps {
  wideShots?: boolean;
}
withDefaults(defineProps<ShowcaseCarouselProps>(), {
  wideShots: false,
});

const slide = ref(0);
</script>

<style></style>
