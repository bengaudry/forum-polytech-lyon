import { computed, ref } from 'vue'
import { companies, type CompanyData } from '../lib/standsData.ts'

const companyKey = ref<keyof typeof companies | null>(null)
const currentCompany = computed(() => {
  if (companyKey.value) {
    return companies[companyKey.value]
  }
  return null
})

export function useModalContent() {
  return {
    currentCompany,
    setCompany: (company: CompanyData | null) => {
      if (company === null) companyKey.value = null
      else {
        companyKey.value = Object.keys(companies).find(
          (key) => companies[key]?.name === company?.name,
        ) as keyof typeof companies | null
      }
    },
  }
}
