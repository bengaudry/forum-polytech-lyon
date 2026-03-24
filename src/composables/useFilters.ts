import { readonly, ref } from "vue"

const query = ref("")
const selectedField = ref<
  "INFO" | "GBM" | "MAM" | "SIR" | "MECA" | "MAT" | "all"
>("all")

export function useFilters() {
  return {
    query,
    selectedField,
    setQuery: (newQuery: string) => {
      query.value = newQuery
    },
    setSelectedField: (
      field: "INFO" | "GBM" | "MAM" | "SIR" | "MECA" | "MAT" | "all"
    ) => {
      selectedField.value = field
    }
  }
}
