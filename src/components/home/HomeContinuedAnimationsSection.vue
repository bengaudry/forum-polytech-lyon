<script setup lang="ts">
import { continuedAnimations } from '@/lib/animations.ts'
import { shuffle } from '@/lib/functions.ts'
import HomeAnimationsWrapper from '@/components/home/HomeAnimationsWrapper.vue'
import HomeAnimationCard from '@/components/home/HomeAnimationCard.vue'

const randomizedContinuedAnimations = shuffle(continuedAnimations)
</script>

<template>
  <HomeAnimationsWrapper id="continued-animations" title="Animations continues">
    <HomeAnimationCard
      v-for="animation in randomizedContinuedAnimations"
      :key="animation.name"
      :animation="animation"
    />
  </HomeAnimationsWrapper>
</template>
