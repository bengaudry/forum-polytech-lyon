<script setup lang="ts">
import VLazyImage from 'v-lazy-image'
import { computed, ref } from 'vue'
import { POLYTECH_SPECIALITIES, type SpecialitePolytech } from '@/lib/constants'
import { plannings } from '@/lib/plannings'
import PlanningEvent from '@/components/planning/PlanningEvent.vue'

const selectedSpecialityName = ref<SpecialitePolytech | null>(null)

const speciality = computed(() => {
  if (!selectedSpecialityName.value) return null
  return POLYTECH_SPECIALITIES.find((s) => s.name === selectedSpecialityName.value) || null
})

const planning = computed(() => {
  if (!selectedSpecialityName.value) return null
  return plannings[selectedSpecialityName.value] || null
})
</script>

<template>
  <img
    v-if="speciality"
    :src="speciality.logo"
    :alt="`Logo de la filière ${selectedSpecialityName}`"
    height="90"
    class="logo-filiere"
  />
  <h1>Planning conférences {{ selectedSpecialityName }}</h1>

  <div v-if="selectedSpecialityName">
    <button @click="selectedSpecialityName = null" class="back-btn">
      <img src="/images/icons/angle-left.svg" alt="<" width="16" height="16" fetchpriority="high" />
      Revenir
    </button>

    <ul class="planning" v-if="planning">
      <PlanningEvent v-for="event in planning" :event="event" :planning="planning" />
    </ul>
  </div>

  <div v-else class="grid">
    <button
      v-for="speciality in POLYTECH_SPECIALITIES"
      :key="speciality.name"
      class="speciality-link"
      @click="selectedSpecialityName = speciality.name"
    >
      <VLazyImage :src="speciality.logo" :alt="speciality.name" fetchpriority="high" />
      <span>
        {{ speciality.name }}
      </span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.logo-filiere {
  display: block;
  margin: 3rem auto 1rem;
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

.planning {
  list-style-type: none;
  max-width: 480px;
  margin: 0 auto;
  padding: 0;
}

.event-companies-list {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.event-company {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  img {
    object-fit: contain;
  }
}

.grid {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 660px;
  width: fit-content;
  margin: 0 auto;
}

.speciality-link {
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  width: 200px;
  margin: 10px;
  height: 150px;
  padding: 20px 40px;
  border: 1px solid #e7e7e7;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 80px;
    aspect-ratio: auto;
  }

  span {
    font-weight: bold;
    font-size: 1.2rem;
  }

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
}
</style>
