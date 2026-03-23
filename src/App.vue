<script setup lang="ts">
import './styles/common.css'
import { RouterView, useRouter } from 'vue-router'
import Navbar from '@/components/common/Navbar.vue'
import Footer from '@/components/common/Footer.vue'

const { replace } = useRouter()

// Redirection de l'ancienne URL vers la nouvelle si le paramètre "page" est présent et correspond à une page valide
// (pour gérer les problèmes liés a la SPA vue router)
try {
  const currentUrl = new URL(window.location.href)
  const redirectPage = currentUrl.searchParams.get('page')
  if (redirectPage && ['planning', 'plan', 'entreprises'].includes(redirectPage.toString())) {
    console.warn("Redirection de l'ancienne URL vers la nouvelle")
    replace(`/${redirectPage.toString()}`)
  }
} catch (_) {
  console.warn(
    "Impossible d'analyser l'URL actuelle pour la redirection, aucune action de redirection effectuée",
  )
}
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
main {
  padding: 0 20px 20px 20px;
}
</style>