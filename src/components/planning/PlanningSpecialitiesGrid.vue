<script setup lang="ts">
import VLazyImage from "v-lazy-image"
import { POLYTECH_SPECIALITIES } from "@/lib/constants"
import { usePlanningSpeciality } from "@/composables/usePlanningSpeciality.ts"

const { setCurrentSpeciality } = usePlanningSpeciality()
</script>

<template>
  <div class="grid">
    <button
      v-for="speciality in POLYTECH_SPECIALITIES"
      :key="speciality.name"
      type="button"
      class="speciality-link"
      :aria-label="`Afficher la planification de ${speciality.name}`"
      @click="setCurrentSpeciality(speciality.name)"
    >
      <span class="logo-shell">
        <VLazyImage
          class="speciality-logo"
          :src="speciality.logo"
          :alt="speciality.name"
          fetchpriority="high"
          height="80"
        />
      </span>
      <span class="speciality-name">
        {{ speciality.name }}
      </span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  max-width: 720px;
  width: min(100%, 720px);
  margin: 0 auto;
}

.speciality-link {
  display: flex;
  position: relative;
  overflow: hidden;
  padding: 14px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  min-height: 112px;
  color: black;
  width: 100%;
  margin: 0;
  border: 1px solid #d8e2f0;
  border-radius: 14px;
  text-decoration: none;
  background: linear-gradient(160deg, #ffffff 0%, #f8fbff 100%);
  box-shadow: 0 6px 20px rgba(17, 24, 39, 0.02);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    border-color 160ms ease,
    background-color 160ms ease;
  appearance: none;
  text-align: left;
  font: inherit;

  .speciality-name {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.2;
  }

  .logo-shell {
    display: grid;
    place-items: center;
    min-width: 132px;
    height: 82px;
    border-radius: 10px;
    background-color: #fff;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(17, 24, 39, 0.08);

    &::before {
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 3px solid #93c5fd;
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }
}

.speciality-logo {
  display: block;
  height: 70px;
  object-fit: contain;
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .speciality-link {
    min-height: 102px;
    padding: 12px;
    gap: 12px;

    .logo-shell {
      min-width: 118px;
      height: 74px;
    }
  }
}
</style>
