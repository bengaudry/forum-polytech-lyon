import { computed } from "vue"
import type { CompanyData } from "@/lib/standsData.ts"
import { useFilters } from "./useFilters"
import { useStandsCompanies } from "./useStandsCompanies"

function randomizeKeysOrder(companies: Record<string, CompanyData>) {
  const companyKeys = Object.keys(companies)
  for (let i = companyKeys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[companyKeys[i], companyKeys[j]] = [
      companyKeys[j] as string,
      companyKeys[i] as string
    ]
  }
  return companyKeys
}

const { companies } = useStandsCompanies()
const { query, selectedField } = useFilters()

const data = computed(() => {
  const filteredCompanies: Record<string, CompanyData> = {}

  const companyKeys = randomizeKeysOrder(companies.value)

  for (const key of companyKeys) {
    const company = companies.value[key]
    if (!company) continue

    if (
      selectedField.value !== "all" &&
      !company.relatedFields.includes(selectedField.value)
    ) {
      continue
    }
    if (
      query.value &&
      !company.name.toLowerCase().includes(query.value.toLowerCase())
    ) {
      continue
    }
    filteredCompanies[key] = company
  }

  return filteredCompanies
})

export function useFilteredCompaniesData() {
  return data
}
