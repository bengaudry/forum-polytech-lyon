import { computed, ref } from "vue"
import type { CompanyData } from "../lib/standsData.ts"

const selectedCompany = ref<CompanyData | null>(null)
const currentCompany = computed(() => selectedCompany.value)

export function useModalContent() {
  return {
    currentCompany,
    setCompany: (company: CompanyData | null) => {
      selectedCompany.value = company
    }
  }
}
