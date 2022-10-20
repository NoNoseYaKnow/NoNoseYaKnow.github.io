<template>
  <q-carousel-slide :name="name" style="padding: 4px 0px">
    <div class="fit row justify-center items-center q-pb-sm">
      <slot></slot>
    </div>
  </q-carousel-slide>
</template>

<script setup lang="ts">
export interface ShowcaseSlideProps {
  name: number;
}

withDefaults(defineProps<ShowcaseSlideProps>(), {
  name: 0,
});
</script>

<style></style>
