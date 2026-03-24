import infoLogo from "@/assets/images/logos/polytech/specialites/info-compressed.webp"
import matLogo from "@/assets/images/logos/polytech/specialites/mat-compressed.webp"
import mamLogo from "@/assets/images/logos/polytech/specialites/mam-compressed.webp"
import gbmLogo from "@/assets/images/logos/polytech/specialites/gbm-compressed.webp"
import mecaLogo from "@/assets/images/logos/polytech/specialites/meca-compressed.webp"
import sirLogo from "@/assets/images/logos/polytech/specialites/sir-compressed.webp"

export const POLYTECH_SPECIALITIES = [
  { name: "INFO", logo: infoLogo },
  { name: "MAT", logo: matLogo },
  { name: "MAM", logo: mamLogo },
  { name: "GBM", logo: gbmLogo },
  { name: "MECA", logo: mecaLogo },
  { name: "SIR", logo: sirLogo }
]

export type SpecialitePolytech = (typeof POLYTECH_SPECIALITIES)[number]["name"]
