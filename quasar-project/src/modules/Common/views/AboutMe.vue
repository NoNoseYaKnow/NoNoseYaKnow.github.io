<template>
  <q-layout class="gradient-prominence-1">
    <div class="q-px-sm q-pt-lg q-pb-md row full-width justify-center">
      <q-card
        class="prominence-3 text-prominence-3 shadow-2 rounded-borders-10"
        style="width: 84vw; max-width: 1000px"
      >
        <!-- Content -->
        <q-card-section class="profile-container">
          <!-- Picture -->
          <div class="profile-section">
            <div class="text-h5 text-weight-bold">Joshua Burch</div>
            <q-avatar class="shadow-2 q-ma-md" size="130px">
              <img src="~assets/img/gh_profile_pic.jpg" />
            </q-avatar>
          </div>

          <q-separator v-if="$q.screen.gt.sm" vertical></q-separator>
          <div v-else class="full-width horizontal-separator"></div>

          <!-- Specialties -->
          <div class="profile-section text-body1">
            <div class="text-h5 text-weight-bold">Specialties</div>
            <div class="q-pa-xs full-width">
              Languages:
              <span class="text-weight-bold"
                >JavaScript, Python, HTML, CSS</span
              >
            </div>
            <div class="q-pa-sm full-width">
              Frameworks/Libraries:
              <span class="text-weight-bold">Vue, Quasar, Django</span>
            </div>
            <div class="q-pa-sm full-width">
              Other:
              <span class="text-weight-bold">Linux, Neovim</span>
            </div>
          </div>

          <q-separator v-if="$q.screen.gt.sm" vertical></q-separator>
          <div v-else class="full-width horizontal-separator"></div>

          <!-- Contact -->
          <div class="profile-section">
            <div class="text-h5 text-weight-bold">Contact</div>
            <div class="q-pa-sm full-width">
              <q-btn
                push
                no-caps
                icon="mdi-email"
                label="Email"
                color="input-primary"
                class="full-width text-white"
              ></q-btn>
            </div>
            <div class="q-pa-sm full-width">
              <q-btn
                push
                no-caps
                icon="mdi-github"
                label="Github"
                class="full-width text-white"
                style="background-color: #24292e"
              ></q-btn>
            </div>
            <div class="q-pa-sm full-width">
              <q-btn
                push
                no-caps
                icon="mdi-linkedin"
                label="LinkedIn"
                class="full-width text-white"
                style="background-color: #0077b5"
              ></q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";

const $q = useQuasar();
</script>

<style>
.profile-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
}

.profile-section {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
}

.body--light .horizontal-separator {
  height: 1px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.body--dark .horizontal-separator {
  height: 1px;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.28);
}
</style>
