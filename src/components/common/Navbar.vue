<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'

const { currentRoute } = useRouter()

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Stands', path: '/stands' },
  { name: 'Plan', path: '/plan' },
  { name: 'Planning', path: '/planning' },
]

const isMenuExpanded = ref(false)
</script>

<template>
  <nav class="header-nav">
    <div class="header-nav-content">
      <RouterLink class="header-brand" to="/">
        <img
          src="/images/logos/polytech/polytech-logo-32.webp"
          alt="Logo Polytech Lyon"
          class="header-nav-logo"
          fetchpriority="high"
          width="32"
          height="32"
        />
        <p class="header-nav-title">
          <strong>Forum 2026</strong>
          <span>Polytech Lyon</span>
        </p>
      </RouterLink>

      <button
        class="menu-toggle"
        @click="isMenuExpanded = !isMenuExpanded"
        aria-label="Toggle navigation menu"
      >
        <img src="/images/icons/menu-burger.svg" alt="MENU" width="32" height="32" />
      </button>

      <ul id="nav-items-container" class="nav-items" :class="{ expanded: isMenuExpanded }">
        <li v-for="link in links" :key="link.path">
          <RouterLink
            class="nav-link"
            :class="{ current: currentRoute.path === link.path }"
            :to="link.path"
            @click="isMenuExpanded = false"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.header-nav {
  user-select: none;
  position: fixed;
  z-index: 20;
  top: 0;
  background-color: #fafafa;
  border-bottom: 1px solid #ddd;
  width: 100%;
}

.header-nav-content {
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  padding: var(--navbar-padding-vertical) var(--navbar-padding-horizontal);
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}

.header-nav-title {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
}

.header-nav-title > strong {
  font-weight: bold;
  font-size: 1.2em;
}

.header-nav-title > :not(strong) {
  color: #666;
}

.header-brand {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: inherit;
}

.header-nav-logo {
  width: 32px;
  aspect-ratio: auto;
}

@media screen and (min-width: 480px) {
  :root {
    --navbar-padding-horizontal: 32px;
    --navbar-padding-vertical: 10px;
  }

  .header-nav-title {
    font-size: 1.1rem;
  }

  .header-brand {
    gap: 0.8rem;
  }
}

.menu-toggle {
  background: none;
  border: none;
  outline: none;
}

.menu-toggle > img {
  width: 28px;
  height: 28px;
}

.nav-items {
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  width: calc(100% - 2 * 16px);
  height: fit-content;
  background-color: #fff;
  list-style-type: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 0;
}

.nav-items.expanded {
  display: block;
}

.nav-link {
  display: block;
  padding: 8px 12px;
  color: #333;
  text-decoration: none;
}

.nav-link.current {
  font-weight: 600;
}

.nav-link:not(:last-child) {
  border-bottom: 1px solid #e6e6e6;
}

@media screen and (min-width: 780px) {
  .menu-toggle {
    display: none;
  }

  .nav-items {
    position: unset;
    right: unset;
    top: unset;
    width: auto;
    height: auto;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    margin: 0;

    display: flex !important; /* !important pour override .nav-items.expanded */
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .nav-link {
    padding: 0;
    border-bottom: none;
  }
}
</style>
