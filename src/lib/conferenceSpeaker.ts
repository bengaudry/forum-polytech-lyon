export type Speaker = { name: string; details?: string; job?: string; linkedin?: string }

export const speakers = {
  "laura-gueno": {
    name: "Laura GUENO"
  },
  "diane-forin": {
    name: "Diane FORIN",
    job: "Consultante Data",
    linkedin: "https://www.linkedin.com/in/diane-forin-0601a8124/"
  },
  "mathieu-ariaux": {
    name: "Mathieu ARIAUX",
    job: "Consultant data senior",
    linkedin: "https://www.linkedin.com/in/mathieu-ariaux-8bb186129/"
  },
  "ambroise-kitohou": {
    name: "Ambroise KITOHOU",
    details: "Shippingo",
    job: "Financial Data Scientist",
    linkedin: "https://www.linkedin.com/in/ambroise-kitohou-cqf-a3ba4b14a/"
  },
  "cheikh-fall": {
    name: "Cheikh FALL",
    details: "CS Group - Promotion 2025",
    job: "Ingénieur d'études et de développement",
    linkedin: "https://www.linkedin.com/in/cheikh-fall-a02194224/"
  },
  "nathan-de-winter": {
    name: "Nathan DE WINTER",
    details: "Dattico",
    job: "Data Scientist",
    linkedin: "https://www.linkedin.com/in/nathan-de-winter/"
  },
  "mathieu-mure": {
    name: "Mathieu MURE",
    details: "Disneyland Paris",
    job: "Front-end staff engineer",
    linkedin: "https://www.linkedin.com/in/mathieu-mure/"
  },
  "mohamed-djebali": {
    name: "Mohamed DJEBALI",
    details: "Worldline",
    job: "DevOps and A.I Engineer",
    linkedin: "https://www.linkedin.com/in/mohamed-djebali-devops/"
  },
  "antoine-caron": {
    name: "Antoine CARON",
    details: "Scaleway",
    job: "Senior frontend dev",
    linkedin: "https://www.linkedin.com/in/antoine-caron-slash/"
  },
  "jean-fromion": {
    name: "Jean FROMION",
    details: "Académie aéronautique et spatiale",
    job: "Directeur général",
    linkedin: "https://www.linkedin.com/in/jean-fromion/"
  },
  "christophe-ulrich": {
    name: "Christophe ULRICH",
    details: "AVNIR Group",
    job: "Président AVNIR Group",
    linkedin: "https://www.linkedin.com/in/christophe-ulrich-b6287b48/"
  },
  "damien-cabut": { name: "Damien CABUT", details: "CADFEM" },
  "christophe-garnier": {
    name: "Christophe GARNIER",
    details: "FRAMATOME",
    job: "Mechanical Engineer",
    linkedin: "https://www.linkedin.com/in/christophe-garnier-627224143/"
  },
  "jean-luc-bayle": {
    name: "Jean-Luc BAYLE"
  },
  "thierry-caillon": {
    name: "Thierry CAILLON",
    job: "Président chez Sfen Rhône-Ain-Loire",
    linkedin: "https://www.linkedin.com/in/thierry-caillon/"
  },
  "alice-maquestiau": { name: "Alice MAQUESTIAU" },
  "jean-de-meersman": { name: "Jean DE MEERSMAN" }
} as const
