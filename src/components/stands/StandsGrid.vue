<script setup lang="ts">
import { useFilteredCompaniesData } from '@/composables/useFilteredCompaniesData.ts'
import { useStandsCompanies } from '@/composables/useStandsCompanies'
import StandsCard from './StandsCard.vue'
import { computed, onMounted } from 'vue'

const companies = useFilteredCompaniesData()
const { ensureLoaded, isLoading, loadError } = useStandsCompanies()

const hasResults = computed(() => Object.keys(companies.value).length > 0)

onMounted(() => {
  void ensureLoaded()
})
</script>

<template>
  <p v-if="isLoading" id="company-grid-error-container">Chargement des entreprises...</p>
  <p v-else-if="loadError" id="company-grid-error-container">{{ loadError }}</p>
  <p v-else-if="!hasResults" id="company-grid-error-container">Aucune entreprise trouvee.</p>
  <div v-else class="companies-grid">
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
