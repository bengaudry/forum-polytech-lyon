<script setup lang="ts">
import type { PlanningEvent } from '@/lib/plannings.ts'
import { computed } from 'vue'

const { event, eventsList } = defineProps<{
  event: PlanningEvent
  eventsList: Array<PlanningEvent>
}>()

const eventIndex = computed(() => (event ? eventsList.indexOf(event) : null))
const nextEvent = computed(() =>
  eventIndex.value !== null && eventIndex.value < eventsList.length - 1
    ? eventsList[eventIndex.value + 1]
    : null,
)
const breakDuration = computed(() => {
  if (!nextEvent.value) return null
  const breakTime = (nextEvent.value.startHour.getTime() - event.endHour.getTime()) / 60000
  return breakTime > 0 ? breakTime : null
})

const formatBreakDuration = (duration: number) => {
  if (duration < 60) return `${duration} min`
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}h${minutes > 0 ? ` ${minutes}min` : ''}`
}

const formatSpeaker = (s: { name: string; details?: string }) => {
  return s.details ? `${s.name} (${s.details})` : s.name
}
</script>

<template>
  <li :key="event.startHour.toDateString()" class="planning-event">
    <h3 v-if="event.topic">{{ event.topic }}</h3>
    <span class="event-time"
      >{{
        event.startHour.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
        })
      }}
      -
      {{
        event.endHour.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
        })
      }}</span
    >
    <div v-if="event.companies">
      <strong>{{ event.companies.length > 1 ? 'Entreprises' : 'Entreprise' }} : </strong>
      {{ event.companies.map((c) => c.name).join(', ') }}
    </div>
    <div v-if="event.speakers">
      <strong>{{ event.speakers.length > 1 ? 'Intervenants' : 'Intervenant' }} : </strong>
      <span v-if="event.speakers.length == 1 && event.speakers[0]">
        {{ formatSpeaker(event.speakers[0]) }}
      </span>
      <ul v-else>
        <li v-for="speaker in event.speakers">
          {{ speaker.name }}
          <i v-if="speaker.details">- {{ speaker.details }}</i>
        </li>
      </ul>
    </div>
  </li>

  <li
    v-if="breakDuration !== null"
    :key="event.startHour.toDateString() + '-pause'"
    class="planning-break"
  >
    {{ formatBreakDuration(breakDuration) }} de pause
  </li>
</template>

<style scoped>
.planning-event {
  padding: 1.5rem 2rem;
}

h3 {
  margin-top: 0;
}

.planning-event:not(:last-child) {
  border-bottom: 1px solid #e6e6e6;
}

.planning-break {
  padding: 1rem 2rem;
  font-style: italic;
  color: #666;
  border-bottom: 1px solid #e6e6e6;
}

.event-time {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
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
</style>
