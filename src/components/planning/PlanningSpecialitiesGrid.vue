<script setup lang="ts">
import VLazyImage from 'v-lazy-image'
import { POLYTECH_SPECIALITIES } from '@/lib/constants'
import { usePlanningSpeciality } from '@/composables/usePlanningSpeciality.ts'

const { setCurrentSpeciality } = usePlanningSpeciality()
</script>

<template>
  <div class="grid">
    <button
      v-for="speciality in POLYTECH_SPECIALITIES"
      :key="speciality.name"
      class="speciality-link"
      @click="setCurrentSpeciality(speciality.name)"
    >
      <VLazyImage :src="speciality.logo" :alt="speciality.name" fetchpriority="high" />
      <span>
        {{ speciality.name }}
      </span>
    </button>
  </div>
</template>

<style scoped>
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
