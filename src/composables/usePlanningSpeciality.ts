import { readonly, ref } from 'vue'
import type { SpecialitePolytech } from '@/lib/constants.ts'

const currentSpeciality = ref<SpecialitePolytech | null>(null)

export function usePlanningSpeciality() {
  return {
    currentSpeciality: readonly(currentSpeciality),
    setCurrentSpeciality: (s: SpecialitePolytech | null) => (currentSpeciality.value = s),
  }
}
