<template>
  <q-layout class="gradient-prominence-1">
    <div class="full-width row justify-center q-px-md q-pt-lg">
      <!-- Privacy Policy -->
      <PolicyExpander
        v-model="privacyExpanded"
        icon="mdi-shield-account"
        label="Nutralyz Privacy Policy"
      >
        <q-btn
          flat
          color="input-primary"
          style="text-decoration: underline"
          label="Nutralyz Privacy Policy"
          href="https://pages.flycricket.io/nutralyz/privacy.html"
        ></q-btn>
      </PolicyExpander>
    </div>

    <!-- Apple EULA -->
    <div class="full-width row justify-center q-px-md">
      <PolicyExpander
        v-model="appleEulaExpanded"
        icon="mdi-apple"
        label="Apple EULA"
      >
        <q-btn
          flat
          color="input-primary"
          style="text-decoration: underline"
          label="Apple End User License Agreement"
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
        ></q-btn>
      </PolicyExpander>
    </div>

    <!-- Google EULA -->
    <div class="full-width row justify-center q-px-md q-pb-lg">
      <PolicyExpander
        v-model="googleEulaExpanded"
        icon="mdi-google-play"
        label="Google Play EULA"
      >
        <GoogleEula></GoogleEula>
      </PolicyExpander>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import PolicyExpander from "src/modules/Nutralyz/components/PolicyExpander.vue";
import GoogleEula from "src/modules/Nutralyz/components/GoogleEula.vue";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const privacyExpanded = ref(false);
const googleEulaExpanded = ref(false);
const appleEulaExpanded = ref(false);

onMounted(() => {
  const queryPolicy = route.query.policy;
  if (queryPolicy === "privacy") {
    privacyExpanded.value = true;
  } else if (queryPolicy === "google-eula") {
    googleEulaExpanded.value = true;
  } else if (queryPolicy === "apple-eula") {
    appleEulaExpanded.value = true;
  }
});
</script>

<style></style>
