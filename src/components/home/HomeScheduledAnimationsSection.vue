<script setup lang="ts">
import { computed } from 'vue'
import { scheduledAnimations } from '@/lib/animations.ts'
import { useNow } from '@/composables/useNow.ts'
import HomeAnimationsWrapper from '@/components/home/HomeAnimationsWrapper.vue'
import HomeAnimationCard from '@/components/home/HomeAnimationCard.vue'

// affiche les animations qui commencent dans moins de 15 minutes
const now = useNow()
const scheduledAnimationsToDisplay = computed(() =>
  scheduledAnimations
    .filter((animation) => {
      const { startTime, endTime } = animation
      if (!startTime || !endTime) return false

      const displayStart = new Date(startTime.getTime() - 15 * 60 * 1000)
      return now.value >= displayStart && now.value <= endTime
    })
    .sort((left, right) => left.startTime.getTime() - right.startTime.getTime()),
)

const shouldShowScheduledAnimations = computed(() => scheduledAnimationsToDisplay.value.length > 0)

const isUpcoming = (startTime?: Date) => Boolean(startTime && now.value < startTime)
</script>

<template>
  <HomeAnimationsWrapper
    v-if="shouldShowScheduledAnimations"
    id="scheduled-animations"
    title="Animations programmées"
  >
    <HomeAnimationCard
      v-for="animation in scheduledAnimationsToDisplay"
      :key="animation.name"
      :animation="animation"
      :upcoming="isUpcoming(animation.startTime)"
    />
  </HomeAnimationsWrapper>
</template>
