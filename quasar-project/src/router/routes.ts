import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("src/modules/Common/layouts/MainLayout.vue"),
    children: [
      /* Burch Ventures Routes */
      {
        path: "",
        component: () => import("src/modules/Common/views/HomeIndex.vue"),
        name: "Home",
      },
      {
        path: "about",
        component: () => import("src/modules/Common/views/AboutMe.vue"),
        name: "About",
      },

      /* Nutralyz Routes */
      {
        path: "nutralyz/showcase",
        component: () =>
          import("src/modules/Nutralyz/views/NutralyzShowcase.vue"),
        name: "NutralyzShowcase",
      },
      {
        path: "nutralyz/support",
        component: () =>
          import("src/modules/Nutralyz/views/NutralyzSupport.vue"),
        name: "NutralyzSupport",
      },
      {
        path: "nutralyz/terms",
        component: () => import("src/modules/Nutralyz/views/NutralyzTerms.vue"),
        name: "NutralyzTerms",
      },
      {
        path: "nutralyz/tech",
        component: () => import("src/modules/Nutralyz/views/NutralyzSpecs.vue"),
        name: "NutralyzSpecs",
      },

      /* Inventory Assistant Routes */
      {
        path: "inventory/showcase",
        component: () =>
          import("src/modules/Inventory/views/InventoryShowcase.vue"),
        name: "InventoryShowcase",
      },
      {
        path: "inventory/tech",
        component: () =>
          import("src/modules/Inventory/views/InventorySpecs.vue"),
        name: "InventorySpecs",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
