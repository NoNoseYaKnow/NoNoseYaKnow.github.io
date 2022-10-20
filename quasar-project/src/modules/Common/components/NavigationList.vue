<template>
  <q-list class="text-body1">
    <q-item
      v-ripple
      :to="{ name: 'Home' }"
      exact
      active-class="active-link"
      clickable
    >
      <q-item-section avatar>
        <q-icon name="mdi-home-outline"></q-icon>
      </q-item-section>
      <q-item-section>Burch Ventures Home</q-item-section>
    </q-item>

    <!-- Nutralyz -->
    <q-expansion-item label="Nutralyz" default-opened>
      <q-list dense class="text-body1">
        <NavigationItem
          label="Showcase"
          icon="mdi-projector-screen-outline"
          :to="{ name: 'NutralyzShowcase' }"
        ></NavigationItem>
        <NavigationItem
          label="Support"
          icon="mdi-account-question-outline"
          :to="{ name: 'NutralyzSupport' }"
        ></NavigationItem>
        <NavigationItem
          label="Privacy + Terms of Service"
          icon="mdi-text-box-multiple-outline"
          :to="{ name: 'NutralyzTerms' }"
        ></NavigationItem>
        <!--
        <NavigationItem
          label="Technical Specifications"
          icon="mdi-application-braces-outline"
          :to="{ name: 'NutralyzSpecs' }"
        ></NavigationItem>
        -->
      </q-list>
    </q-expansion-item>

    <!-- Inventory Assistant -->
    <q-expansion-item label="Inventory Assistant" default-opened>
      <q-list dense class="q-pl-sm text-body1">
        <NavigationItem
          label="Showcase"
          icon="mdi-projector-screen-outline"
          :to="{ name: 'InventoryShowcase' }"
        ></NavigationItem>
        <!--
        <NavigationItem
          label="Technical Specifications"
          icon="mdi-application-braces-outline"
          :to="{ name: 'InventorySpecs' }"
        ></NavigationItem>
        -->
      </q-list>
    </q-expansion-item>
  </q-list>
</template>

<script setup lang="ts">
import NavigationItem from "src/modules/Common/components/NavigationItem.vue";
</script>

<style></style>
