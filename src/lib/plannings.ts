import type { SpecialitePolytech } from "./constants"

export type PlanningEvent = {
  topic?: string
  startHour: Date
  endHour: Date
  companies?: { name: string; logo?: string }[]
  speakers?: { name: string; details?: string }[]
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
        companies: [
          { name: "Thelio", logo: "/images/logos/compressed/thelio.png" }
        ],
        speakers: [
          { name: "Laure GUENO" },
          { name: "Diane FORIN" },
          { name: "Mathieu ARIAUX" }
        ]
      },
      {
        startHour: new Date(2026, 3, 26, 10, 30),
        endHour: new Date(2026, 3, 26, 11, 0),
        speakers: [
          { name: "Ambroise Kitohou", details: "Shippingo" },
          { name: "Cheikh Fall", details: "CS Group - Promotion 2025" },
          { name: "Nathan DE WINTER", details: "Dattico" }
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
          { name: "Mathieu Mure", details: "Disneyland Paris" },
          { name: "Mohamed Djebali", details: "Worldline" },
          { name: "Antoine Caron", details: "Scaleway" }
        ]
      },
      {
        startHour: new Date(2026, 3, 26, 10, 0),
        endHour: new Date(2026, 3, 26, 10, 30),
        companies: [{ name: "Dattico" }],
        speakers: [{ name: "Nathan DE WINTER" }]
      },
      {
        startHour: new Date(2026, 3, 26, 10, 30),
        endHour: new Date(2026, 3, 26, 11, 0),
        companies: [{ name: "Thelio" }],
        speakers: [{ name: "Laura GUENO" }, { name: "Diane FORIN" }, { name: "Mathieu ARIAUX" }]
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
          { name: "Christophe ULRICH", details: "AVNIR Group" },
          {
            name: "Jean FROMION",
            details: "L'académie aéronautique et spatiale"
          }
        ]
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
        startHour: new Date(2026, 3, 26, 11, 0),
        endHour: new Date(2026, 3, 26, 11, 30),
        speakers: [
          { name: "Damien CABUT", details: "CADFEM" },
          { name: "Christophe GARNIER", details: "FRAMATOME" }
        ]
      },
      {
        topic: "Métiers du nucléaire",
        startHour: new Date(2026, 3, 26, 11, 30),
        endHour: new Date(2026, 3, 26, 12, 30),
        companies: [{ name: "SFEN" }],
        speakers: [{ name: "Jean-Luc BAYLE" }, { name: "Thierry CAILLON" }]
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
          { name: "Christophe ULRICH", details: "AVNIR Group" },
          {
            name: "Jean FROMION",
            details: "L'académie aéronautique et spatiale"
          }
        ]
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
        startHour: new Date(2026, 3, 26, 11, 0),
        endHour: new Date(2026, 3, 26, 11, 30),
        speakers: [
          { name: "Damien CABUT", details: "CADFEM" },
          { name: "Christophe GARNIER", details: "FRAMATOME" }
        ]
      },
      {
        topic: "Métiers du nucléaire",
        startHour: new Date(2026, 3, 26, 11, 30),
        endHour: new Date(2026, 3, 26, 12, 30),
        companies: [{ name: "SFEN" }],
        speakers: [{ name: "Jean-Luc BAYLE" }, { name: "Thierry CAILLON" }]
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
          { name: "Christophe ULRICH", details: "AVNIR Group" },
          {
            name: "Jean FROMION",
            details: "L'académie aéronautique et spatiale"
          }
        ]
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
        startHour: new Date(2026, 3, 26, 11, 0),
        endHour: new Date(2026, 3, 26, 11, 30),
        speakers: [
          { name: "Damien CABUT", details: "CADFEM" },
          { name: "Christophe GARNIER", details: "FRAMATOME" }
        ]
      },
      {
        topic: "Métiers du nucléaire",
        startHour: new Date(2026, 3, 26, 11, 30),
        endHour: new Date(2026, 3, 26, 12, 30),
        companies: [{ name: "SFEN" }],
        speakers: [{ name: "Jean-Luc BAYLE" }, { name: "Thierry CAILLON" }]
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
        speakers: [{ name: "Alice MAQUESTIAU" }, { name: "Jean DE MEERSMAN" }]
      }
    ]
  }
}
