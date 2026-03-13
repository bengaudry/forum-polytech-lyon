export const POLYTECH_SPECIALITIES = [
  { name: 'INFO', logo: '/images/specialites/info.png' },
  { name: 'MAT', logo: '/images/specialites/mat.png' },
  { name: 'MAM', logo: '/images/specialites/mam.png' },
  { name: 'GBM', logo: '/images/specialites/gbm.png' },
  { name: 'MECA', logo: '/images/specialites/meca.png' },
  { name: 'SIR', logo: '/images/specialites/sir.png' },
]

export type SpecialitePolytech = (typeof POLYTECH_SPECIALITIES)[number]['name']
