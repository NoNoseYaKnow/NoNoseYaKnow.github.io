<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="top-bar">
        <q-toolbar-title class="text-input-primary text-uppercase"
          >Burch Ventures</q-toolbar-title
        >
        <q-btn
          flat
          dense
          round
          icon="mdi-theme-light-dark"
          color="input-primary"
          @click="$q.dark.toggle"
        ></q-btn>
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

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
import EssentialLink, {
  EssentialLinkProps,
} from "components/EssentialLink.vue";

const $q = useQuasar();

const essentialLinks: EssentialLinkProps[] = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "mdi-school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
