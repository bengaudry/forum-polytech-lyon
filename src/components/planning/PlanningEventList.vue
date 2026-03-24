<script setup lang="ts">
import PlanningEvent from '@/components/planning/PlanningEvent.vue'
import type { Planning } from '@/lib/plannings.ts'
import { usePlanningSpeciality } from '@/composables/usePlanningSpeciality.ts'

defineProps<{ planning: Planning }>()

const { setCurrentSpeciality } = usePlanningSpeciality()
</script>

<template>
  <p class="room">{{ planning.room }}</p>

  <button @click="setCurrentSpeciality(null)" class="back-btn">
    <img src="/images/icons/angle-left.svg" alt="<" width="16" height="16" fetchpriority="high" />
    Revenir
  </button>

  <ul class="planning" v-if="planning">
    <PlanningEvent v-for="event in planning.events" :event="event" :eventsList="planning.events" />
  </ul>
</template>

<style scoped>
.planning {
  list-style-type: none;
  max-width: 480px;
  margin: 0 auto;
  padding: 0;
}

.room {
  text-align: center;
  font-size: 1.2rem;
}

.back-btn {
  width: 100%;
  max-width: 480px;
  background-color: transparent;
  font-size: 1.1rem;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  margin: 0 auto 1rem;

  img {
    transform: translateY(0.5px);
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
