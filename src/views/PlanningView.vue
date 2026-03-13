<script setup lang="ts">
import { ref } from 'vue'
import { POLYTECH_SPECIALITIES, type SpecialitePolytech } from '@/lib/constants'

const selectedSpecialityName = ref<SpecialitePolytech | null>(null)
</script>

<template>
  <h1>Planning {{ selectedSpecialityName }}</h1>
  <p v-if="selectedSpecialityName">
    <button @click="selectedSpecialityName = null" class="back-btn">
      <img src="/images/icons/angle-left.svg" alt="<" width="16" height="16" />
      Revenir
    </button>
  </p>
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
.back-btn {
  img {
    transform: translateY(0.5px);
  }

  background-color: transparent;
  font-size: 1.1rem;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1rem;
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
  background-color: transparent;
  border: 1px solid #e6e6e6;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  min-width: 150px;
  max-width: 220px;
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
}
</style>
