<script setup lang="ts">
import CompaniesGrid from '@/components/CompaniesGrid.vue'
import Filters from '@/components/Filters.vue'
import Modal from '@/components/Modal.vue'
</script>

<template>
  <h1>Mur des Entreprises</h1>

  <Filters />
  <CompaniesGrid />

  <Modal />
</template>
