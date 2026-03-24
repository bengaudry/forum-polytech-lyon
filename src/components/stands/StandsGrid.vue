<script setup lang="ts">
import { useFilteredCompaniesData } from '@/composables/useFilteredCompaniesData.ts'
import StandsCard from './StandsCard.vue'

const companies = useFilteredCompaniesData()
</script>

<template>
  <div class="companies-grid">
    <StandsCard
      v-for="(company, key, index) in companies"
      :key="key"
      :company="company"
      :index="index"
    />
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
