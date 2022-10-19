<template>
  <q-expansion-item
    :icon="icon"
    :label="label"
    class="prominence-3 full-width text-prominence-3 rounded-borders-30 shadow-1 q-mx-md q-mb-lg overflow-hidden"
    style="max-width: 1200px"
  >
    <div class="q-px-sm q-pt-sm q-pb-xs row justify-center">
      <slot></slot>
    </div>
  </q-expansion-item>
</template>

<script setup lang="ts">
export interface PolicyExpanderProps {
  icon?: string;
  label?: string;
}
withDefaults(defineProps<PolicyExpanderProps>(), {
  icon: "",
  label: "",
});
</script>

<style></style>
