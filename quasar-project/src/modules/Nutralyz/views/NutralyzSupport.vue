<template>
  <q-layout class="gradient-prominence-1">
    <!-- Support Email -->
    <div class="q-px-sm q-pt-lg q-pb-md row full-width justify-center">
      <DirectSupport></DirectSupport>
    </div>

    <!-- FAQ -->
    <div class="q-px-sm q-pt-lg q-pb-md row full-width justify-center">
      <NutralyzFaq></NutralyzFaq>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import NutralyzFaq from "src/modules/Nutralyz/components/NutralyzFaq.vue";
import DirectSupport from "src/modules/Nutralyz/components/DirectSupport.vue";
</script>

<style></style>
