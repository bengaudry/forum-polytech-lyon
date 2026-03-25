import type { Planning } from "@/lib/plannings.ts"
import { speakers } from "@/lib/conferenceSpeaker.ts"

export default {
  room: "Salle 18",
  events: [
    {
      topic: "Table ronde Thelio",
      startHour: new Date(2026, 3, 26, 10, 0),
      endHour: new Date(2026, 3, 26, 10, 30),
      companies: [{ name: "Thelio", logo: "/images/logos/compressed/thelio.png" }],
      speakers: [speakers["laura-gueno"], speakers["diane-forin"], speakers["mathieu-ariaux"]]
    },
    {
      topic: "Table ronde",
      startHour: new Date(2026, 3, 26, 10, 30),
      endHour: new Date(2026, 3, 26, 11, 0),
      speakers: [
        speakers["ambroise-kitohou"],
        speakers["cheikh-fall"],
        speakers["nathan-de-winter"]
      ]
    },
    {
      topic: "Présentation Vicinity - Salle 17",
      startHour: new Date(2026, 3, 26, 11, 30),
      endHour: new Date(2026, 3, 26, 12),
      companies: [{ name: "Vicinity" }]
    }
  ]
} as Planning