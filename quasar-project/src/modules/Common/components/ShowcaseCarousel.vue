<template>
  <q-carousel
    v-model="slide"
    animated
    arrows
    infinite
    style="height: 85vh; max-height: 900px"
    :style="wideShots ? 'height: 80vh; max-height: 800px' : ''"
    class="transparent"
    control-color="input-primary"
    control-type="push"
  >
    <q-carousel-slide
      v-for="(photo, index) in photos"
      :key="index"
      :name="index"
      style="padding: 4px 0px"
    >
      <div class="fit row justify-center items-center q-pb-sm">
        <q-img
          :ref="!index ? 'first' : ''"
          :src="photo"
          :class="
            wideShots ? 'showcase-screenshot-wide' : 'showcase-screenshot'
          "
          fit="contain"
          class="rounded-borders-20 shadow-2"
        ></q-img>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from "vue";

export interface ShowcaseCarouselProps {
  photos: Array<string>;
  wideShots?: boolean;
}
withDefaults(defineProps<ShowcaseCarouselProps>(), {
  photos: () => [],
  wideShots: false,
});

const slide = ref(0);
</script>

<style></style>
