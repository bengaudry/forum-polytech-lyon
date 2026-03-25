import { ref, watch, type Ref } from "vue"
import { loadPlanning, type Planning } from "@/lib/plannings"
import type { SpecialitePolytech } from "@/lib/constants"

export function usePlanningData(currentSpeciality: Ref<SpecialitePolytech | null>) {
  const planning = ref<Planning | null>(null)
  const isLoading = ref(false)
  const loadingError = ref<string | null>(null)
  let activeRequestId = 0

  watch(
    currentSpeciality,
    async (newSpeciality) => {
      activeRequestId += 1
      const requestId = activeRequestId

      if (!newSpeciality) {
        planning.value = null
        isLoading.value = false
        loadingError.value = null
        return
      }

      isLoading.value = true
      loadingError.value = null

      try {
        const loadedPlanning = await loadPlanning(newSpeciality)
        if (requestId !== activeRequestId) return
        planning.value = loadedPlanning
      } catch (error) {
        if (requestId !== activeRequestId) return
        planning.value = null
        loadingError.value = "Impossible de charger ce planning pour le moment."
        console.error(error)
      } finally {
        if (requestId === activeRequestId) {
          isLoading.value = false
        }
      }
    },
    { immediate: true }
  )

  return { planning, isLoading, loadingError }
}

