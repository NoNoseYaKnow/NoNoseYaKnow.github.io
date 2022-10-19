<template>
  <q-item v-ripple clickable active-class="active-link">
    <!-- Icon -->
    <q-item-section avatar class="q-pl-sm">
      <q-icon :name="icon"></q-icon>
    </q-item-section>
    <!-- Label -->
    <q-item-section>{{ label }}</q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface NavigationItemProps {
  icon?: string;
  label?: string;
}
withDefaults(defineProps<NavigationItemProps>(), {
  icon: "",
  label: "",
});
</script>

<style></style>
