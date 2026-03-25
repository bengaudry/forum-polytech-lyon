import type { Speaker } from "./conferenceSpeaker"
import type { SpecialitePolytech } from "./constants"

export type PlanningEvent = {
  topic?: string
  startHour: Date
  endHour: Date
  companies?: { name: string; logo?: string }[]
  speakers?: Speaker[]
}

export type Planning = {
  room: string
  events: PlanningEvent[]
}

export type PlanningLoader = () => Promise<Planning>

export const plannings: Record<SpecialitePolytech, PlanningLoader> = {
  MAM: () => import("./conferences/mam").then((module) => module.default),
  INFO: () => import("./conferences/info").then((module) => module.default),
  MAT: () =>
    import("./conferences/matSirMeca").then((module) => module.default),
  MECA: () =>
    import("./conferences/matSirMeca").then((module) => module.default),
  SIR: () =>
    import("./conferences/matSirMeca").then((module) => module.default),
  GBM: () => import("./conferences/gbm").then((module) => module.default)
}

const planningCache = new Map<SpecialitePolytech, Promise<Planning>>()

export function loadPlanning(
  speciality: SpecialitePolytech
): Promise<Planning> {
  const existingPlanning = planningCache.get(speciality)
  if (existingPlanning) return existingPlanning

  const planningLoader = plannings[speciality]
  if (!planningLoader) {
    return Promise.reject(
      new Error(`Planning introuvable pour la filiere ${speciality}`)
    )
  }

  const loadingPlanning = planningLoader()
  planningCache.set(speciality, loadingPlanning)
  return loadingPlanning
}
