<script setup lang="ts">
import './styles/common.css'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="header-nav">
    <div class="header-nav-content">
      <RouterLink class="header-brand" to="/">
        <img src="../images/logos/polytech.png" alt="Logo Polytech Lyon" class="header-nav-logo" />
        <p class="header-nav-title">
          <strong>Forum 2026</strong>
          <span>Polytech Lyon</span>
        </p>
      </RouterLink>

      <button id="menu-toggle">
        <img src="../images/icons/menu-burger.svg" alt="MENU" width="32" height="32" />
      </button>

      <ul id="nav-items-container" class="nav-items">
        <li class="nav-item">
          <RouterLink class="nav-link current" to="/">Mur des entreprises</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/plan">Plan</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/planning">Planning</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 0px 20px 20px 20px;
}
</style>
