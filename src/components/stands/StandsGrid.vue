<script setup lang="ts">
import { useFilteredCompaniesData } from "@/composables/useFilteredCompaniesData.ts"
import { useStandsCompanies } from "@/composables/useStandsCompanies"
import StandsCard from "./StandsCard.vue"
import StandsCardSkeleton from "./StandsCardSkeleton.vue"
import { computed, onMounted } from "vue"

const companies = useFilteredCompaniesData()
const { ensureLoaded, isLoading, loadError } = useStandsCompanies()

const hasResults = computed(() => Object.keys(companies.value).length > 0)

onMounted(() => {
  void ensureLoaded()
})
</script>

<template>
  <div v-if="isLoading" class="companies-grid" aria-label="Chargement des entreprises">
    <StandsCardSkeleton v-for="index in 3" :key="`skeleton-${index}`" />
  </div>
  <p v-else-if="loadError" class="company-grid-state">{{ loadError }}</p>
  <p v-else-if="!hasResults" class="company-grid-state">
    Aucune entreprise trouvee.
  </p>
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
.company-grid-state {
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
