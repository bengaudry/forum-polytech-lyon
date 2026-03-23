<script setup lang="ts">
import CompaniesGrid from '@/components/companies/CompaniesGrid.vue'
import Filters from '@/components/companies/Filters.vue'
import CompanyModal from '@/components/companies/CompanyModal.vue'
</script>

<template>
  <h1>Mur des Entreprises</h1>
  <Filters />
  <CompaniesGrid />
  <CompanyModal />
</template>
