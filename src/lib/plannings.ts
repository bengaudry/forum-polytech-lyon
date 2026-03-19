import type { SpecialitePolytech } from './constants'

export type PlanningEvent = {
  startHour: Date
  endHour: Date
  companies?: { name: string; logo?: string }[]
  speakers?: { name: string; details?: string }[]
}

export const plannings: Record<SpecialitePolytech, Array<PlanningEvent>> = {
  MAM: [
    {
      startHour: new Date(2026, 3, 26, 9, 0),
      endHour: new Date(2026, 3, 26, 10, 0),
      companies: [{ name: 'Thelio', logo: '/images/logos/compressed/thelio.png' }],
    },
    {
      startHour: new Date(2026, 3, 26, 10, 0),
      endHour: new Date(2026, 3, 26, 11, 0),
      companies: [{ name: 'Dattico', logo: '/images/logos/originals/dattico.svg' }],
    },
    {
      startHour: new Date(2026, 3, 26, 11, 30),
      endHour: new Date(2026, 3, 26, 12, 30),
      speakers: [{ name: 'Ambroise Kitohou' }, { name: 'Cheikh Fall', details: 'Promotion 2025' }],
    },
  ],
  INFO: [
    {
      startHour: new Date(2026, 3, 26, 9, 0),
      endHour: new Date(2026, 3, 26, 10, 0),
      speakers: [{ name: 'Mathieu Mure' }, { name: 'Mohamed Djebali' }, { name: 'Antoine Caron' }],
    },
    {
      startHour: new Date(2026, 3, 26, 11, 0),
      endHour: new Date(2026, 3, 26, 11, 30),
      companies: [{ name: 'Dattico' }],
    },
    {
      startHour: new Date(2026, 3, 26, 11, 30),
      endHour: new Date(2026, 3, 26, 12, 30),
      companies: [{ name: 'Vicinity' }],
    },
  ],
  MAT: [
    {
      startHour: new Date(2026, 3, 26, 9, 0),
      endHour: new Date(2026, 3, 26, 10, 0),
      companies: [{ name: 'Aero' }],
    },
    {
      startHour: new Date(2026, 3, 26, 10, 0),
      endHour: new Date(2026, 3, 26, 11, 0),
      companies: [{ name: 'Andrice' }, { name: 'Basseti' }, { name: 'Vicinity' }],
    },
    {
      startHour: new Date(2026, 3, 26, 11, 30),
      endHour: new Date(2026, 3, 26, 12, 30),
      companies: [{ name: 'SFEN' }],
    },
  ],
  MECA: [
    {
      startHour: new Date(2026, 3, 26, 9, 0),
      endHour: new Date(2026, 3, 26, 10, 0),
      companies: [{ name: 'Aero' }],
    },
    {
      startHour: new Date(2026, 3, 26, 10, 0),
      endHour: new Date(2026, 3, 26, 11, 0),
      companies: [{ name: 'Andrice' }, { name: 'Basseti' }, { name: 'Vicinity' }],
    },
    {
      startHour: new Date(2026, 3, 26, 11, 0),
      endHour: new Date(2026, 3, 26, 11, 30),
      speakers: [
        { name: 'Damien Cabut', details: 'Promotion 2017' },
        { name: 'Christophe Garnier', details: 'Promotion 1995' },
      ],
    },
    {
      startHour: new Date(2026, 3, 26, 11, 30),
      endHour: new Date(2026, 3, 26, 12, 30),
      companies: [{ name: 'SFEN' }],
    },
  ],
  SIR: [
    {
      startHour: new Date(2026, 3, 26, 9, 0),
      endHour: new Date(2026, 3, 26, 10, 0),
      companies: [{ name: 'Aero' }],
    },
    {
      startHour: new Date(2026, 3, 26, 10, 0),
      endHour: new Date(2026, 3, 26, 11, 0),
      companies: [{ name: 'Andrice' }, { name: 'Basseti' }, { name: 'Vicinity' }],
    },
    {
      startHour: new Date(2026, 3, 26, 11, 30),
      endHour: new Date(2026, 3, 26, 12, 30),
      companies: [{ name: 'ABB' }],
    },
  ],
  GBM: [
    {
      startHour: new Date(2026, 3, 26, 11, 30),
      endHour: new Date(2026, 3, 26, 12, 30),
      companies: [{ name: 'Hecapp' }],
    },
  ],
}
