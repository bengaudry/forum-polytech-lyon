import { companies, type CompanyData } from '@/lib/companiesData'
import { computed } from 'vue'
import { useFilters } from './useFilters'

function randomizeKeysOrder() {
  const companyKeys = Object.keys(companies)
  for (let i = companyKeys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[companyKeys[i], companyKeys[j]] = [companyKeys[j] as string, companyKeys[i] as string]
  }
  return companyKeys
}

const data = computed(() => {
  const { query, selectedField } = useFilters()

  const filteredCompanies: Record<keyof typeof companies, CompanyData> = {}

  const companyKeys = randomizeKeysOrder()

  for (const key of companyKeys) {
    const company = companies[key] as CompanyData
    if (selectedField.value !== 'all' && !company.relatedFields.includes(selectedField.value)) {
      continue
    }
    if (query.value && !company.name.toLowerCase().includes(query.value.toLowerCase())) {
      continue
    }
    filteredCompanies[key] = company
  }

  return filteredCompanies
})

export function useFilteredCompaniesData() {
  return data
}
