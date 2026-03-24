import { ref } from 'vue'
import type { CompanyData } from '@/lib/standsData.ts'

type CompaniesMap = Record<string, CompanyData>

const companies = ref<CompaniesMap>({})
const isLoading = ref(false)
const loadError = ref<string | null>(null)

let loadPromise: Promise<void> | null = null

async function ensureLoaded() {
  if (Object.keys(companies.value).length > 0) return
  if (loadPromise) return loadPromise

  isLoading.value = true
  loadError.value = null

  loadPromise = import('@/lib/standsData.ts')
    .then(({ companies: importedCompanies }) => {
      companies.value = importedCompanies
    })
    .catch((error: unknown) => {
      console.error('Impossible de charger les donnees des stands:', error)
      loadError.value = 'Impossible de charger les entreprises pour le moment.'
    })
    .finally(() => {
      isLoading.value = false
      loadPromise = null
    })

  return loadPromise
}

export function useStandsCompanies() {
  return {
    companies,
    isLoading,
    loadError,
    ensureLoaded,
  }
}
