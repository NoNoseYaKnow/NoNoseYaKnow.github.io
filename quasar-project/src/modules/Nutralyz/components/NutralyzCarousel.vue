<template>
  <ShowcaseCarousel>
    <ShowcaseSlide :name="0">
      <q-img
        src="~assets/img/nutralyz/screen2.png"
        class="rounded-borders-20 shadow-2 showcase-screenshot"
        fit="contain"
      />
    </ShowcaseSlide>
    <ShowcaseSlide :name="1">
      <q-img
        src="~assets/img/nutralyz/screen3.png"
        class="rounded-borders-20 shadow-2 showcase-screenshot"
        fit="contain"
      />
    </ShowcaseSlide>
    <ShowcaseSlide :name="2">
      <q-img
        src="~assets/img/nutralyz/screen4.png"
        class="rounded-borders-20 shadow-2 showcase-screenshot"
        fit="contain"
      />
    </ShowcaseSlide>
    <ShowcaseSlide :name="3">
      <q-img
        src="~assets/img/nutralyz/screen1.png"
        class="rounded-borders-20 shadow-2 showcase-screenshot"
        fit="contain"
      />
    </ShowcaseSlide>
    <ShowcaseSlide :name="4">
      <q-img
        src="~assets/img/nutralyz/screen5.png"
        class="rounded-borders-20 shadow-2 showcase-screenshot"
        fit="contain"
      />
    </ShowcaseSlide>
    <ShowcaseSlide :name="5">
      <q-img
        src="~assets/img/nutralyz/screen6.png"
        class="rounded-borders-20 shadow-2 showcase-screenshot"
        fit="contain"
      />
    </ShowcaseSlide>
    <ShowcaseSlide :name="6">
      <q-img
        src="~assets/img/nutralyz/screen7.png"
        class="rounded-borders-20 shadow-2 showcase-screenshot"
        fit="contain"
      />
    </ShowcaseSlide>
    <ShowcaseSlide :name="7">
      <q-img
        src="~assets/img/nutralyz/screen8.png"
        class="rounded-borders-20 shadow-2 showcase-screenshot"
        fit="contain"
      />
    </ShowcaseSlide>
  </ShowcaseCarousel>
</template>

<script setup lang="ts">
import ShowcaseCarousel from "src/modules/Common/components/ShowcaseCarousel.vue";
import ShowcaseSlide from "src/modules/Common/components/ShowcaseSlide.vue";
</script>

<style></style>
