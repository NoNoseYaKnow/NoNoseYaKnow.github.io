<template>
  <q-list class="text-body1">
    <!-- Home -->
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

    <!-- About Me -->
    <q-item
      v-ripple
      :to="{ name: 'About' }"
      exact
      active-class="active-link"
      clickable
    >
      <q-item-section avatar>
        <q-icon name="mdi-account-tie"></q-icon>
      </q-item-section>
      <q-item-section>About Me</q-item-section>
    </q-item>

    <!-- Nutralyz -->
    <q-expansion-item
      label="Nutralyz"
      default-opened
      header-class="text-weight-bold"
    >
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
        <NavigationItem
          label="Development"
          icon="mdi-application-braces-outline"
          :to="{ name: 'NutralyzSpecs' }"
        ></NavigationItem>
      </q-list>
    </q-expansion-item>

    <!-- Inventory Assistant -->
    <q-expansion-item
      label="Inventory Assistant"
      default-opened
      header-class="text-weight-bold"
    >
      <q-list dense class="text-body1">
        <NavigationItem
          label="Showcase"
          icon="mdi-projector-screen-outline"
          :to="{ name: 'InventoryShowcase' }"
        ></NavigationItem>
        <NavigationItem
          label="Development"
          icon="mdi-application-braces-outline"
          :to="{ name: 'InventorySpecs' }"
        ></NavigationItem>
      </q-list>
    </q-expansion-item>
  </q-list>
</template>

<script setup lang="ts">
import NavigationItem from "src/modules/Common/components/NavigationItem.vue";
</script>

<style></style>
