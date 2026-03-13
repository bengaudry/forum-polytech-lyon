<script setup lang="ts">
import { useFilters } from '@/composables/useFilters'
import type { CompanyData } from '../lib/companiesData'
import { useModalContent } from '@/composables/useModalContent'
import { useModalVisibility } from '@/composables/useModalVisibility'

defineProps<{
  company: CompanyData
}>()

const { selectedField } = useFilters()
const { showModal } = useModalVisibility()
const { setCompany } = useModalContent()

const handleCardClick = (company: CompanyData) => {
  setCompany(company)
  showModal()
}
</script>

<template>
  <button class="company-card" @click="handleCardClick(company)">
    <img :src="company.logo" :alt="`Logo de ${company.name}`" class="company-logo" />
    <span class="company-name">{{ company.name }}</span>
    <p class="company-description">{{ company.shortDescription }}</p>

    <div>
      <span
        v-for="field in company.relatedFields"
        :key="field"
        :class="`related-field ${field === selectedField ? 'related-field-selected' : ''}`"
      >
        {{ field }}
      </span>
    </div>
  </button>
</template>

<style scoped>
/* Style des cartes */
.company-card {
  display: flex;
  max-width: 400px;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
  padding: 32px;
  padding-top: 48px;
  transition: transform 0.2s;
}

.company-card:hover {
  transform: translateY(-5px);
}

.company-logo {
  max-width: 80%;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1.15rem;
}

.company-name {
  font-size: 1.3rem;
  font-weight: bold;
}

.related-field {
  display: inline-block;
  background-color: rgba(var(--polytech-color), 0.2);
  color: rgb(var(--polytech-color-foreground));
  padding: 5px 10px;
  border-radius: 15px;
  margin: 5px 5px 0 0;
  font-size: 0.8em;
}

.related-field-selected {
  background-color: #1e40af;
  color: #fff;
}
</style>
