<script setup lang="ts">
import { useFilteredCompaniesData } from '@/composables/useFilteredCompaniesData'
import CompanyCard from './CompanyCard.vue'

const companies = useFilteredCompaniesData()
</script>

<template>
  <div class="companies-grid">
    <CompanyCard v-for="(company, key) in companies" :key="key" :company="company" />
  </div>
</template>

<style scoped>
#company-grid-error-container {
  text-align: center;
  margin-top: 20px;
}

.companies-grid {
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  justify-content: center;
  max-width: 1280px;
  margin: 1.5rem auto;
  gap: 20px;
}
</style>
