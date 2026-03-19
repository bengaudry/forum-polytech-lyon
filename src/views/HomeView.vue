<script setup lang="ts">
import { continuedAnimations, scheduledAnimations } from '../lib/animations'

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  hour: '2-digit',
  minute: '2-digit',
})

const formatSchedule = (startTime?: Date, endTime?: Date) => {
  if (!startTime || !endTime) return 'Toute la journée'
  return `${dateFormatter.format(startTime)} - ${dateFormatter.format(endTime)}`
}

const isSameDay = (left: Date, right: Date) =>
  left.getFullYear() === right.getFullYear() &&
  left.getMonth() === right.getMonth() &&
  left.getDate() === right.getDate()

const now = new Date()
const eventReferenceDate = scheduledAnimations[0]?.startTime ?? continuedAnimations[0]?.startTime
const shouldShowScheduledAnimations = eventReferenceDate
  ? isSameDay(now, eventReferenceDate)
  : false

const getTimeIndicator = (startTime?: Date, endTime?: Date) => {
  if (!startTime || !endTime) return 'Horaire à confirmer'

  const diffToStartMs = startTime.getTime() - now.getTime()
  const diffToEndMs = endTime.getTime() - now.getTime()

  if (diffToEndMs < 0) return 'Terminé'
  if (diffToStartMs <= 0) return 'En cours'

  const diffMinutes = Math.ceil(diffToStartMs / 60000)
  if (diffMinutes > 60) return "Dans plus d'une heure"
  return `Dans ${diffMinutes} minutes`
}

const shuffle = <T,>(items: T[]): T[] => {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const randomizedContinuedAnimations = shuffle(continuedAnimations)
const randomizedScheduledAnimations = shuffle(scheduledAnimations)
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

    <section
      v-if="shouldShowScheduledAnimations"
      class="animations"
      aria-labelledby="scheduled-animations-title"
    >
      <h2 id="scheduled-animations-title">Animations programmees</h2>
      <div class="animations-column">
        <article
          v-for="animation in randomizedScheduledAnimations"
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
</style>
