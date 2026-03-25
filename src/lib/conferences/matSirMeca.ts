import type { Planning } from "@/lib/plannings.ts"
import { speakers } from "@/lib/conferenceSpeaker.ts"

export default {
  room: "Amphi ISTIL",
  events: [
    {
      topic: "Discussion sur l'aéronautique",
      startHour: new Date(2026, 3, 26, 9, 0),
      endHour: new Date(2026, 3, 26, 10, 0),
      speakers: [speakers["christophe-ulrich"], speakers["jean-fromion"]]
    },
    {
      topic: "Table ronde - Ingénieur d'affaires",
      startHour: new Date(2026, 3, 26, 10, 0),
      endHour: new Date(2026, 3, 26, 11, 0),
      companies: [
        { name: "Andrice" },
        { name: "Basseti" },
        { name: "Vicinity" }
      ]
    },
    {
      topic: "Table ronde",
      startHour: new Date(2026, 3, 26, 11, 0),
      endHour: new Date(2026, 3, 26, 11, 30),
      speakers: [speakers["damien-cabut"], speakers["christophe-garnier"]]
    },
    {
      topic: "Métiers du nucléaire",
      startHour: new Date(2026, 3, 26, 11, 30),
      endHour: new Date(2026, 3, 26, 12, 30),
      companies: [{ name: "SFEN" }],
      speakers: [speakers["jean-luc-bayle"], speakers["thierry-caillon"]]
    }
  ]
} as Planning
