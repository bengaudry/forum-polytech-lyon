import { speakers, type Speaker } from "./conferenceSpeaker"
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

export const plannings: Record<SpecialitePolytech, Planning> = {
  MAM: {
    room: "Salle 18",
    events: [
      {
        startHour: new Date(2026, 3, 26, 10, 0),
        endHour: new Date(2026, 3, 26, 10, 30),
        companies: [{ name: "Thelio", logo: "/images/logos/compressed/thelio.png" }],
        speakers: [
          speakers["laura-gueno"],
          speakers["diane-forin"],
          speakers["mathieu-ariaux"]
        ]
      },
      {
        startHour: new Date(2026, 3, 26, 10, 30),
        endHour: new Date(2026, 3, 26, 11, 0),
        speakers: [
          speakers["ambroise-kitohou"],
          speakers["cheikh-fall"],
          speakers["nathan-de-winter"]
        ]
      },
      {
        topic: "Salle 17",
        startHour: new Date(2026, 3, 26, 11, 30),
        endHour: new Date(2026, 3, 26, 12),
        companies: [{ name: "Vicinity" }]
      }
    ]
  },
  INFO: {
    room: "Salle 17",
    events: [
      {
        startHour: new Date(2026, 3, 26, 9, 0),
        endHour: new Date(2026, 3, 26, 10, 0),
        speakers: [
          speakers["mathieu-mure"],
          speakers["mohamed-djebali"],
          speakers["antoine-caron"]
        ]
      },
      {
        startHour: new Date(2026, 3, 26, 10, 0),
        endHour: new Date(2026, 3, 26, 10, 30),
        companies: [{ name: "Dattico" }],
        speakers: [
          speakers["nathan-de-winter"]
        ]
      },
      {
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
        startHour: new Date(2026, 3, 26, 11, 30),
        endHour: new Date(2026, 3, 26, 12),
        companies: [{ name: "Vicinity" }]
      }
    ]
  },
  MAT: {
    room: "Amphi ISTIL",
    events: [
      {
        startHour: new Date(2026, 3, 26, 9, 0),
        endHour: new Date(2026, 3, 26, 10, 0),
        speakers: [
         speakers["christophe-ulrich"],
          speakers["jean-fromion"]
        ]
      },
      {
        topic: "Table ronde - Ingénieur d'affaires",
        startHour: new Date(2026, 3, 26, 10, 0),
        endHour: new Date(2026, 3, 26, 11, 0),
        companies: [{ name: "Andrice" }, { name: "Basseti" }, { name: "Vicinity" }]
      },
      {
        startHour: new Date(2026, 3, 26, 11, 0),
        endHour: new Date(2026, 3, 26, 11, 30),
        speakers: [
          speakers["damien-cabut"],
          speakers["christophe-garnier"]
        ]
      },
      {
        topic: "Métiers du nucléaire",
        startHour: new Date(2026, 3, 26, 11, 30),
        endHour: new Date(2026, 3, 26, 12, 30),
        companies: [{ name: "SFEN" }],
        speakers: [speakers["jean-luc-bayle"], speakers["thierry-caillon"]]
      }
    ]
  },
  MECA: {
    room: "Amphi ISTIL",
    events: [
      {
        startHour: new Date(2026, 3, 26, 9, 0),
        endHour: new Date(2026, 3, 26, 10, 0),
        speakers: [
          speakers["christophe-ulrich"],
          speakers["jean-fromion"]
        ]
      },
      {
        topic: "Table ronde - Ingénieur d'affaires",
        startHour: new Date(2026, 3, 26, 10, 0),
        endHour: new Date(2026, 3, 26, 11, 0),
        companies: [{ name: "Andrice" }, { name: "Basseti" }, { name: "Vicinity" }]
      },
      {
        startHour: new Date(2026, 3, 26, 11, 0),
        endHour: new Date(2026, 3, 26, 11, 30),
        speakers: [
          speakers["damien-cabut"],
          speakers["christophe-garnier"]
        ]
      },
      {
        topic: "Métiers du nucléaire",
        startHour: new Date(2026, 3, 26, 11, 30),
        endHour: new Date(2026, 3, 26, 12, 30),
        companies: [{ name: "SFEN" }],
        speakers: [speakers["jean-luc-bayle"], speakers["thierry-caillon"]]
      }
    ]
  },
  SIR: {
    room: "Amphi ISTIL",
    events: [
      {
        startHour: new Date(2026, 3, 26, 9, 0),
        endHour: new Date(2026, 3, 26, 10, 0),
        speakers: [
          speakers["christophe-ulrich"],
          speakers["jean-fromion"]
        ]
      },
      {
        topic: "Table ronde - Ingénieur d'affaires",
        startHour: new Date(2026, 3, 26, 10, 0),
        endHour: new Date(2026, 3, 26, 11, 0),
        companies: [{ name: "Andrice" }, { name: "Basseti" }, { name: "Vicinity" }]
      },
      {
        startHour: new Date(2026, 3, 26, 11, 0),
        endHour: new Date(2026, 3, 26, 11, 30),
        speakers: [
          speakers["damien-cabut"],
          speakers["christophe-garnier"]
        ]
      },
      {
        topic: "Métiers du nucléaire",
        startHour: new Date(2026, 3, 26, 11, 30),
        endHour: new Date(2026, 3, 26, 12, 30),
        companies: [{ name: "SFEN" }],
        speakers: [speakers["jean-luc-bayle"], speakers["thierry-caillon"]]
      }
    ]
  },
  GBM: {
    room: "Salle 15",
    events: [
      {
        startHour: new Date(2026, 3, 26, 11, 30),
        endHour: new Date(2026, 3, 26, 12, 0),
        companies: [{ name: "Hecapp" }],
        speakers: [speakers["alice-maquestiau"], speakers["jean-de-meersman"]]
      }
    ]
  }
}
