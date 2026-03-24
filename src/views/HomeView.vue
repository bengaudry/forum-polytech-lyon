<script setup lang="ts">
import HomeActions from "@/components/home/HomeActions.vue"
import HomeHeader from "@/components/home/HomeHeader.vue"
import HomeContinuedAnimationsSection from "@/components/home/HomeContinuedAnimationsSection.vue"
import HomeScheduledAnimationsSection from "@/components/home/HomeScheduledAnimationsSection.vue"
</script>

<template>
  <section class="home">
    <HomeHeader />
    <HomeActions />
    <HomeScheduledAnimationsSection />
    <HomeContinuedAnimationsSection />
  </section>
</template>

<style scoped>
.home {
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
}
</style>
