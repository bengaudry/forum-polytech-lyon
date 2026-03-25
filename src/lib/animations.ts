export type Animation = {
  name: string
  description: string
  startTime: Date
  endTime: Date
  emojiIcon?: string
  room?: string
}

export const scheduledAnimations: Array<Animation> = [
  {
    emojiIcon: "🎤",
    name: "Présentation des filières",
    description:
      "Découvrez les différentes filières de Polytech Lyon et leurs spécificités lors d'une présentation animée par les étudiants de chaque filière.",
    startTime: new Date(2026, 2, 26, 15, 0),
    endTime: new Date(2026, 2, 26, 15, 15)
  },
  {
    emojiIcon: "❓",
    name: "Quizz",
    description: "Testez vos connaissances au forum et gagnez des prix !",
    startTime: new Date(2026, 2, 26, 15, 0),
    endTime: new Date(2026, 2, 26, 15, 30)
  },
  {
    emojiIcon: "🎤",
    name: "Mot du directeur",
    description:
      "Le directeur de Polytech Lyon, M. Jean-Baptiste POURET ouvrira officiellement le forum en accueillant les visiteurs et en présentant les objectifs de l'événement.",
    startTime: new Date(2026, 2, 26, 15, 30),
    endTime: new Date(2026, 2, 26, 15, 40)
  },
  {
    emojiIcon: "🎤",
    name: "Polyjam",
    description: "Venez écouter le groupe d'artistes de Polytech, le Polyjam",
    startTime: new Date(2026, 2, 26, 17, 0),
    endTime: new Date(2026, 2, 26, 17, 30)
  },
  {
    emojiIcon: "🍹",
    name: "Afterwork",
    description:
      "Venez discuter et échanger avec les stands et les autres visiteurs autour d'un verre !",
    startTime: new Date(2026, 2, 26, 17, 30),
    endTime: new Date(2026, 2, 26, 19, 30)
  }
]

export const continuedAnimations: Array<Animation> = [
  {
    emojiIcon: "📸",
    name: "Stand photos IA",
    description:
      "Générez des photos professionnelles (pour CV, Linkedin...) grâce a l'intelligence artificielle.",
    room: "Salle 126",
    startTime: new Date(2026, 2, 26, 14, 0),
    endTime: new Date(2026, 2, 26, 17)
  },
  {
    emojiIcon: "♟️",
    name: "Polychess",
    description: 'Venez jouer des parties "Blitz" d\'échecs avec Polychess.',
    startTime: new Date(2026, 2, 26, 16, 0),
    endTime: new Date(2026, 2, 26, 17)
  },
  {
    emojiIcon: "🎨",
    name: "Fresque artistique",
    description:
      "Participez a la création d'une fresque artistique collaborative organisée par le BDA.",
    room: "Mur de l'amphi ISTIL",
    startTime: new Date(2026, 2, 26, 14, 0),
    endTime: new Date(2026, 2, 26, 17)
  },
  {
    emojiIcon: "🏎️",
    name: "Exposition PolyMeca",
    description:
      "Venez voir la voiture de course de PolyMeca, l'association de mécanique de l'école, et découvrez les coulisses de sa conception et de sa fabrication.",
    room: "Hall Polytech",
    startTime: new Date(2026, 2, 26, 14, 0),
    endTime: new Date(2026, 2, 26, 17)
  },
  {
    emojiIcon: "📚",
    name: "Atelier CV Anglais",
    description:
      "Venez créer ou faire relire votre CV en Anglais par le service d'orientation de l'université (SOIE) et béneficiez de leurs conseils pour le rendre plus attractif pour les recruteurs internationaux.",
    room: "Hall Polytech",
    startTime: new Date(2026, 2, 26, 14, 0),
    endTime: new Date(2026, 2, 26, 17)
  },
  {
    emojiIcon: "🎁",
    name: "Stand goodies BDE",
    description:
      "Venez faire un tour au stand du BDE pour repartir avec des goodies exclusifs !",
    room: "Hall Polytech",
    startTime: new Date(2026, 2, 26, 14, 0),
    endTime: new Date(2026, 2, 26, 17)
  },
  {
    emojiIcon: "🎲",
    name: "Polygames",
    description:
      "Venez jouer a des jeux de société avec Polygames, l'association de jeux de l'école.",
    room: "Hall Polytech",
    startTime: new Date(2026, 2, 26, 14, 0),
    endTime: new Date(2026, 2, 26, 17)
  }
]
