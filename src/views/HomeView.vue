<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { continuedAnimations, scheduledAnimations } from '../lib/animations'

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  hour: '2-digit',
  minute: '2-digit',
})

const formatSchedule = (startTime?: Date, endTime?: Date) => {
  if (!startTime || !endTime) return 'Toute la journee'
  return `${dateFormatter.format(startTime)} - ${dateFormatter.format(endTime)}`
}

const shuffle = <T,>(items: T[]): T[] => {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const valueAtI = shuffled[i]
    const valueAtJ = shuffled[j]
    if (valueAtI === undefined || valueAtJ === undefined) continue
    shuffled[i] = valueAtJ
    shuffled[j] = valueAtI
  }
  return shuffled
}

const randomizedContinuedAnimations = shuffle(continuedAnimations)
const randomizedScheduledAnimations = shuffle(scheduledAnimations)

const now = ref(new Date())
const timerId = window.setInterval(() => {
  now.value = new Date()
}, 30000)

onBeforeUnmount(() => {
  window.clearInterval(timerId)
})

const scheduledAnimationsToDisplay = computed(() =>
  randomizedScheduledAnimations
    .filter((animation) => {
      const { startTime, endTime } = animation
      if (!startTime || !endTime) return false

      const displayStart = new Date(startTime.getTime() - 15 * 60 * 1000)
      return now.value >= displayStart && now.value <= endTime
    })
    .sort((left, right) => left.startTime.getTime() - right.startTime.getTime()),
)

const shouldShowScheduledAnimations = computed(() => scheduledAnimationsToDisplay.value.length > 0)

const getTimeIndicator = (startTime?: Date, endTime?: Date) => {
  if (!startTime || !endTime) return 'Horaire a confirmer'

  const diffToStartMs = startTime.getTime() - now.value.getTime()
  const diffToEndMs = endTime.getTime() - now.value.getTime()

  if (diffToEndMs < 0) return 'Termine'
  if (diffToStartMs <= 0) return 'En cours'

  const diffMinutes = Math.ceil(diffToStartMs / 60000)
  if (diffMinutes > 60) return "Dans plus d'une heure"
  return diffMinutes === 1 ? 'Dans 1 minute' : `Dans ${diffMinutes} minutes`
}

const isUpcoming = (startTime?: Date) => Boolean(startTime && now.value < startTime)
</script>

<template>
  <section class="home">
    <h1>Forum Polytech Lyon 2026</h1>
    <p>
      Bienvenue sur le site du forum.<br />Retrouvez les entreprises presentes et le planning de la
      journee.
    </p>

    <div class="actions">
      <RouterLink class="cta" to="/entreprises">Voir le mur des entreprises</RouterLink>
      <RouterLink class="cta cta-secondary" to="/planning">Voir le planning</RouterLink>
    </div>

    <section
      v-if="shouldShowScheduledAnimations"
      class="animations"
      aria-labelledby="scheduled-animations-title"
    >
      <h2 id="scheduled-animations-title">Animations programmées</h2>
      <div class="animations-column">
        <article
          v-for="animation in scheduledAnimationsToDisplay"
          :key="animation.name"
          class="animation-card"
          :class="{ upcoming: isUpcoming(animation.startTime) }"
        >
          <div class="card-header">
            <h3>
              <span class="emoji-icon">{{ animation.emojiIcon }}</span> {{ animation.name }}
            </h3>
            <span class="time-indicator">{{
                getTimeIndicator(animation.startTime, animation.endTime)
              }}</span>
          </div>
          <p>{{ animation.description }}</p>
          <div class="animation-meta">
            <span>{{ formatSchedule(animation.startTime, animation.endTime) }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="animations" aria-labelledby="animations-title">
      <h2 id="animations-title">Animations continues</h2>
      <div class="animations-column">
        <article
          v-for="animation in randomizedContinuedAnimations"
          :key="animation.name"
          class="animation-card"
        >
          <div class="card-header">
            <h3>
              <span class="emoji-icon">{{ animation.emojiIcon }}</span> {{ animation.name }}
            </h3>
            <span class="time-indicator">{{
              getTimeIndicator(animation.startTime, animation.endTime)
            }}</span>
          </div>
          <p>{{ animation.description }}</p>
          <div class="animation-meta">
            <span>{{ formatSchedule(animation.startTime, animation.endTime) }}</span>
            <span>{{ animation.room ?? 'Lieu a confirmer' }}</span>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>
.home {
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
  padding-top: 2rem;
}

h1 {
  margin-bottom: 0.75rem;
}

p {
  margin: 0;
  color: #555;
}

.actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta {
  display: inline-block;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  background: #1f6feb;
  color: white;
  font-weight: 600;
}

.cta-secondary {
  background: #f3f4f6;
  color: #111;
}

.animations {
  margin-top: 2.5rem;
  text-align: left;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

.animations h2 {
  margin: 0 0 1rem;
}

.animations-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.animation-card {
  background: #fff;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.animation-card h3 {
  font-size: 1.05rem;
  line-height: 1;
  margin: 0;
  white-space: nowrap;
}

.emoji-icon {
  font-size: 1.25rem;
  line-height: 1;
  margin-right: 4px;
}

.time-indicator {
  font-size: 0.8rem;
  font-weight: 600;
  color: #1f6feb;
  background: #eef4ff;
  border-radius: 999px;
  padding: 0.25rem 0.55rem;
  white-space: nowrap;
}

.animation-meta {
  margin-top: 0.8rem;
  padding-top: 0.7rem;
  border-top: 1px dashed #ddd;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #555;
}


.animation-card.upcoming .time-indicator {
  background: #fff3bf;
  color: #8a6d00;
}
</style>
