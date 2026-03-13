<script setup lang="ts">
import { useModalContent } from '@/composables/useModalContent'

const { currentCompany } = useModalContent()
</script>

<template>
  <div v-if="currentCompany" class="modal-content">
    <img
      :src="currentCompany.logo"
      :alt="`Logo de ${currentCompany.name}`"
      class="modal-logo"
      onerror="this.style.display = 'none'"
    />
    <h2>{{ currentCompany.name }}</h2>

    <div class="modal-company-links-container">
      <a
        v-if="currentCompany.details.websiteUrl"
        :href="currentCompany.details.websiteUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="modal-company-website-link"
      >
        <span>Site Web</span>
        <img src="/images/icons/arrow-up-right-from-square.svg" />
      </a>

      <a
        v-if="currentCompany.details.careersPortalUrl"
        :href="currentCompany.details.careersPortalUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="modal-company-website-link"
      >
        <span>Portail Carrières</span>
        <img src="/images/icons/arrow-up-right-from-square.svg" />
      </a>
    </div>

    <h3 class="modal-section-title">Présentation de l'entreprise</h3>
    <p>{{ currentCompany.details.presentation }}</p>

    <div v-if="currentCompany.details.points">
      <h3 class="modal-section-title">Informations pour les élèves ingénieurs</h3>
      <ul>
        <li v-for="point in currentCompany.details.points" :key="point.title">
          <strong>{{ point.title }} : </strong>{{ point.content }}
        </li>
      </ul>
    </div>

    <div v-if="currentCompany.details.degreesResearched">
      <h3 class="modal-section-title">Diplômes recherchés</h3>
      <p>{{ currentCompany.details.degreesResearched.join(', ') }}</p>
    </div>

    <div v-if="currentCompany.details.offers && currentCompany.details.offers.length > 0">
      <h3 class="modal-section-title">Offres de Stage</h3>
      <ul class="offer-list">
        <li v-for="offer in currentCompany.details.offers" :key="offer.title">
          <a :href="offer.file" target="_blank" rel="noopener noreferrer">📄 {{ offer.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.modal-logo {
  user-select: none;
  max-width: 200px;
  height: 80px;
  display: block;
  margin: 0 auto 20px auto; /* Pour centrer le logo et ajouter de l'espace en dessous */
  object-fit: contain;
}

.modal-company-links-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.modal-company-website-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: rgba(var(--polytech-color), 0.2);
  color: rgb(var(--polytech-color-foreground));
  font-size: 1.05rem;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  user-select: none;
}

.modal-company-website-link > span {
  white-space: nowrap;
}

.modal-company-website-link > img {
  width: 16px;
  height: 16px;
  transform: translateY(-0.5px);
  color: inherit;
}

.modal-section-title {
  margin-top: 2rem;
}

.modal-section-title:first-of-type {
  margin-top: 1rem;
}

.offer-list {
  list-style-type: none;
  padding-left: 0;
  margin-top: 20px;
}

.offer-list li {
  margin-bottom: 10px;
}

.offer-list a {
  text-decoration: none;
  color: #0056b3;
  font-weight: bold;
  background-color: #f0f4f8;
  padding: 8px 12px;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.2s;
}

.offer-list a:hover {
  background-color: #e2e8f0;
  text-decoration: underline;
}
</style>
