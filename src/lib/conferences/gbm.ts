import { speakers } from "@/lib/conferenceSpeaker.ts"
import type { Planning } from "@/lib/plannings.ts"

export default {
  room: "Salle 15",
  events: [
    {
      topic: "Présentation de HeCaPP",
      startHour: new Date(2026, 3, 26, 11, 30),
      endHour: new Date(2026, 3, 26, 12, 0),
      companies: [{ name: "HeCaPP" }],
      speakers: [speakers["alice-maquestiau"], speakers["jean-de-meersman"]]
    }
  ]
} as Planning
