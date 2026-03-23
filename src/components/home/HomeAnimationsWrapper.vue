<script setup lang="ts">
defineProps<{ title: string; id: string }>()
</script>

<template>
  <section class="animations" :aria-labelledby="`${id}-title`">
    <h2 :id="`${id}-title`">{{ title }}</h2>
    <div class="animations-column">
      <slot />
    </div>
  </section>
</template>

<style scoped>
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
</style>
