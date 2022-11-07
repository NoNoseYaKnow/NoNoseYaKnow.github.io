<template>
  <ShowcaseFeatureList :features="inventoryFeatures"></ShowcaseFeatureList>
</template>

<script setup lang="ts">
import ShowcaseFeatureList from "src/modules/Common/components/ShowcaseFeatureList.vue";

import { ShowcaseFeature } from "src/modules/Common/components/ShowcaseFeatureSection.vue";

const inventoryFeatures: ShowcaseFeature[] = [
  {
    title: "Job Tracking",
    highlights: [
      "Keep track of all company jobs on a daily basis, with job number, address, sale price, and job details",
      "Technicians can view jobs assigned to themselves, while inventory or admin employees can see all jobs",
      "Filter jobs by job number, status, technician, or date range",
    ],
  },
  {
    title: "Receipt Tracking",
    highlights: [
      "Track all receipts from all jobs, by job number, date, store, and amount",
      "Includes a photo of each receipt stored in the cloud",
      "Receipts that cannot be directly linked to a job can be linked to an individual's van",
    ],
  },
  {
    title: "Receipt Scanning",
    highlights: [
      "Utilizing Google Cloud Vision OCR, receipts can be scanned and automatically linked to a job",
      "Scanning also detects the store, total amount of purchase, and job number",
      "Any scanned information can be manually edited if needed",
      "Works for receipts from all main stores utilized by company, including Home Depot, Lowe's, and more",
    ],
  },
  {
    title: "Material Catalogue",
    highlights: [
      "Catalogue of all materials used by company, with price, quantity, and store",
      "Advanced tagging system allows for easy filtering of materials",
      "Managed by inventory or admin employees, viewable by all employees",
    ],
  },
  {
    title: "Material Tracking",
    highlights: [
      "Employees submit list of materials used from van stock on each job",
      "Filter through material catalogue with virtually zero latency via tagging system",
      "Receipt is generated from list of materials used, and is automatically applied to job expenses",
      "List of materials is added to re-stock list for the employee's van",
    ],
  },
  {
    title: "Re-Stock Tracking",
    highlights: [
      "Inventory or admin employees can view all re-stock lists for each employee's van, and mark items as re-stocked",
      "Dashboard shows total amount of materials needed to be re-stocked for each van, and highlights any materials that were marked as high priority",
      "Re-stock lists include store to purchase each material from, and any notes included by the employee who submitted re-stock request",
    ],
  },
  {
    title: "Profit Tracking",
    highlights: [
      "Track profit from each job, and view total company profit for each month",
      "Factors in all expenses from job, including materials, labor, and receipts",
      "Includes receipts that were not directly linked to a job, and receipts that were linked to an individual's van",
    ],
  },
  {
    title: "Commission Calculation",
    highlights: [
      "Calculate commission for each employee based on their profit from jobs on a weekly basis",
      "Commission is calculated based on a percentage of profit after all expenses, and is automatically applied to employee's pay",
      "Percentages of profits are adjusted for each employee based on their level of licensure and weekly total revenue tier",
    ],
  },
  {
    title: "Admin Panel",
    highlights: [
      "Admin panel allows for management of all employees, including adding, editing, and deleting employees",
      "Manage all jobs, company vans, receipts, materials, and re-stock lists",
      "View all profit and commission-related data",
      "Manage all other company settings such as commission rates, employee tiers, and more",
    ],
  },
];
</script>

<style></style>
