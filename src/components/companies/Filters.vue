<script setup lang="ts">
import { useFilters } from '@/composables/useFilters.ts'

const { query, selectedField } = useFilters()
</script>

<template>
  <div class="filters">
    <div class="field-selector">
      <label for="fieldSelect">Filtrer par filière : </label>
      <select id="fieldSelect" v-model="selectedField">
        <option value="all">Toutes les filières</option>
        <option value="INFO">INFO</option>
        <option value="GBM">GBM</option>
        <option value="MAM">MAM</option>
        <option value="SIR">SIR</option>
        <option value="MAT">MAT</option>
        <option value="MECA">MECA</option>
      </select>
    </div>

    <input
      type="text"
      id="searchInput"
      placeholder="Rechercher une entreprise..."
      v-model="query"
    />
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

#searchInput {
  padding: 10px;
  width: 300px;
  max-width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#fieldSelect {
  margin-left: 6px;
  padding: 6px;
  width: 200px;
  max-width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
