<script setup lang="ts">
import { computed, ref } from 'vue'
import { POLYTECH_SPECIALITIES, type SpecialitePolytech } from '@/lib/constants'
import { plannings } from '@/lib/plannings'

const selectedSpecialityName = ref<SpecialitePolytech | null>(null)

const speciality = computed(() => {
  if (!selectedSpecialityName.value) return null;
  return POLYTECH_SPECIALITIES.find((s) => s.name === selectedSpecialityName.value) || null
})

const planning = computed(() => {
  if (!selectedSpecialityName.value) return null
  return plannings[selectedSpecialityName.value] || null
})
</script>

<template>
  <img v-if="speciality" :src="speciality.logo" :alt="`Logo de la filière ${selectedSpecialityName}`" height="90" class="logo-filiere" />
  <h1>Planning {{ selectedSpecialityName }}</h1>
  <div v-if="selectedSpecialityName">
    <button @click="selectedSpecialityName = null" class="back-btn">
      <img src="/images/icons/angle-left.svg" alt="<" width="16" height="16" />
      Revenir
    </button>

    <ul class="planning">
      <li v-for="event in planning" :key="event.startHour.toDateString()" class="planning-event">
        <span class="event-time">{{ event.startHour.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
        }) }} - {{ event.endHour.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
        }) }}</span>
        <div v-if="event.companies">
        <strong>{{ event.companies.length > 1 ? "Entreprises" : "Entreprise" }} : </strong>
        {{ event.companies.map((c) => c.name).join(', ') }}

        </div>
        <div v-if="event.speakers">
        <strong>{{ event.speakers.length > 1 ? "Intervenants" : "Intervenant" }} : </strong>
          {{ event.speakers.map((s) => s.name).join(', ') }}
        </div>
      </li>
    </ul>
  </div>
  <div v-else class="grid">
    <button
      v-for="speciality in POLYTECH_SPECIALITIES"
      :key="speciality.name"
      class="speciality-link"
      @click="selectedSpecialityName = speciality.name"
    >
      <img :src="speciality.logo" :alt="speciality.name" />
      <span>
        {{ speciality.name }}
      </span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.logo-filiere {
  display: block;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.back-btn {
  width: 480px;
  margin: 0 auto;
  background-color: transparent;
  font-size: 1.1rem;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1rem;

  img {
    transform: translateY(0.5px);
  }

  &:hover {
    cursor: pointer;
  }
}

.event-time {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
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

.planning-event {
  padding: 1.5rem 2rem;
}

.planning-event:not(:last-child) {
  border-bottom: 1px solid #e6e6e6;
}

.speciality-link {
  background-color: #fff;
  border: 1px solid #e6e6e6;
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
