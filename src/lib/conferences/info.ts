import type { Planning } from "@/lib/plannings.ts"
import { speakers } from "@/lib/conferenceSpeaker.ts"

export default {
  room: "Salle 17",
  events: [
    {
      topic: "Table ronde de Lyon JS",
      startHour: new Date(2026, 3, 26, 9, 0),
      endHour: new Date(2026, 3, 26, 10, 0),
      speakers: [
        speakers["mathieu-mure"],
        speakers["mohamed-djebali"],
        speakers["antoine-caron"]
      ]
    },
    {
      topic: "Présentation de Dattico",
      startHour: new Date(2026, 3, 26, 10, 0),
      endHour: new Date(2026, 3, 26, 10, 30),
      companies: [{ name: "Dattico" }],
      speakers: [speakers["nathan-de-winter"]]
    },
    {
      topic: "Table ronde avec des ingénieurs de Thelio",
      startHour: new Date(2026, 3, 26, 10, 30),
      endHour: new Date(2026, 3, 26, 11, 0),
      companies: [{ name: "Thelio" }],
      speakers: [
        speakers["laura-gueno"],
        speakers["diane-forin"],
        speakers["mathieu-ariaux"]
      ]
    },
    {
      topic: "Présentation de Vicinity",
      startHour: new Date(2026, 3, 26, 11, 30),
      endHour: new Date(2026, 3, 26, 12),
      companies: [{ name: "Vicinity" }]
    }
  ]
} as Planning
