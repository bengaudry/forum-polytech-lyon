import type { Speaker } from "./conferenceSpeaker"
import type { SpecialitePolytech } from "./constants"
import infoPlanning from "./conferences/info"
import mamPlanning from "./conferences/mam"
import gbmPlanning from "./conferences/gbm"
import matSirMecaPlanning from "./conferences/matSirMeca"

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

export const plannings: Record<SpecialitePolytech, Planning> = {
  MAM: mamPlanning,
  INFO: infoPlanning,
  MAT: matSirMecaPlanning,
  MECA: matSirMecaPlanning,
  SIR: matSirMecaPlanning,
  GBM: gbmPlanning
}

export function loadPlanning(
  speciality: SpecialitePolytech
): Promise<Planning> {
  const planning = plannings[speciality]
  if (!planning) {
    return Promise.reject(
      new Error(`Planning introuvable pour la filiere ${speciality}`)
    )
  }

  return Promise.resolve(planning)
}
