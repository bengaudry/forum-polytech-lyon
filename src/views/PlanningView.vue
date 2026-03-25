<script setup lang="ts">
import { computed } from "vue"
import { POLYTECH_SPECIALITIES } from "@/lib/constants"
import PlanningSpecialitiesGrid from "@/components/planning/PlanningSpecialitiesGrid.vue"
import { usePlanningSpeciality } from "@/composables/usePlanningSpeciality.ts"
import PlanningEventList from "@/components/planning/PlanningEventList.vue"
import { usePlanningData } from "@/composables/usePlanningData.ts"

const { currentSpeciality } = usePlanningSpeciality()

const speciality = computed(() => {
  if (!currentSpeciality.value) return null
  return (
    POLYTECH_SPECIALITIES.find((s) => s.name === currentSpeciality.value) ||
    null
  )
})

const { planning, isLoading, loadingError } = usePlanningData(currentSpeciality)
</script>

<template>
  <div v-if="speciality">
    <img
      :src="speciality.logo"
      :alt="`Logo de la filière ${speciality.name}`"
      height="90"
      class="logo-filiere"
    />
    <h1>Planning conférences {{ speciality.name }}</h1>
  </div>
  <h1 v-else class="single-title">Planning conférences</h1>

  <PlanningEventList v-if="planning" :planning="planning" />
  <p v-else-if="isLoading" class="planning-state">Chargement du planning...</p>
  <p v-else-if="loadingError" class="planning-state planning-state--error">{{ loadingError }}</p>
  <PlanningSpecialitiesGrid v-else />
</template>

<style scoped lang="scss">
.single-title {
  margin-bottom: 2rem;
}

.planning-state {
  text-align: center;
  margin: 2rem auto;
}

.planning-state--error {
  color: #b91c1c;
}

.logo-filiere {
  display: block;
  margin: 3rem auto 1rem;
}
</style>
