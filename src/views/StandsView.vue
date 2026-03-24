<script setup lang="ts">
import StandsGrid from "@/components/stands/StandsGrid.vue"
import StandsFilters from "@/components/stands/StandsFilters.vue"
import StandsModal from "@/components/stands/StandsModal.vue"
</script>

<template>
  <h1>Mur des Stands</h1>
  <StandsFilters />
  <StandsGrid />
  <StandsModal />
</template>
