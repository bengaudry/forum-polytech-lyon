<script setup lang="ts">
import { computed } from "vue"
import { POLYTECH_SPECIALITIES } from "@/lib/constants"
import PlanningSpecialitiesGrid from "@/components/planning/PlanningSpecialitiesGrid.vue"
import { usePlanningSpeciality } from "@/composables/usePlanningSpeciality.ts"
import PlanningEventList from "@/components/planning/PlanningEventList.vue"
import { plannings } from "@/lib/plannings"

const { currentSpeciality } = usePlanningSpeciality()

const speciality = computed(() => {
  if (!currentSpeciality.value) return null
  return (
    POLYTECH_SPECIALITIES.find((s) => s.name === currentSpeciality.value) ||
    null
  )
})

const planning = computed(() => {
  if (!currentSpeciality.value) return null
  return plannings[currentSpeciality.value] || null
})
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
  <PlanningSpecialitiesGrid v-else />
</template>

<style scoped lang="scss">
.single-title {
  margin-bottom: 2rem;
}

.logo-filiere {
  display: block;
  margin: 3rem auto 1rem;
}
</style>
