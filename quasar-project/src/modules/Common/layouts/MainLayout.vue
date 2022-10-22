<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header -->
    <q-header elevated>
      <q-toolbar class="top-bar">
        <!-- Logo -->
        <q-img
          v-if="$q.dark.isActive"
          src="~assets/img/favicon-96x96_standard.png"
          width="22px"
          height="22px"
          class="cursor-pointer"
          @click="handleTitleClick"
        ></q-img>
        <q-img
          v-else
          src="~assets/img/favicon-96x96_nord8.png"
          width="22px"
          height="22px"
          class="cursor-pointer"
          @click="handleTitleClick"
        ></q-img>

        <!-- Title -->
        <q-toolbar-title
          class="text-input-primary text-uppercase text-weight-light text-h6 q-pl-md"
        >
          <div
            style="cursor: pointer; width: fit-content"
            @click="handleTitleClick"
          >
            Burch Ventures
          </div>
        </q-toolbar-title>

        <!-- Light/Dark Toggle -->
        <q-btn
          flat
          dense
          round
          icon="mdi-theme-light-dark"
          color="input-primary"
          @click="$q.dark.toggle"
        ></q-btn>
        <q-separator vertical inset color="input-primary" class="q-mx-sm" />

        <!-- Menu -->
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          color="input-primary"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <!-- Navigation Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="prominence-2 text-prominence-2"
      side="right"
    >
      <NavigationList></NavigationList>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import NavigationList from "src/modules/Common/components/NavigationList.vue";

import { useRouter } from "vue-router";
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const router = useRouter();

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function handleTitleClick() {
  router.push({ name: "Home" });
}
</script>
