import infoLogo from "/images/specialites/info.png"
import matLogo from '/images/specialites/mat.png'
import mamLogo from '/images/specialites/mam.png'
import gbmLogo from '/images/specialites/gbm.png'
import mecaLogo from '/images/specialites/meca.png'
import sirLogo from '/images/specialites/sir.png'

export const POLYTECH_SPECIALITIES = [
  { name: 'INFO', logo: infoLogo },
  { name: 'MAT', logo: matLogo },
  { name: 'MAM', logo: mamLogo },
  { name: 'GBM', logo: gbmLogo },
  { name: 'MECA', logo: mecaLogo },
  { name: 'SIR', logo: sirLogo },
]

export type SpecialitePolytech = (typeof POLYTECH_SPECIALITIES)[number]['name']
