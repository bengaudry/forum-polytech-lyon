<script setup lang="ts">
import type { Animation } from "@/lib/animations.ts"
import { formatSchedule, getTimeIndicator } from "@/lib/functions.ts"

defineProps<{ animation: Animation; upcoming?: boolean }>()
</script>

<template>
  <article
    :key="animation.name"
    class="animation-card"
    :class="{ upcoming: upcoming === true }"
  >
    <div class="card-header">
      <h3>
        <span class="emoji-icon">{{ animation.emojiIcon }}</span>
        {{ animation.name }}
      </h3>
      <span class="time-indicator">{{
        getTimeIndicator(animation.startTime, animation.endTime)
      }}</span>
    </div>
    <p>{{ animation.description }}</p>
    <div class="animation-meta">
      <span>{{ formatSchedule(animation.startTime, animation.endTime) }}</span>
      <span>{{ animation.room ?? "Lieu a confirmer" }}</span>
    </div>
  </article>
</template>

<style scoped>
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
