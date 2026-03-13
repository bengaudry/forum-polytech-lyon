<script setup lang="ts">
import VLazyImage from "v-lazy-image";
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
    <VLazyImage :src="company.logo" :alt="`Logo de ${company.name}`" class="company-logo" />
    <span class="company-name">{{ company.name }}</span>
    <span class="company-description">{{ company.shortDescription }}</span>

    <span class="related-fields">
      <span
        v-for="field in company.relatedFields"
        :key="field"
        :class="`related-field ${field === selectedField ? 'related-field-selected' : ''}`"
      >
        {{ field }}
      </span>
    </span>
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
  color: inherit;
  cursor: pointer;
  border: none;
  padding: 48px 32px 32px;
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

.company-description {
  margin-top: 0.2rem;
  margin-bottom: 0.7rem;
}

.related-fields {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
  gap: 4px;
}

.related-field {
  display: inline-block;
  background-color: rgba(var(--polytech-color), 0.2);
  color: rgb(var(--polytech-color-foreground));
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8em;
}

.related-field-selected {
  background-color: #1e40af;
  color: #fff;
}
</style>
