<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>
  <div class="actions">
    <RouterLink class="cta" to="/stands">Voir la liste des stands</RouterLink>
    <RouterLink class="cta cta-secondary" to="/planning"
      >Planning des conférences</RouterLink
    >
  </div>
</template>

<style scoped>
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
  background: linear-gradient(
    145deg,
    rgba(var(--polytech-color-foreground)),
    rgba(var(--polytech-color-foreground), 0.85)
  );
  color: white;
  font-weight: 600;
}

.cta-secondary {
  background: rgba(var(--polytech-color), 0.2);
  color: #111;
}
</style>
