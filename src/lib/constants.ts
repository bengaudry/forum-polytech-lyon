import infoLogo from "/images/logos/specialites/info-compressed.webp"
import matLogo from "/images/logos/specialites/mat-compressed.webp"
import mamLogo from "/images/logos/specialites/mam-compressed.webp"
import gbmLogo from "/images/logos/specialites/gbm-compressed.webp"
import mecaLogo from "/images/logos/specialites/meca-compressed.webp"
import sirLogo from "/images/logos/specialites/sir-compressed.webp"

export const POLYTECH_SPECIALITIES = [
  { name: "INFO", logo: infoLogo },
  { name: "MAT", logo: matLogo },
  { name: "MAM", logo: mamLogo },
  { name: "GBM", logo: gbmLogo },
  { name: "MECA", logo: mecaLogo },
  { name: "SIR", logo: sirLogo }
]

export type SpecialitePolytech = (typeof POLYTECH_SPECIALITIES)[number]["name"]
