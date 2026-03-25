import agixisLogo from "@/assets/images/logos/entreprises/agixis.webp"
import phaeraLogo from "@/assets/images/logos/entreprises/pharea.webp"
import dymascoLogo from "@/assets/images/logos/entreprises/dymasco.webp"
import carrierLogo from "@/assets/images/logos/entreprises/carrier.webp"
import hecappLogo from "@/assets/images/logos/entreprises/hecapp.webp"
import atosLogo from "@/assets/images/logos/entreprises/atos.webp"
import bassettiLogo from "@/assets/images/logos/entreprises/bassetti.webp"
import worldlineLogo from "@/assets/images/logos/entreprises/worldline.webp"
import thelioLogo from "@/assets/images/logos/entreprises/thelio.webp"
import lesMotsJustesLogo from "@/assets/images/logos/entreprises/les-mots-justes.webp"
import vicinityLogo from "@/assets/images/logos/entreprises/vicinity.webp"
import datticoLogo from "@/assets/images/logos/entreprises/dattico.svg"
import capgeminiLogo from "@/assets/images/logos/entreprises/capgemini.webp"
import amiltoneLogo from "@/assets/images/logos/entreprises/amiltone.webp"
import g2sLogo from "@/assets/images/logos/entreprises/g2s.webp"
import coexyaLogo from "@/assets/images/logos/entreprises/coexya.webp"
import nextDecisionLogo from "@/assets/images/logos/entreprises/next-decision.webp"
import parlymLogo from "@/assets/images/logos/entreprises/parlym.svg"
import soprasteriaLogo from "@/assets/images/logos/entreprises/soprasteria.webp"
import technordLogo from "@/assets/images/logos/entreprises/technord.webp"
import lhoistLogo from "@/assets/images/logos/entreprises/lhoist.svg"
import sfenLogo from "@/assets/images/logos/entreprises/sfen.webp"
import cgiLogo from "@/assets/images/logos/entreprises/cgi.webp"
import soieLogo from "@/assets/images/logos/entreprises/soie.webp"
import polyencoLogo from "@/assets/images/logos/entreprises/polyenco.webp"
import codeoLogo from "@/assets/images/logos/entreprises/codeo.webp"
// import stepoutAbroadLogo from "@/assets/images/logos/entreprises/stepout-abroad.webp"
import reelLogo from "@/assets/images/logos/entreprises/reel.webp"
import oranoLogo from "@/assets/images/logos/entreprises/orano.webp"
import mindrayLogo from "@/assets/images/logos/entreprises/mindray.webp"
import iesfLogo from "@/assets/images/logos/entreprises/iesf.webp"
import rirLogo from "@/assets/images/logos/entreprises/rir.webp"
import aplebLogo from "@/assets/images/logos/entreprises/apleb.webp"
import orangeLogo from "@/assets/images/logos/entreprises/orange.svg"
// import alispharmLogo from '@/assets/images/logos/entreprises/alispharm.svg'
// import wimovaLogo from '@/assets/images/logos/entreprises/wimova.webp'
// import sqliLogo from "@/assets/images/logos/entreprises/sqli.webp"
// import assystemLogo from '@/assets/images/logos/entreprises/assystem.svg'
import aiplLogo from "@/assets/images/logos/entreprises/aipl.webp"
import abmiLogo from "@/assets/images/logos/entreprises/abmi.svg"
import catsLogo from "@/assets/images/logos/entreprises/cats.webp"
import andriceLogo from "@/assets/images/logos/entreprises/andrice.webp"
import bdeLogo from "@/assets/images/logos/entreprises/bde.webp"
import apogeeLogo from "@/assets/images/logos/entreprises/apogee.webp"

export type CompanyData = {
  name: string
  shortDescription: string
  relatedFields: ("INFO" | "GBM" | "MAM" | "SIR" | "MECA" | "MAT")[]
  logo: string
  details: {
    websiteUrl?: string
    careersPortalUrl?: string
    presentation: string
    degreesResearched?: string[]
    points: Array<{
      title: string
      content: string
    }>
    offers?: Array<{
      type: "alternance" | "stage"
      title: string
      file: string
    }>
  }
}

export const companies: Record<string, CompanyData> = {
  agixis: {
    name: "Agixis",
    shortDescription:
      "Un expert du développement logiciel spécialisé dans les secteurs innovants de la santé, de l'IoT et de la transformation digitale.",
    logo: agixisLogo,
    relatedFields: ["INFO", "GBM", "MAM", "SIR"],
    details: {
      websiteUrl: "https://www.agixis.com",
      presentation: "Développement logiciel dans la santé, l'IoT et la transformation digitale",
      degreesResearched: ["Bac +4", "Bac +5", "Diplomé", "Bac +3"],
      points: [
        {
          title: "Secteurs d'avenir",
          content:
            "Spécialisation dans la santé et l'IoT, offrant des projets à fort impact sociétal et technologique."
        },
        {
          title: "Transformation digitale",
          content:
            "Opportunité de participer activement à la modernisation des processus de différents clients."
        },
        {
          title: "Développement logiciel",
          content:
            "Environnement idéal pour consolider ses compétences en ingénierie d'études et développement."
        },
        {
          title: "Diversité des profils",
          content: "Entreprise ouverte aux étudiants et jeunes diplômés (Bac+3 à Bac+5)."
        }
      ],
      offers: [
        {
          type: "alternance",
          title: "Alternance Ingénieur études et Développement (F/H)",
          file: "offers/agixis/Alt IED (HF) AGIXIS.docx"
        }
      ]
    }
  },
  pharea: {
    name: "PHAREA",
    shortDescription:
      "Un groupe multi-expertises accompagnant les grands projets industriels via la conception, la simulation numérique et le génie électrique.",
    logo: phaeraLogo,
    relatedFields: ["SIR", "MECA"],
    details: {
      websiteUrl: "https://www.pharea.com/",
      presentation:
        "Le Groupe Pharea accompagne ses clients dans la mise en œuvre des projets industriels. Spécialisés dans la conception et la simulation numérique, nous avons élargi notre expertise pour offrir des solutions en génie industriel et génie E.I.A* et télécoms & réseaux à travers nos différentes entités. Aujourd'hui, we proposons également des logiciels de simulation numérique. \n\n* électricité, instrumentation, automatisme",
      degreesResearched: ["Bac +5"],
      points: [
        {
          title: "Excellence technique en calcul",
          content:
            "Maîtrise d'ANSYS, Abaqus, LS-DYNA pour des calculs statiques, dynamiques, sismiques et multiphysiques (fluides et structures)."
        },
        {
          title: "5 marques complémentaires",
          content:
            "Pharea (mécanique), Younicorn (industriel), Anthil (électrique), Optedis (télécoms), Simu.1 (distribution logiciels MSC Software et Hexagon)."
        },
        {
          title: "Secteurs exigeants",
          content:
            "Nucléaire, aéronautique, énergie, automobile, ferroviaire, BTP, médical et procédés industriels."
        },
        {
          title: "6 bureaux d'études spécialisés",
          content:
            "Conception mécanique, calculs EF, plasturgie, génie civil, installation générale et charpente métallique."
        },
        {
          title: "Missions types",
          content:
            "Ingénieur calculs mécaniques, Ingénieur simulation numérique, Ingénieur méthodes, Automaticien, Chef de projet industriel, Ingénieur qualité nucléaire."
        }
      ],
      offers: []
    }
  },
  dymasco: {
    name: "Dymasco",
    shortDescription:
      "Spécialiste de l'Industrie 4.0 et partenaire de Dassault Systèmes, pilotant la transformation digitale des usines via des solutions MES.",
    logo: dymascoLogo,
    relatedFields: ["INFO", "MAM", "SIR"],
    details: {
      websiteUrl: "https://www.dymasco.com/fr",
      careersPortalUrl: "https://dymasco.zohorecruit.eu/jobs/offres-emploi",
      presentation:
        "Dymasco est spécialisée dans les projets industriels IT et la digitalisation des usines.\nPartenaire de Dassault Systèmes, nous déployons des solutions logicielles du portefeuille DELMIA au cœur des environnements de production français et internationaux.\n\nNous accompagnons les industriels dans la mise en place de systèmes MES (Manufacturing Execution System) pour piloter, tracer et optimiser la production en temps réel.\nNos projets combinent informatique, data et compréhension fine des processus industriels.\n\nNos équipes interviennent de l'analyse du besoin jusqu'au déploiement et à l'amélioration continue des solutions.\nRejoindre Dymasco, c'est contribuer concrètement à la transformation digitale de l'industrie et travailler sur des projets techniques à fort impact opérationnel.",
      degreesResearched: ["Bac +5", "Diplomé"],
      points: [
        {
          title: "Industrie 4.0",
          content:
            "Cœur de métier axé sur la digitalisation des usines et le déploiement de systèmes MES et IT industriels."
        },
        {
          title: "Partenaire Dassault Systèmes",
          content:
            "Utilisation d'un portefeuille logiciel reconnu (DELMIA) dans des contextes internationaux."
        },
        {
          title: "Approche pluridisciplinaire",
          content:
            "Projets alliant informatique, gestion des données (data) et expertise des processus industriels."
        },
        {
          title: "Cycle en V et Agilité",
          content: "Intervention complète, de l'analyse du besoin jusqu'à l'amélioration continue."
        }
      ],
      offers: [
        {
          type: "stage",
          title: "Développement et amélioration continue des assets internes",
          file: "offers/dymasco/Stage pole Asset.pdf"
        },
        {
          type: "stage",
          title:
            "Intégration et montée de version du logiciel de système d'exécution de la fabrication (MES) DELMIA Apriso",
          file: "offers/dymasco/Stage pole Run.pdf"
        }
      ]
    }
  },
  carrier: {
    name: "Carrier",
    shortDescription:
      "Un leader industriel mondial dédié à la conception et fabrication d'équipements thermiques de haute technicité pour le CVC et la réfrigération.",
    logo: carrierLogo,
    relatedFields: ["INFO", "MAM", "SIR", "MAT", "MECA"],
    details: {
      websiteUrl: "https://www.carrier.com/commercial/fr/fr/a-propos/carrier-france/",
      careersPortalUrl: "https://jobs.carrier.com/fr/recherche-d%27offres",
      presentation:
        "Le site Carrier de Montluel est un site industriel majeur du groupe Carrier, spécialisé dans la conception, la fabrication et le développement d'équipements aérauliques et frigorifiques industriels, principalement dans le domaine du CVC (Chauffage, Ventilation, Climatisation) et de la réfrigération.",
      degreesResearched: ["Bac +5"],
      points: [
        {
          title: "Site industriel d'envergure",
          content:
            "Intégration sur le site de Montluel reconnu pour la conception et la fabrication CVC / Réfrigération."
        },
        {
          title: "Large panel de métiers",
          content:
            "Des offres multiples couvrant la R&D, l'industrialisation, la qualité, la supply chain et les logiciels embarqués."
        },
        {
          title: "Enjeux thermodynamiques",
          content: "Fort besoin d'expertises en mécanique, acoustique, modélisation et énergies."
        },
        {
          title: "Rôle clé dans le cycle de production",
          content:
            "Opportunité de participer directement à la chaîne de conception de produits industriels majeurs."
        }
      ],
      offers: []
    }
  },
  hecapp: {
    name: "Healthcare Public Procurement - HeCaPP",
    shortDescription:
      "Une centrale d'achat stratégique dédiée au secteur de la santé, alliant expertise réglementaire et gestion des approvisionnements publics.",
    logo: hecappLogo,
    relatedFields: ["GBM"],
    details: {
      websiteUrl: "https://hecapp.be/",
      presentation:
        "L'HeCaPP est une centrale d'achats selon l'article 2, 6°a et 7°b de la loi du 17 juin 2016 relative aux marchés publics active dans le domaine des soins de santé.",
      degreesResearched: ["Bac +4"],
      points: [
        {
          title: "Achats de santé publique",
          content:
            "Au cœur de l'approvisionnement des institutions de soins, avec un impact direct sur le système de santé."
        },
        {
          title: "Dimension réglementaire",
          content: "Forte implication des cadres légaux relatifs aux marchés publics (Loi de 2016)."
        },
        {
          title: "Fonctions supports et achats",
          content:
            "Une opportunité pour se former dans la fonction d'acheteur public pour des profils transverses."
        },
        {
          title: "Poste formateur",
          content:
            "Environnement propice aux stages avec une exigence de montée en compétences (niveau Bac+4)."
        }
      ],
      offers: []
    }
  },
  atos: {
    name: "Atos",
    shortDescription:
      "Leader international du numérique transformant la société à travers le cloud, la cybersécurité, l'IA et la décarbonation.",
    logo: atosLogo,
    relatedFields: ["INFO"],
    details: {
      websiteUrl: "https://atos.net/fr/",
      careersPortalUrl: "https://atos.net/fr/rejoignez-nous/stagiaires-et-alternants",
      presentation:
        "Nous sommes une équipe de 72 000 collaborateurs passionnés avec une ambition claire : utiliser le numérique pour faire avancer ce qui compte pour nos clients et la société dans 68 pays.\nChaque jour, nous travaillons ensemble pour créer des fondations numériques fiables et évolutives pour les stands, les institutions et les communautés du monde entier. \nAvec nos experts et nos partenaires de classe mondiale, nous développons des solutions numériques du quotidien à la mission critique - en matière d'intelligence artificielle, de cloud hybride, de gestion des infrastructures, de décarbonation et d'expérience collaborateur.\n\nNotre objectif ? \nAvoir un impact significatif pour nos clients et l'ensemble de la société. C'est ce que nous appelons le « Power of We ».\n\nChez Atos Tech Foundations, nous concevons des solutions numériques de la vie quotidienne aux activités critiques – en matière d'intelligence artificielle, de cloud hybride, de gestion des infrastructures, de décarbonation et d'expérience utilisateur.",
      degreesResearched: ["Bac +5"],
      points: [
        {
          title: "Envergure internationale",
          content:
            "Groupe de 72 000 collaborateurs répartis dans 68 pays, idéal pour débuter une carrière globale."
        },
        {
          title: "Tech Foundations",
          content:
            "Projets critiques en IA, cloud hybride, infrastructure réseau, cybersécurité et décarbonation."
        },
        {
          title: "Développement et Support",
          content:
            "Offres axées sur le développement d'applications, ainsi que le support N1 et N3 en système et sécurité."
        },
        {
          title: "Culture du « Power of We »",
          content:
            "Accent sur l'impact sociétal, la collaboration interdisciplinaire et l'innovation durable."
        }
      ],
      offers: []
    }
  },
  bassetti: {
    name: "BASSETTI",
    shortDescription:
      "Éditeur de logiciels spécialisé dans la gestion des données techniques et scientifiques pour optimiser la performance industrielle et le PLM.",
    logo: bassettiLogo,
    relatedFields: ["INFO", "GBM", "MAM", "SIR", "MAT", "MECA"],
    details: {
      websiteUrl:
        "https://www.bassetti-group.com/?gad_source=1&gad_campaignid=22580662526&gbraid=0AAAAAqxH0s_lDVIGI9e38-bqFxtlLORgn&gclid=Cj0KCQiAhtvMBhDBARIsAL26pjHCgiq-ptBAd6S2UV018RJ2Whh06bHPLW3Wpz42x7Ly_vQlg0a0EfIaAnuQEALw_wcB",
      presentation:
        "Filiale du Groupe BASSETTI, la société BASSETTI est un acteur majeur dans l'édition et l'intégration de logiciels de pointe dédiés à la gestion de données techniques et scientifiques et à la résolution de problématiques en contexte industriel: gestion du risque industriel, de la production (maintenance, qualité…), des mises en conformité réglementaire, du PLM, des flux d'information en usine, en laboratoire...",
      degreesResearched: ["Bac +4", "Bac +3", "Bac +5"],
      points: [
        {
          title: "Data scientifique et technique",
          content:
            "Acteur de référence pour la gestion de données des environnements R&D et industriels."
        },
        {
          title: "Digitalisation de l'industrie",
          content:
            "Forte présence sur des sujets à forte valeur (PLM, risques industriels, maintenance, conformité, LIMS)."
        },
        {
          title: "Opportunités pour divers niveaux",
          content:
            "Postes accessibles dès Bac+3 jusqu'à Bac+5 (assistants développeurs, chefs de projet, affaires...)."
        },
        {
          title: "Développement & Innovation",
          content:
            "Participation au cycle de création, d'intégration de logiciels ou d'activité de Recherche et Innovation (R&I)."
        }
      ],
      offers: [
        {
          type: "stage",
          title: "INGENIEUR CHEF DE PROJETS (H/F)",
          file: "offers/bassetti/ACP2026.pdf"
        },
        {
          type: "stage",
          title: "INGENIEUR CHEF DE PROJETS (H/F)",
          file: "offers/bassetti/ACP Chine 2026.pdf"
        },
        {
          type: "stage",
          title: "INGÉNIEUR DÉVELOPPEUR FULL-FRONT-BACK (H/F)",
          file: "offers/bassetti/ADEV26.pdf"
        },
        {
          type: "stage",
          title: "INGÉNIEUR DÉVELOPPEUR INTEGRATEUR (H/F)",
          file: "offers/bassetti/ADI26.pdf"
        },
        {
          type: "stage",
          title: "INGÉNIEUR D'AFFAIRES (H/F)",
          file: "AIA26.pdf"
        }
      ]
    }
  },
  worldline: {
    name: "WORLDLINE",
    shortDescription:
      "Leader européen des services de paiement, repoussant les frontières de la fintech, de la blockchain et des transactions numériques sécurisées.",
    logo: worldlineLogo,
    relatedFields: ["INFO"],
    details: {
      websiteUrl: "https://worldline.com/fr-fr/home",
      presentation:
        "Nous façonnons un nouveau monde de paiements et de transactions fiables. Grâce à notre technologie de paiement avancée, à notre expertise en matière de paiements locaux et à nos solutions personnalisées pour des centaines de marchés et d'industries, nous aidons des millions d'stands de toutes tailles à réaliser leurs ambitions - plus rapidement, plus simplement et de manière plus sûre.",
      degreesResearched: ["Bac +4", "Bac +5"],
      points: [
        {
          title: "Paiement et transactions",
          content:
            "Leader européen dans les services de paiement électronique et transactions digitales."
        },
        {
          title: "Haut niveau de sécurité",
          content:
            "Enjeux cruciaux autour de la sécurisation des architectures et de la confidentialité des données."
        },
        {
          title: "Innovation technologique",
          content:
            "Opportunité de travailler sur l'évolution des Fintech, la blockchain et l'open-banking."
        },
        {
          title: "Grande échelle (Scale)",
          content:
            "Projets supportant des millions de transactions par jour, exigeant des performances de pointe."
        }
      ],
      offers: []
    }
  },
  thelio: {
    name: "THELIO",
    shortDescription:
      "Cabinet de conseil 100% data, expert en ingénierie, analytics et intelligence artificielle pour piloter la performance des stands.",
    logo: thelioLogo,
    relatedFields: ["INFO", "MAM"],
    details: {
      websiteUrl: "https://www.thelio.fr/",
      careersPortalUrl: "https://www.welcometothejungle.com/fr/companies/thelio",
      presentation:
        "Thélio est un cabinet de conseil et d'intégration 100 % data, accompagnant les organisations sur toute la chaîne de valeur de leurs données, de la stratégie et de la gouvernance jusqu'à l'ingénierie, l'analytics et les usages IA.\nNotre mission est de démystifier la donnée pour la rendre accessible, exploitable et source de performance pour les stands.\nAvec une équipe d'experts répartie sur plusieurs agences en France, nous aidons nos clients à transformer leurs données en leviers de décision et d'innovation.",
      degreesResearched: ["Bac +5", "Diplomé"],
      points: [
        {
          title: "Expertise 100% Data",
          content:
            "Spécialisation complète sur la chaîne de valeur de la donnée (Stratégie, Ingénierie, Analytics, IA)."
        },
        {
          title: "Variété des métiers",
          content: "Nombreux rôles allant de Data Engineer à Data Scientist et ML Engineer."
        },
        {
          title: "Démocratisation de la donnée",
          content:
            "Objectif affirmé de rendre l'usage des données accessible et performant pour les clients."
        },
        {
          title: "Écosystème Conseil",
          content:
            "Postes en mode agence avec une approche consultative, nécessitant analyse métier et technique."
        }
      ],
      offers: [
        {
          type: "alternance",
          title: "Consultant Data et BI H/F - Alternance",
          file: "offers/thelio/THELIO Consultant Data et BI - Alternance & Stage.pdf"
        }
      ]
    }
  },
  "mots-justes": {
    name: "LES MOTS JUSTES",
    shortDescription:
      "Une experte en relecture et correction professionnelle pour garantir la qualité rédactionnelle de vos mémoires, thèses et rapports techniques.",
    logo: lesMotsJustesLogo,
    relatedFields: ["INFO", "GBM", "MAM", "SIR", "MAT", "MECA"],
    details: {
      presentation:
        "En tant que correctrice-relectrice professionnelle, je mets mes compétences linguisitiques au service des textes de mes clients. \nJe m'attache à relire et corriger tout support écrit traditionnel et/ou digital tant au niveau de la grammaire, de la conjugaison, de la syntaxe qu'au niveau de l'orthotypographie afin d'en améliorer la forme linguistique, la cohérence, la justesse et ainsi la compréhension par le public de lecteurs visés. \nJe propose donc mes prestations de service aux étudiants pour leur mémoire de fin d'études ou rapports de stage, aux enseignants pour leur thèse et sujets d'étude, aux organismes d'enseignement et de formation pour leurs supports pédagogiques, ainsi qu'aux stands et aux administrations pour leurs rapports, leurs notices et/ou leurs communications internes et/ou externes.",
      degreesResearched: ["Bac +3", "Bac +4", "Bac +5", "Diplomé"],
      points: [
        {
          title: "Prestation pour étudiants",
          content:
            "Service de relecture et correction indispensable pour les mémoires, thèses et rapports de stages."
        },
        {
          title: "Qualité rédactionnelle",
          content:
            "L'accent est mis sur l'orthotypographie, la cohérence et la précision du domaine technique décrit."
        },
        {
          title: "Service indépendant",
          content:
            "Profil de correctrice-relectrice professionnelle plutôt qu'un recruteur classique d'ingénieurs."
        },
        {
          title: "Valorisation des écrits tech",
          content:
            "Comprendre l'importance de la forme linguistique pour la vulgarisation et la transmission de travaux d'ingénierie."
        }
      ],
      offers: []
    }
  },
  vicinity: {
    name: "VICINITY",
    shortDescription:
      "Cabinet de conseil lyonnais à taille humaine, expert en ingénierie et IT, axé sur la proximité et l'engagement sociétal.",
    logo: vicinityLogo,
    relatedFields: ["INFO", "SIR", "MECA"],
    details: {
      websiteUrl: "https://www.vicinity-group.fr/",
      presentation:
        "Nous sommes une société de conseil spécialisée en ingénierie et en IT, basée à Lyon et fondée en septembre 2020. \n\nNotre vie entreprise repose sur 4 valeurs qui sont les suivantes : proximité, bienveillance, expertise technique et engagement sociétal et sportif.",
      degreesResearched: ["Bac +5", "Diplomé"],
      points: [
        {
          title: "Société à taille humaine",
          content: "Basée à Lyon avec un ancrage local fort et une volonté de proximité."
        },
        {
          title: "Métier de l'ingénierie d'affaires",
          content:
            "Opportunité de développer la double compétence technique/commerciale très prisée."
        },
        {
          title: "Valeurs fortes",
          content:
            "Engagement sociétal et sportif mis en avant, favorable à l'intégration et au bien-être."
        },
        {
          title: "Double axe IT et Ingénierie",
          content:
            "Ouverture aussi bien aux profils en systèmes d'information qu'en ingénierie classique."
        }
      ],
      offers: [
        {
          type: "alternance",
          title: "Alternance Ingénieur d'Affaires F/ H",
          file: "offers/vicinity/Alternance Ingénieur d_affaires .pdf"
        },
        {
          type: "stage",
          title: "Stage développeur C# F/H",
          file: "offers/vicinity/Stage développement .Net.pdf"
        },
        {
          type: "stage",
          title: "Stage développeur Java F/H",
          file: "offers/vicinity/Stage développeur Java.pdf"
        },
        {
          type: "stage",
          title: "Stage Ingénieur d'Affaires F/H",
          file: "offers/vicinity/Stage Ingénieur d_affaires.pdf"
        }
      ]
    }
  },
  dattico: {
    name: "Dattico",
    shortDescription:
      "Cabinet de conseil spécialisé dans la création de plateformes de données uniques qui génèrent une valeur stratégique pour les stands.",
    logo: datticoLogo,
    relatedFields: ["INFO"],
    details: {
      websiteUrl: "https://www.dattico.com",
      presentation:
        "Dattico est un cabinet de conseil spécialisé dans la création de plateformes de données uniques qui génèrent une valeur stratégique pour les stands. Nous commençons par comprendre votre stratégie, puis nous concentrons vos données afin de créer une solution personnalisée qui répond à vos besoins. Recrutement pour les projets : nous helpons les stands à recruter du personnel pour leurs projets. Projets : nous sommes convaincus que notre équipe est capable de fournir d'excellents produits de données. Revendeur Azure/AWS : nous pouvons héberger votre solution de données.",
      degreesResearched: ["Diplomé", "Bac +5"],
      points: [
        {
          title: "Orienté IT / Numérique",
          content:
            "Spécialisé majoritairement sur les profils informatiques de niveau Bac+5 et plus."
        },
        {
          title: "Positionnement marché",
          content:
            "Interventions probables en développement d'applications, conseil technique ou intégration."
        }
      ],
      offers: [
        {
          type: "stage",
          title: "Application Development Intern – Cloud, Voice AI & LLMs",
          file: "offers/dattico/Application Development Internship.docx"
        }
      ]
    }
  },
  capgemini: {
    name: "Capgemini",
    shortDescription:
      "Géant mondial de la tech accompagnant la transformation des stands à travers l'IA, le Cloud, la Data et l'ingénierie durable.",
    logo: capgeminiLogo,
    relatedFields: ["INFO", "MAM", "SIR", "MECA"],
    details: {
      websiteUrl: "https://www.capgemini.com/fr-fr/",
      careersPortalUrl:
        "https://www.capgemini.com/fr-fr/carrieres/parcours-professionnels/etudiants-diplomes/stage-et-alternance/",
      presentation:
        "Capgemini, partenaire de la transformation business et technologique de ses clients, les accompagne dans leur transition vers un monde plus digital et durable, tout en créant un impact positif pour la société. Le Groupe, responsable et multiculturel, rassemble 340 000 collaborateurs dans plus de 50 pays. Depuis plus de 55 ans, ses clients lui font confiance pour répondre à l'ensemble de leurs besoins grâce à la technologie. Capgemini propose des services et solutions de bout en bout, allant de la stratégie et du design jusqu'à l'ingénierie, en tirant parti de ses compétences de pointe en intelligence artificielle et IA générative, en cloud, et en data, ainsi que de son expertise sectorielle et de son écosystème de partenaires. Le Groupe a réalisé un chiffre d'affaires de 22,1 milliards d'euros en 2024.",
      degreesResearched: ["Bac +4", "Bac +5"],
      points: [
        {
          title: "Leader de l'ESN",
          content:
            "Acteur incontournable du numérique mondial (340 000 collaborateurs), idéal pour faire ses armes."
        },
        {
          title: "Diversité de secteurs",
          content:
            "Projets dans l'IA, le Cloud, la Data, et les grands systèmes intégrés (SAP, Salesforce)."
        },
        {
          title: "Outil de transformation",
          content: "Approche de bout en bout de la stratégie au design et à l'ingénierie tech."
        },
        {
          title: "Multitude des rôles",
          content:
            "Des postes très diversifiés (développement, qualification, ingénierie de la donnée, conseil ERP)."
        }
      ],
      offers: []
    }
  },
  amiltone: {
    name: "Amiltone",
    shortDescription:
      "Une agence digitale agile intervenant sur la conception d'applications web, mobiles et les infrastructures numériques.",
    logo: amiltoneLogo,
    relatedFields: ["INFO"],
    details: {
      websiteUrl: "https://www.amiltone.com/",
      presentation:
        "Amiltone est une Entreprise de Services du Numérique (ESN) qui accompagne les organisations dans leur transformation digitale à travers toute la France. Elle s'appuie sur une équipe de plus de 400 experts répartis dans 8 agences pour offrir un accompagnement de proximité et sur mesure. Ses domaines d'intervention couvrent l'intégralité du cycle de vie d'un projet, incluant le conseil, le design UX/UI, ainsi que le développement d'applications web et mobiles. L'entreprise se distingue par ses pôles d'expertise pointus en Data, Intelligence Artificielle et cybersécurité, garantissant des solutions technologiques innovantes et sécurisées. Enfin, Amiltone place l'humain et l'engagement éco-responsable au cœur de sa stratégie en cherchant activement à réduire son empreinte énergétique.",
      degreesResearched: ["Bac +5", "Bac +4", "Bac +3"],
      points: [
        {
          title: "Service Numérique",
          content:
            "Interventions variées sur le plan du développement web, mobile et infrastructures."
        },
        {
          title: "Ouverture des profils",
          content: "Accessible très vite dans le cursus (dès Bac+3) jusqu'au niveau ingénieur."
        }
      ],
      offers: []
    }
  },
  groupama: {
    name: "Groupama Support & Service",
    shortDescription:
      "GIE informatique du Groupe Groupama, spécialisé dans la transformation digitale et l'innovation technologique pour les stands du groupe.",
    logo: g2sLogo,
    relatedFields: ["INFO"],
    details: {
      websiteUrl: "https://www.g2s-groupama-technologies.fr/",
      careersPortalUrl: "https://www.groupama-gan-recrute.com/",
      presentation:
        "Groupama Support & Service (G2S) est le GIE informatique du Groupe Groupama.\nNous mettons la puissance des nouvelles technologies – data, intelligence artificielle, cybersécurité, robotique, objets connectés, smart building, … – au service des stands du groupe Groupama et les transforme en solutions métiers innovantes pour apporter de la valeur ajoutée à ses 12 millions de sociétaires et clients. \nNos 1500 collaborateurs, répartis sur une dizaine de sites en France, interviennent sur tous les métiers de l'IT et aussi sur l'Immobilier d'exploitation et les Achats.  Nous nous inscrivons pleinement dans les valeurs portées par notre Groupe qui sont celles du mutualisme : Solidarité, Engagement, Proximité, Responsabilité.",
      degreesResearched: ["Bac +4", "Bac +5", "Bac +3"],
      points: [
        {
          title: "GIE du Groupe Groupama",
          content: "Rôle central dans la transformation digitale d'un grand groupe mutualiste."
        },
        {
          title: "Technologies innovantes",
          content: "Projets impliquant data, IA, cybersécurité, robotique, IoT et smart building."
        },
        {
          title: "Large spectre de métiers IT",
          content:
            "Interventions sur tous les métiers de l'informatique, ainsi que sur l'immobilier d'exploitation et les achats."
        },
        {
          title: "Valeurs mutualistes",
          content: "Engagement dans des valeurs fortes de solidarité, proximité et responsabilité."
        }
      ],
      offers: []
    }
  },
  coexya: {
    name: "COEXYA",
    shortDescription:
      "Acteur multi-spécialiste du numérique, combinant conseil, édition logicielle et intégration pour accélérer la transformation digitale.",
    logo: coexyaLogo,
    relatedFields: ["INFO"],
    details: {
      websiteUrl: "https://www.coexya.eu",
      careersPortalUrl: "https://jobs.coexya.eu",
      presentation:
        "Coexya est un actor du numérique, multi-spécialiste exerçant les métiers d'intégrateur, d'éditeur de software et de conseil. Nous accompagnons les stands dans leur transformation digitale et l'exploitation de leur data, par le développement de solutions répondant aux nouveaux usages pour leurs collaborateurs et leurs clients. En 2024, Coexya a rejoint le groupe Talan, acteur international de conseil et d'expertises technologiques qui accélère la transformation de ses clients par les leviers de l'innovation, la technologie et la data.",
      degreesResearched: ["Bac +3", "Bac +5", "Bac +4"],
      points: [
        {
          title: "Triple compétence",
          content: "Agit à la fois comme intégrateur, éditeur et société de conseil."
        },
        {
          title: "Envergure internationale",
          content: "Adossement récent au groupe Talan, augmentant sa capacité de projection."
        },
        {
          title: "Valeur de la donnée",
          content:
            "Forte orientation autour de la valorisation de la donnée et des nouveaux usages numériques."
        },
        {
          title: "Ouverture",
          content:
            "Des missions de développement accessibles dès le cycle Licence et tout au long du cursus ingénieur."
        }
      ],
      offers: [
        {
          type: "alternance",
          title: "Apprenti ingénieur études et développement F/H Search & Sémantique",
          file: "offers/coexya/ALTSSLSA25.pdf"
        },
        {
          type: "alternance",
          title: "Alternant Ingénieur Système, Réseau et Cybersécurité",
          file: "offers/coexya/ALTPIS25.pdf"
        },
        {
          type: "alternance",
          title: "Apprenti ingénieur études et développement F/H Mobilité Urbaine Intelligente",
          file: "offers/coexya/ALTMUI25.pdf"
        },
        {
          type: "alternance",
          title:
            "Apprenti ingénieur d'études et développement F/H Dématérialisation - GED - Archivage",
          file: "offers/coexya/ALTIDL25.pdf"
        },
        {
          type: "alternance",
          title: "Apprenti ingénieur études et développement F/H Master Data Management",
          file: "offers/coexya/ALTDGM24.pdf"
        }
      ]
    }
  },
  nextdecision: {
    name: "Next Decision",
    shortDescription:
      "Cabinet d'experts en Data & IA accompagnant les organisations dans l'optimisation de leur SI et de leurs enjeux RSE.",
    logo: nextDecisionLogo,
    relatedFields: ["INFO"],
    details: {
      websiteUrl: "https://www.next-decision.fr/",
      careersPortalUrl: "https://www.recrutement-next-decision.fr/",
      presentation:
        "Nous sommes un cabinet d'experts en Data & IA, Organisation SI, RSE & ESG, Pilotage des rémunérations, Business Apps et Digital.\nNous accompagnons nos clients sur du conseil, des formations, des licences et sur l'implémentation de solutions et logiciels.",
      degreesResearched: ["Bac +5", "Diplomé", "Bac +4"],
      points: [
        {
          title: "Cabinet de conseil pluridisciplinaire",
          content:
            "Orientation forte sur les enjeux de données (Data & IA) et d'organisation des systèmes d'information."
        },
        {
          title: "Métier de consultant",
          content:
            "Axé sur l'accompagnement, la formation et l'implémentation chez les clients finaux."
        },
        {
          title: "Enjeux multiples",
          content: "Touche des thématiques modernes comme la RSE/ESG ou le pilotage financier."
        },
        {
          title: "Spécialisation",
          content:
            "Focus évident sur les postes de Consultants Data, combinant compétences tech et posture de conseil."
        }
      ],
      offers: []
    }
  },
  parlym: {
    name: "PARLYM",
    shortDescription:
      "Référence de l'ingénierie industrielle gérant des projets complexes dans l'énergie, le nucléaire et la défense à l'échelle mondiale.",
    logo: parlymLogo,
    relatedFields: ["MECA"],
    details: {
      websiteUrl: "https://www.parlym.com/",
      presentation:
        "PARLYM, c'est avant tout…\n\nPlus de 50 ans d'ingénierie, mais surtout une aventure humaine en mouvement 🚀\nNous concevons et pilotons des projets d'ingénierie ambitieux, en France comme à l'international. Aujourd'hui, ce sont 2 000 talents passionnés, 330 M € de CA et 270 clients qui font vivre nos projets au quotidien. Nos équipes conçoivent et réalisent des projets clés en main au cœur de secteurs stratégiques : nucléaire, transition énergétique, industrie, Oil & Gas, défense, pharmacie et énergies renouvelables.\n\n Ce qui fait notre différence ?\n✨ Dynamisme, pour avancer et innover\n🧠 Savoir-faire – une expertise reconnue, construite sur l'excellence technique\n🤝 Esprit d'équipe, parce que les plus beaux projets se réussissent ensemble\n\nPARLYM, c'est l'ingénierie engagée, ambitieuse et résolument tournée vers l'avenir.",
      degreesResearched: ["Diplomé", "Bac +5", "Bac +4"],
      points: [
        {
          title: "Ingénierie de grands projets",
          content:
            "Une forte expertise dans la gestion de projets clés en main et de grande échelle (EPC)."
        },
        {
          title: "Secteurs critiques",
          content:
            "Intervention dans l'énergie (nucléaire, ENR, Oil&Gas), la défense, la pharmacie et l'industrie lourde."
        },
        {
          title: "Dimension internationale",
          content:
            "Présence globale permettant une forte mobilité géographique sur des projets d'envergure."
        },
        {
          title: "Culture d'entreprise",
          content:
            "Mise en avant du travail d'équipe, de l'excellence technique et de l'innovation."
        }
      ],
      offers: []
    }
  },
  soprasteria: {
    name: "SOPRA STERIA GROUP",
    shortDescription:
      "Leader européen de la tech explorant les frontières de l'IA, du cyber et du quantique pour sécuriser le monde numérique de demain.",
    logo: soprasteriaLogo,
    relatedFields: ["INFO", "MAM", "SIR"],
    details: {
      websiteUrl: "https://www.soprasteria.fr/accueil",
      careersPortalUrl: "https://www.soprasteria.fr/carrieres",
      presentation:
        "En tant que leader européen des services du numérique, nous faisons le lien entre les technologies de pointe et les besoins essentiels des stands, nous transformons la complexité en solutions tangibles, souveraines et durables, nous repoussons les limites de l'IA, du cyber-espace, du cloud et du quantique.\nEn produisant un impact durable, en accompagnant les transformations audacieuses, en sécurisant les environnements numériques et en étant les pionniers d'une innovation responsable à forte valeur ajoutée, et à grande échelle.\nNous sommes 50 000 collaborateurs et collaboratrices, au sein de 30 pays, au service d'un groupe européen.\n\nNous sommes l'alternative de confiance dans un monde polarisé.",
      degreesResearched: ["Bac +5"],
      points: [
        {
          title: "Leader européen",
          content: "Parmi les plus grandes ESN d'Europe (50 000 collaborateurs)."
        },
        {
          title: "Enjeux prospectifs",
          content:
            "Positionnement forte sur l'IA, le Cloud, la cybersécurité, mais aussi des domaines d'avenir comme le quantique."
        },
        {
          title: "Transversalité des rôles",
          content:
            "Besoin de développeurs fullstack, ingénieurs logiciels, consultants ERP (SAP) et Business Analysts."
        },
        {
          title: "Impact durable et souveraineté",
          content:
            "Accent mis sur l'innovation responsable et la sécurisation souveraine des données européennes."
        }
      ],
      offers: []
    }
  },
  technord: {
    name: "Technord France",
    shortDescription:
      "Ensemblier industriel spécialisé dans l'intégration de solutions d'électricité, d'automatisme et d'informatique industrielle (MES).",
    logo: technordLogo,
    relatedFields: ["INFO", "SIR"],
    details: {
      websiteUrl: "https://www.technord.com/",
      careersPortalUrl: "https://jobs.technord.com/",
      presentation:
        "Technord est un ensemblier et intégrateur industriel qui rassemble toutes les compétences nécessaires à la conception, la fabrication, l'installation, la mise en service et la maintenance d'équipements industriels.\nNous intervenons en du génie électrique, automatisme et informatique industrielle.\n\nGroupe 100% familial basé à Tournai (B), Technord réalise un chiffre d'affaire de plus de 150M € en s'appuyant sur plusieurs filiales et grâce à ses 500 collaborateurs.\n\nL'entreprise est reconnue pour la fiabilité de ses solutions (électricité, automation et informatique industrielle), les technologies de pointe qu'elle propose et sa flexibilité pour répondre aux besoins de ses clients.\n\nTravailler chez Technord, c'est adhérer à une culture d'entreprise tournée vers la satisfaction des clients et la réussite collective. Notre système de management socio-économique vise en effet à responsabiliser, développer et récompenser notre personnel pour sa contribution aux succès de l'organisation.",
      degreesResearched: ["Bac +5"],
      points: [
        {
          title: "Intégrateur industriel",
          content:
            "Maîtrise complète de la chaîne, de la conception à la maintenance d'équipements."
        },
        {
          title: "Culture familiale",
          content:
            "Groupe à taille humaine valorisant la responsabilisation et le développement du personnel."
        }
      ],
      offers: [
        {
          type: "stage",
          title: "Ingénieur Automatisme (H/F/X)",
          file: "offers/technord/Technord - Stage Automatisme 2026.pdf"
        },
        {
          type: "stage",
          title: "Ingénieur Informatique Industrielle (H/F/X)",
          file: "offers/technord/Technord - Stage MES 2026.pdf"
        }
      ]
    }
  },
  lhoist: {
    name: "Lhoist France",
    shortDescription:
      "Leader mondial de la production de chaux et minéraux essentiels aux processus industriels.",
    logo: lhoistLogo,
    relatedFields: ["MAT", "MECA", "SIR"],
    details: {
      websiteUrl: "https://www.lhoist.com/fr-FR",
      careersPortalUrl: "https://www.lhoist.com/fr-FR/a-propos/carrieres",
      presentation:
        "Lhoist est un groupe industriel belge spécialisé dans la production de chaux, de dolomie et de minéraux, matières premières essentielles pour de nombreux secteurs industriels.\nL'entreprise exploite des carrières de calcaire et de dolomie, transforme ces ressources en produits à haute valeur ajoutée, et développe des applications industrielles adaptées aux besoins de ses clients.",
      degreesResearched: ["Bac +5"],
      points: [
        {
          title: "Maîtrise minérale",
          content:
            "Spécialiste de la chaux et de la dolomie pour l'acier, l'environnement et l'industrie."
        },
        {
          title: "Expertise Process",
          content:
            "Enjeux forts sur l'optimisation des procédés de calcination et la qualité des matériaux."
        },
        {
          title: "Maintenance & Automatisme",
          content:
            "Besoin d'ingénierie pour la fiabilisation d'équipements lourds (fours, broyeurs)."
        },
        {
          title: "Projets Industriels",
          content: "Pilotage d'investissements majeurs dans un contexte de production continue."
        }
      ]
    }
  },
  sfen: {
    name: "SFEN Rhône-Ain-loire",
    shortDescription:
      "Société savante et carrefour de connaissances dédié à l'énergie nucléaire et ses applications.",
    logo: sfenLogo,
    relatedFields: ["MAT", "MECA"],
    details: {
      websiteUrl: "https://sfenral.fr/",
      presentation:
        "La Société Française d'Energie Nucléaire est le carrefour français des connaissances sur l'énergie nucléaire. Créée en 1973 en Association selon la loi de 1901, la Sfen est un lieu d'échanges pour celles et ceux qui s'intéressent à l'énergie nucléaire et à ses applications. La Sfen RAL est le Groupe régional de la Sfen actif sur les départements du Rhône, de l'Ain et de la Loire.",
      degreesResearched: ["Bac +3", "Bac +4", "Bac +5"],
      points: [
        {
          title: "Réseau d'experts",
          content:
            "Lieu d'échanges privilégié entre professionnels et étudiants du secteur nucléaire."
        },
        {
          title: "Connaissances techniques",
          content:
            "Promotion des savoir-faire scientifiques liés à l'atome et à la transition énergétique."
        },
        {
          title: "Ancrage régional",
          content:
            "Dynamisation de la filière nucléaire sur les départements du Rhône, de l'Ain et de la Loire."
        },
        {
          title: "Veille scientifique",
          content:
            "Accès à une information de référence sur les évolutions technologiques de l'énergie."
        }
      ]
    }
  },
  cgi: {
    name: "CGI",
    shortDescription:
      "Leader mondial du conseil et des services numériques accompagnant la transformation des organisations.",
    logo: cgiLogo,
    relatedFields: ["INFO"],
    details: {
      websiteUrl: "https://www.cgi.com/fr",
      careersPortalUrl: "https://www.cgi.com/fr/carrieres",
      presentation:
        "CGI est une équipe mondiale, leader du conseil et des services numériques, qui possède une connaissance fine des différents secteurs d'activité et une expertise technologique nous permettant d'anticiper les changements du marché. Nous accompagnons nos clients à travers quatre métiers : le conseil, l'intégration de systèmes, les business solutions et les services managés. Chez CGI, nous sommes plus que des employés, nous sommes aussi des associés.",
      degreesResearched: ["Bac +5"],
      points: [
        {
          title: "Expertise Multidimensionnelle",
          content: "Intervient dans le conseil, l'intégration de systèmes et les services managés."
        },
        {
          title: "Culture d'Associés",
          content:
            "Modèle unique où les collaborateurs sont actionnaires et acteurs de la réussite."
        },
        {
          title: "Innovation Technologique",
          content: "Projets d'envergure en cybersécurité, Big Data et Intelligence Artificielle."
        },
        {
          title: "Échelle Mondiale",
          content: "Une présence internationale forte offrant des parcours de carrière diversifiés."
        }
      ],
      offers: [
        {
          type: "alternance",
          title: "Alternance : Assistant(e) chef(fe) de projet / PMO F/H",
          file: "offers/cgi/Alternance Développeur(se) fullstack Java-Angular.pdf"
        },
        {
          type: "stage",
          title: "Stage : Testeur(se) fonctionnel F/H",
          file: "offers/cgi/Alternance Ingénieur(e) OPS F-H.pdf"
        }
      ]
    }
  },
  soie: {
    name: "SOIE (Service Orientation Insertion)",
    shortDescription:
      "Service d'orientation et d'insertion professionnelle de l'Université Lyon 1, facilitant la transition des étudiants vers le monde professionnel.",
    logo: soieLogo,
    relatedFields: ["INFO", "MAM", "SIR", "MAT", "MECA", "GBM"],
    details: {
      websiteUrl: "https://soie.univ-lyon1.fr/",
      presentation:
        "Le SOIE est le Service d'Orientation et d'Insertion professionnelle de l'Université. Sa mission est d'accompagner les étudiants dans la construction de leur projet professionnel et de faciliter leur insertion sur le marché du travail. Ce n'est pas un recruteur, mais un partenaire clé de votre réussite.",
      points: [
        {
          title: "Aide à la recherche de stage",
          content:
            "Le SOIE centralise et diffuse des offres, organise des forums comme celui-ci et peut vous conseiller dans votre recherche."
        },
        {
          title: "Ateliers CV et lettre de motivation",
          content:
            "Aide à optimiser vos outils de candidature pour maximiser vos chances, atelier CV pour l'étranger."
        },
        {
          title: "Préparation aux entretiens",
          content:
            "Organisation de simulations d'entretiens pour vous entraîner et recevoir des conseils personnalisés."
        },
        {
          title: "Ressource incontournable",
          content:
            "N'hésitez pas à les solliciter tout au long de votre parcours pour toute question liée à votre projet professionnel."
        }
      ]
    }
  },
  polyenco: {
    name: "Polyenco",
    shortDescription:
      "Junior-Entreprise de l'école, offrant des services de conseil et d'ingénierie pour les stands.",
    logo: polyencoLogo,
    relatedFields: ["INFO", "MAM", "SIR", "MAT", "MECA", "GBM"],
    details: {
      websiteUrl: "https://junior-polyenco.fr/",
      presentation:
        "Polyenco (Poly Engineering Consulting) est la Junior- Entreprise de Polytech Lyon, fondée en 2007 et composée de 18 membres étudiants.Structure à but pédagogique et économique, elle met en relation les stands avec plus de 500 élèves - ingénieurs de Polytech Lyon à travers ses 6 filières.Finaliste du prix CNJE du meilleur espoir 2023, Polyenco réalise des prestations techniques dans des domaines variés: digital, biomédical et conception mécanique.",
      points: [
        {
          title: "Expertise étudiante pluridisciplinaire",
          content:
            "Accès aux 6 filières de Polytech Lyon(Mécanique, Informatique, Math Appliquée, Biomédical, Matériaux, Génie Industriel)."
        },
        {
          title: "Accompagnement complet",
          content:
            "Suivi de A à Z des projets par l'équipe administrative de la Junior-Entreprise, garantissant qualité et professionnalisme."
        },
        {
          title: "Tarifs attractifs",
          content:
            "Prestations de qualité à prix étudiants, idéales pour PME, startups ou projets innovants à budget maîtrisé."
        },
        {
          title: "Domaines d'intervention",
          content:
            "Développement web/mobile, informatique industrielle/médicale, calculs haute performance, modélisation, conception mécanique, gestion de données, automatisation hospitalière."
        },
        {
          title: "Avantages",
          content:
            "Flexibilité, réactivité, regard neuf sur vos problématiques, accès aux dernières connaissances académiques et outils de l'école."
        }
      ]
    }
  },
  codeo: {
    name: "Codeo Medical",
    shortDescription: "Leader Français du rachat / revente de matériel médical de seconde main.",
    logo: codeoLogo,
    relatedFields: ["GBM"],
    details: {
      degreesResearched: ["Bac +3", "Bac +4"],
      websiteUrl:
        "https://codeo-medical.com/?srsltid=AfmBOooeK0KjXaQVFx-fJ1JI56slv7i4mdzZu_Pbgrf5wh-Q_ZhPxo2R",
      presentation:
        "Codeo Medical est le spécialiste européen du réemploi d'équipements médicaux. Nous rachetons, reconditionnons et revendons du matériel médical d'occasion (imagerie, endoscopie, monitoring, échographie) pour les hôpitaux et cliniques. En donnant une seconde vie aux dispositifs médicaux, nous permettons aux établissements de santé d'optimiser leur budget tout en s'inscrivant dans une véritable démarche d'économie circulaire et de développement durable.",
      points: [
        {
          title: "Économie circulaire",
          content:
            "Acteur majeur de la RSE en santé, prolongeant la durée de vie des équipements et réduisant l'empreinte carbone hospitalière."
        },
        {
          title: "Ingénierie Biomédicale",
          content:
            "Au cœur des enjeux de maintenance, de test et de reconditionnement de dispositifs médicaux complexes."
        },
        {
          title: "Équipements multimarques",
          content:
            "Opportunité de travailler sur une grande diversité d'appareils (GE, Philips, Siemens, etc.) et de spécialités."
        },
        {
          title: "Dimension internationale",
          content:
            "Un marché d'achat et de revente qui s'étend à l'échelle mondiale, nécessitant rigueur et adaptabilité."
        }
      ],
      offers: []
    }
  },
  /* "stepout-abroad": {
    name: "Stepout Abroad",
    shortDescription:
      "Organisation proposant des stages dans des pays asiatiques pour les étudiants.",
    logo: stepoutAbroadLogo,
    relatedFields: ["GBM", "MAM", "MAT", "INFO", "SIR", "MECA"],
    details: {
      degreesResearched: ["Bac +3", "Bac +4", "Bac +5", "Diplomé"],
      websiteUrl: "https://www.stepoutabroad.com",
      presentation:
        "Stepout Abroad est une agence spécialisée dans l'accompagnement d'étudiants et de jeunes diplômés souhaitant réaliser un stage professionnel en Asie. Nous facilitons la mobilité internationale en proposant un accompagnement de A à Z : placement en entreprise, aide à l'obtention du visa, recherche de logement et assistance sur place. Notre objectif est de vous permettre de booster votre carrière tout en vivant une immersion culturelle inoubliable.",
      points: [
        {
          title: "Mobilité internationale",
          content:
            "Opportunité unique de s’expatrier et de découvrir le marché du travail dans des pays asiatiques dynamiques."
        },
        {
          title: "Accompagnement clé en main",
          content:
            "Prise en charge des démarches administratives complexes (visas, conventions) pour un départ serein."
        },
        {
          title: "Ouverture culturelle",
          content:
            "Développement de « soft skills » très prisées par les recruteurs : adaptabilité, ouverture d'esprit et anglais professionnel."
        },
        {
          title: "Stages multidisciplinaires",
          content:
            "Réseau d'stands partenaires permettant de trouver des missions dans l'ensemble des filières d'ingénierie."
        }
      ],
      offers: []
    }
  }, */
  reel: {
    name: "REEL",
    logo: reelLogo,
    relatedFields: ["MECA", "SIR"],
    shortDescription:
      "Concepteur et fabricant de systèmes de levage et de manutention pour des environnements industriels critiques.",
    details:
      {
        websiteUrl: "https://www.reelinternational.com/",
        careersPortalUrl: "https://www.reelinternational.com/carrieres/",
        presentation:
          "Créé en 1946, REEL International conçoit, fabrique et maintient des systèmes de levage et de manutention pour des environnements industriels critiques : aéronautique, nucléaire, défense, offshore & Energies Marines et hydroélectricité. Présent dans 16 pays, le groupe développe des savoir-faire d’excellence portés par ses équipes, ses valeurs et une gouvernance solide.\n" +
          "REEL est un groupe industriel fondé sur l’ancrage, la qualité et la transmission du savoir-faire. Son développement s’inscrit dans une logique de long terme, au service de ses clients et de ses équipes.\n" +
          "\n" +
          "Dès l’origine, REEL s’appuie sur une exigence simple : faire juste, faire bien, faire fiable. Cette rigueur irrigue toujours sa culture industrielle.\n" +
          "\n" +
          "Cette vision à long terme se traduit par une gouvernance structurée, une attention portée à la formation continue et une exigence constante envers la sécurité, l’innovation et la performance durable.",
        degreesResearched: ["Bac+5", "Diplomé"],
        points: [
          {
            title: "Systèmes de levage industriels",
            content:
              "Spécialisation dans la conception et la fabrication de solutions de levage pour des environnements critiques."
          },
          {
            title: "Excellence opérationnelle",
            content:
              "Culture d'entreprise axée sur la rigueur, la qualité et la fiabilité des produits."
          },
          {
            title: "Gouvernance solide",
            content:
              "Engagement dans une vision à long terme avec une attention particulière à la formation et au développement des équipes."
          }
        ]
      }
  },
  orano: {
    name: "Orano",
    logo: oranoLogo,
    relatedFields: ["MAT", "MECA", "SIR", "MAM"],
    shortDescription:
      "Orano est un acteur majeur de l’énergie nucléaire, avec des technologies de pointe pour faire du nucléaire une ressource du futur.",
    details: {
      websiteUrl: "https://www.orano.group/fr",
      careersPortalUrl: "https://www.orano.group/jobs/fr",
      presentation:
        "Groupe international de référence, Orano est un acteur majeur de l’énergie nucléaire. Avec 17 500 collaborateurs dans le monde, le groupe s’engage au quotidien pour répondre aux enjeux énergétiques mondiaux et fournir une électricité puissante, sécurisée, bas carbone et compétitive.\nChez Orano, nous sommes engagés pour le climat, pour l’économie des ressources et la santé. Forts de nos technologies de pointe, nous ouvrons le champ des possibles pour nous réinventer et faire du nucléaire une ressource du futur. Alors faites vos bagages et partons à la conquête de l’avenir !",
      degreesResearched: ["Bac+4", "Bac+5", "Diplomé"],
      points: [
        {
          title: "Acteur majeur du nucléaire",
          content:
            "Orano est un leader mondial dans le domaine de l'énergie nucléaire, offrant des opportunités de carrière dans un secteur stratégique."
        },
        {
          title: "Technologies de pointe",
          content:
            "Travailler chez Orano, c'est être au cœur de l'innovation technologique pour faire du nucléaire une ressource du futur."
        },
        {
          title: "Engagement pour le climat",
          content:
            "Orano s'engage pour le climat, l'économie des ressources et la santé, offrant un environnement de travail aligné avec des valeurs fortes."
        }
      ]
    }
  },
  mindray: {
    name: "Mindray Medical France",
    logo: mindrayLogo,
    relatedFields: ["GBM"],
    shortDescription:
      "Mindray est une société spécialisée, notamment, dans la conception, la fabrication et la commercialisation d’équipements médicaux et de solutions innovantes, destinés à améliorer la qualité des soins hospitaliers.",
    details: {
      websiteUrl: "https://www.mindray.com",
      careersPortalUrl: "https://www.mindray.com/en/career/career-search",
      presentation:
        "Mindray est une société spécialisée, notamment, dans la conception, la fabrication et la commercialisation d’équipements médicaux et de solutions innovantes, destinés à améliorer la qualité des soins hospitaliers.",
      degreesResearched: ["Bac+3", "Bac+4", "Bac+5"],
      points: [
        {
          title: "Équipements médicaux innovants",
          content:
            "Mindray conçoit et fabrique des équipements médicaux de pointe pour améliorer les soins hospitaliers."
        },
        {
          title: "Opportunités internationales",
          content:
            "En tant que société mondiale, Mindray offre des opportunités de carrière à l'international dans le secteur de la santé."
        },
        {
          title: "Engagement envers la qualité des soins",
          content:
            "Travailler chez Mindray, c'est contribuer à l'amélioration de la qualité des soins hospitaliers à travers des solutions innovantes."
        }
      ]
    }
  },
  iesf: {
    name: "IESF (Ingénieurs et Scientifiques de France)",
    logo: iesfLogo,
    relatedFields: ["MECA", "SIR"],
    shortDescription:
      "L'IESF est l'association des ingénieurs et scientifiques de France, avec pour mission de représenter la communauté scientifique et promouvoir les métiers scientifiques.",
    details: {
      presentation:
        "L'IESF est une association qui regroupe les ingénieurs et scientifiques de France. Elle a pour mission de représenter et défendre les intérêts de la communauté scientifique et technique, de promouvoir les métiers de l'ingénierie et de la science, et de favoriser les échanges entre les professionnels du secteur.",
      degreesResearched: ["Bac+3", "Bac+4", "Bac+5", "Diplomé"],
      points: [
        {
          title: "Représentation professionnelle",
          content:
            "L'IESF agit en tant que porte-parole des ingénieurs et scientifiques auprès des pouvoirs publics, des stands et de la société."
        },
        {
          title: "Promotion des métiers",
          content:
            "L'association travaille à valoriser les métiers de l'ingénierie et de la science auprès du grand public et des jeunes générations."
        },
        {
          title: "Réseau professionnel",
          content:
            "L'IESF favorise les échanges et le networking entre les professionnels du secteur à travers des événements, des conférences et des publications."
        }
      ]
    }
  },
  rir: {
    name: "RIR (Robotique des Ingénieurs de Roanne)",
    logo: rirLogo,
    relatedFields: ["SIR", "INFO", "MECA"],
    shortDescription:
      "Association étudiante de robotique affiliée à Polytech Lyon, centrée sur les projets techniques, le prototypage et la participation à Eurobot.",
    details: {
      websiteUrl: "https://www.helloasso.com/associations/rir-robotique-des-ingenieurs-de-roanne",
      presentation:
        "Le RIR est une association étudiante indépendante de robotique affiliée à Polytech Lyon, sur le site de Roanne. Créée à l'origine pour participer aux coupes Eurobot en France et en Europe, l'association est devenue un véritable pôle de développement de compétences techniques. Son local met à disposition un espace de création et de bricolage avec des outils de prototypage (dont des imprimantes 3D) pour accompagner les projets étudiants et personnels.",
      points: [
        {
          title: "Participation à Eurobot",
          content:
            "Le RIR s'est construit autour de la participation aux compétitions Eurobot, un cadre concret pour concevoir, tester et améliorer des robots."
        },
        {
          title: "Association étudiante affiliée à Polytech Lyon",
          content:
            "Le club est porté par des élèves ingénieurs, avec un ancrage fort sur la filière Systèmes Industriels et Robotiques de Roanne."
        },
        {
          title: "Atelier et prototypage",
          content:
            "Le local dispose d'outils variés (ordinateurs, imprimantes 3D, outillage) pour passer rapidement de l'idée au prototype."
        },
        {
          title: "Développement de compétences techniques",
          content:
            "Les projets permettent de progresser en conception, électronique, mécanique, programmation et travail en équipe."
        }
      ]
    }
  },
  apleb: {
    name: "APLEB",
    logo: aplebLogo,
    relatedFields: ["GBM"],
    shortDescription:
      "L'APLEB est une association étudiante de Polytech Lyon visant à faciliter l'intégration des étudiants dans des projets liés au monde biomédical.",
    details: {
      presentation:
        "L'APLEB est l'association de Polytech Lyon des élèves ingénieurs en génie biomédical. Ouverte à tous, elle organise des événements accessibles à l'ensemble des étudiants de l'école. L'association s'articule autour de cinq projets: Le Ptit Biomed, Biom'aide, La Minute Biomed, les Ateliers biomédicaux et le Guide du GBM. Ces projets permettent de développer des compétences techniques, de créer du lien avec les professionnels du secteur, de contribuer à des actions solidaires et de faire de la veille sur les innovations médicales.",
      websiteUrl:
        "https://etu.univ-lyon1.fr/activites/associations-etudiantes/apleb-association-de-polytech-lyon-des-eleves-ingenieurs-en-genie-biomedical",
      points: [
        {
          title: "Le Ptit Biomed et partenariat AFIB",
          content:
            "Projet partenaire de l'AFIB: les étudiants synthétisent les conférences des journées AFIB, publient un guide avec annuaire d'exposants et participent aussi à SANTEXPO avec des interviews d'acteurs du secteur."
        },
        {
          title: "Biom'aide (projet humanitaire)",
          content:
            "En partenariat avec Horizons Sahel, le projet collecte des dispositifs médicaux pour les établissements de soins au Sahel et inclut des actions de maintenance et de formation sur place."
        },
        {
          title: "Ateliers biomédicaux",
          content:
            "Organisation de rencontres entre étudiants, entreprises et professionnels (interventions à l'école ou visites d'entreprises) pour découvrir les métiers et le terrain."
        },
        {
          title: "Guide du GBM",
          content:
            "Rédaction de fiches pédagogiques sur les techniques médicales, les dispositifs biomédicaux et les services de soins, accessibles à toute personne intéressée par le domaine."
        },
        {
          title: "La Minute Biomed",
          content:
            "Newsletter mensuelle de veille technologique qui diffuse des articles sur les innovations biomédicales auprès de la communauté étudiante et professionnelle."
        }
      ]
    }
  },
  orange: {
    name: "Orange Business",
    shortDescription:
      "Intégrateur et opérateur de services numériques pour les entreprises, avec des expertises en cloud, cybersécurité, data et réseaux.",
    logo: orangeLogo,
    relatedFields: ["INFO", "SIR"],
    details: {
      websiteUrl: "https://www.orange-business.com/fr",
      careersPortalUrl: "https://orange.jobs/fr/fr",
      presentation:
        "Orange Business accompagne les entreprises et les organisations dans leur transformation numérique. Ses activités couvrent notamment les réseaux, le cloud, la cybersécurité, les infrastructures IT, la data et les services numériques managés.",
      points: [
        {
          title: "Transformation numérique des entreprises",
          content:
            "Des missions sur des environnements variés pour concevoir, déployer et exploiter des solutions numériques à grande échelle."
        },
        {
          title: "Expertises techniques clés",
          content:
            "Les sujets majeurs incluent le cloud, la cybersécurité, les réseaux, la data et les systèmes IT."
        },
        {
          title: "Ancrage opérationnel",
          content:
            "L'activité combine conseil, intégration et exploitation de services, avec un fort enjeu de fiabilité et de performance."
        }
      ]
    }
  },
  /*alispharm: {
    name: 'Alispharm',
    shortDescription:
      'Société de conseil en Life Sciences intervenant sur le cycle de vie des produits de santé, de la qualité à la réglementation.',
    logo: alispharmLogo,
    relatedFields: ['GBM', 'MAM', 'INFO'],
    details: {
      websiteUrl: 'https://www.alispharm.com/',
      presentation:
        "Alispharm accompagne les acteurs de la santé et des sciences de la vie à chaque étape du cycle de vie des produits. Les missions couvrent notamment la qualité, la qualification/validation, les affaires réglementaires, l'industrialisation et les dispositifs médicaux.",
      points: [
        {
          title: 'Cycle de vie des produits de santé',
          content:
            "Interventions de l'amont au déploiement industriel avec un suivi des exigences de conformité.",
        },
        {
          title: 'Expertises qualité et réglementaire',
          content:
            'Les activités incluent quality assurance, quality control et affaires réglementaires dans un cadre fortement normé.',
        },
        {
          title: 'Environnement Life Sciences',
          content:
            'Positionnement sur des sujets pharma, biotech et dispositifs médicaux avec des enjeux techniques et opérationnels variés.',
        },
      ],
    },
  },*/
  /* wimova: {
    name: 'Wimova',
    shortDescription:
      'Solution de mobilité professionnelle pour les entreprises, orientée pilotage des déplacements et approche écoresponsable.',
    logo: wimovaLogo,
    relatedFields: ['INFO', 'SIR', 'MAM'],
    details: {
      websiteUrl: 'https://wimova.com/',
      presentation:
        "Wimova for Business propose une solution de gestion des déplacements professionnels avec une approche digitale et écoresponsable. La plateforme permet aux entreprises de piloter les trajets de leurs collaborateurs, avec des services d'assistance et de suivi adaptés aux usages professionnels.",
      points: [
        {
          title: 'Gestion des déplacements professionnels',
          content:
            "La solution centralise l'organisation des trajets et facilite la gestion opérationnelle pour les équipes et les entreprises.",
        },
        {
          title: 'Approche co-responsable',
          content:
            'Wimova met en avant une mobilité plus durable, avec un positionnement orienté impact et optimisation des pratiques de déplacement.',
        },
        {
          title: 'Plateforme digitale entreprise',
          content:
            "Le service inclut création de compte entreprise, gestion des collaborateurs et pilotage des usages via l'application.",
        },
      ],
    },
  }, */
  /* sqli: {
    name: "SQLI",
    shortDescription:
      "Entreprise de services numériques spécialisée dans les expériences digitales, le e-commerce et la transformation des systèmes d’information.",
    logo: sqliLogo,
    relatedFields: ["INFO", "MAM"],
    details: {
      websiteUrl: "https://www.sqli.com/fr-fr",
      presentation:
        "SQLI accompagne les entreprises dans leur transformation digitale, de la stratégie à la mise en oeuvre de plateformes numériques. Les équipes interviennent notamment sur les parcours digitaux, les applications web et l'intégration de solutions e-commerce.",
      points: [
        {
          title: "Transformation digitale de bout en bout",
          content:
            "Intervention sur toutes les phases: cadrage, conception, développement, déploiement et amélioration continue."
        },
        {
          title: "Expertises web et e-commerce",
          content:
            "Projets orientés expériences utilisateurs, plateformes digitales et enjeux de performance technique."
        },
        {
          title: "Environnement ESN",
          content:
            "Missions variées au contact de clients et d'équipes pluridisciplinaires dans des contextes métiers différents."
        }
      ]
    }
  }, */
  /* assystem: {
    name: 'ASSystem',
    shortDescription:
      "Groupe d'ingénierie accompagnant de grands projets industriels, avec une forte présence dans les secteurs de l'énergie et des infrastructures.",
    logo: assystemLogo,
    relatedFields: ['MECA', 'SIR', 'MAT'],
    details: {
      websiteUrl: 'https://www.assystem.com/fr/',
      presentation:
        "Assystem intervient en ingénierie et management de projets techniques complexes. L'entreprise accompagne ses clients industriels sur des sujets de conception, sûreté, performance et pilotage de projets, notamment dans l'énergie et les infrastructures.",
      points: [
        {
          title: 'Ingénierie de projets complexes',
          content:
            'Participation à des programmes techniques de grande ampleur avec des exigences élevées de qualité et de sécurité.',
        },
        {
          title: 'Secteurs industriels stratégiques',
          content:
            "Positionnement fort sur l'énergie et les infrastructures avec des missions multi-disciplinaires.",
        },
        {
          title: 'Pilotage et expertise technique',
          content:
            "Combinaison de compétences d'ingénierie, de gestion de projet et d'appui opérationnel aux équipes clients.",
        },
      ],
    },
  }, */
  aipl: {
    name: "AIPL (Association des Ingenieurs de Polytech Lyon)",
    shortDescription:
      "Association d'alumni de Polytech Lyon qui anime le reseau des ingenieurs, favorise les echanges professionnels et soutient l'insertion des etudiants.",
    logo: aiplLogo,
    relatedFields: ["INFO", "GBM", "MAM", "SIR", "MECA", "MAT"],
    details: {
      websiteUrl:
        "https://www.linkedin.com/company/association-des-ing%C3%A9nieurs-de-polytech-lyon-aipl/?originalSubdomain=fr",
      presentation:
        "L'AIPL rassemble les ingenieurs de Polytech Lyon autour d'un reseau actif d'alumni. L'association entretient les liens entre diplomes, etudiants et ecole, et contribue au developpement professionnel de la communaute via des actions de mise en relation, de partage d'experience et d'accompagnement.",
      points: [
        {
          title: "Reseau alumni Polytech Lyon",
          content:
            "L'association connecte et fait vivre une communaute d'ingenieurs issue des differentes filieres de Polytech Lyon."
        },
        {
          title: "Mise en relation et opportunites",
          content:
            "L'AIPL facilite les contacts professionnels entre etudiants, jeunes diplomes et anciens pour favoriser l'insertion et l'evolution de carriere."
        },
        {
          title: "Evenements et vie du reseau",
          content:
            "L'association anime la communaute a travers des rencontres, des temps d'echange et des initiatives autour du parcours d'ingenieur."
        },
        {
          title: "Accompagnement des etudiants et jeunes diplomes",
          content:
            "Le reseau alumni constitue un appui concret pour mieux comprendre les metiers, les secteurs et les trajectoires professionnelles."
        }
      ]
    }
  },
  abmi: {
    name: "ABMI",
    shortDescription:
      "Groupe de conseil en ingénierie accompagnant les industriels sur des projets techniques complexes, de l'étude à l'exploitation.",
    relatedFields: ["INFO", "SIR", "MECA", "MAT", "MAM", "GBM"],
    logo: abmiLogo,
    details: {
      websiteUrl: "https://abmi-groupe.com/",
      presentation:
        "ABMI accompagne ses clients industriels dans la réalisation de projets d'ingénierie et de transformation. Les équipes interviennent sur des activités de conception, méthodes, industrialisation, pilotage de projet et digitalisation des processus, au service de secteurs techniques exigeants.",
      points: [
        {
          title: "Conseil en ingénierie multi-secteurs",
          content:
            "Interventions sur des environnements industriels variés avec des problématiques techniques de haut niveau."
        },
        {
          title: "Cycle projet complet",
          content:
            "Missions allant des phases d'études et de conception jusqu'à l'industrialisation et l'amélioration continue."
        },
        {
          title: "Double compétence ingénierie et digital",
          content:
            "Opportunités sur des sujets de systèmes d'information industriels, data et optimisation des processus métiers."
        },
        {
          title: "Évolution professionnelle",
          content:
            "Cadre propice à la montée en compétences techniques, au travail en équipe projet et à la prise de responsabilités."
        }
      ]
    }
  },
  cats: {
    name: "Crédit Agricole Technologies & Services",
    shortDescription:
      "Partenaire informatique et technologique des Caisses régionales du Crédit Agricole, en charge du système d'information bancaire.",
    logo: catsLogo,
    relatedFields: ["INFO", "MAM"],
    details: {
      websiteUrl:
        "https://www.credit-agricole.com/marques-et-metiers/toutes-nos-marques/credit-agricole-technologies-et-services",
      careersPortalUrl: "https://ca-technoservices-recrute.talent-soft.com/accueil.aspx?LCID=1036",
      presentation:
        "Crédit Agricole Technologies et Services (CA-TS) est le partenaire informatique et technologique des 39 Caisses régionales du Crédit Agricole. L'entité assure la conception, la fabrication et la maintenance du système d'information bancaire, au service d'une banque de proximité à très grande échelle.",
      points: [
        {
          title: "Cœur technologique des Caisses régionales",
          content:
            "CA-TS conçoit, fabrique et maintient le système d'information bancaire utilisé par les 39 Caisses régionales du Crédit Agricole."
        },
        {
          title: "Implantation multi-sites",
          content:
            "Les équipes sont réparties sur plusieurs sites en France, notamment Annecy, Lyon, Montpellier, Nantes, Paris et Vannes."
        },
        {
          title: "Culture produit et transformation agile",
          content:
            "L'organisation met en avant des modes de travail agiles pour livrer des services numériques robustes et évolutifs."
        },
        {
          title: "Engagement numérique responsable",
          content:
            "CA-TS déploie une politique RSE depuis 2019 et a obtenu le label Numérique Responsable niveau 2 en 2023."
        }
      ]
    }
  },
  andrice: {
    name: "Andrice",
    shortDescription:
      "Société d'ingénierie multi-expertises accompagnant ses clients de l'idée à l'industrialisation, en assistance technique et au forfait.",
    logo: andriceLogo,
    relatedFields: ["INFO", "MAM", "SIR", "MECA"],
    details: {
      websiteUrl: "https://andricegroup.com/",
      careersPortalUrl: "https://www.linkedin.com/company/andrice/jobs/?viewAsMember=true",
      presentation:
        "Andrice se positionne comme une société d'ingénierie qui accompagne ses clients sur toutes les phases d'un projet, de l'idée à l'industrialisation. Le groupe intervient en assistance technique et au forfait via son bureau d'études, avec un positionnement multi-sectoriel orienté R&D, innovation et ingénierie.",
      points: [
        {
          title: "Cycle produit complet",
          content:
            "Interventions sur l'ensemble du cycle de vie produit, incluant conception, développement et industrialisation."
        },
        {
          title: "Expertises pluridisciplinaires",
          content:
            "Domaines cités sur le site: mécanique, électronique, EIA, méthodes industrielles et fonctions business/management."
        },
        {
          title: "Bureau d'études et double mode d'intervention",
          content:
            "Réalisation de projets en assistance technique chez le client ou au forfait au sein du bureau d'études Andrice."
        },
        {
          title: "Culture d'accompagnement",
          content:
            "Mise en avant d'un management de proximité, de la montée en compétences et d'un cadre structuré par des certifications (ISO 9001, MASE, EcoVadis)."
        }
      ]
    }
  },
  bde: {
    name: "BDE Polytech Lyon",
    shortDescription:
      "Bureau des étudiants de Polytech Lyon, organisant des événements et activités pour la vie étudiante sur le campus.",
    logo: bdeLogo,
    relatedFields: ["INFO", "GBM", "MAM", "SIR", "MECA", "MAT"],
    details: {
      websiteUrl: "https://bdepolytechlyon.fr/",
      presentation:
        "Le Bureau des Étudiants (BDE) de Polytech Lyon est une association étudiante qui organise des événements et des activités pour animer la vie sur le campus. Le BDE propose une variété d'initiatives, allant des soirées étudiantes aux activités sportives, en passant par des projets solidaires et des événements culturels. C'est un acteur clé de la vie étudiante à Polytech Lyon, favorisant les échanges, la convivialité et l'engagement au sein de la communauté étudiante. Venez récupérer des goodies sur leur stand !",
      points: [
        {
          title: "Organisation d'événements",
          content:
            "Le BDE organise des événements variés pour animer la vie étudiante sur le campus, allant des soirées aux activités sportives."
        },
        {
          title: "Engagement associatif",
          content:
            "Le BDE encourage l'engagement des étudiants à travers des projets solidaires et des initiatives culturelles."
        },
        {
          title: "Vie étudiante dynamique",
          content:
            "En tant qu'acteur central de la vie étudiante, le BDE favorise les échanges et la convivialité au sein de la communauté de Polytech Lyon."
        }
      ]
    }
  },
  apogee: {
    name: "Apogee Consult",
    shortDescription:
      "Agence web lyonnaise spécialisée en développement full-stack, applications IA/RAG et conseil IT pour des solutions sur mesure.",
    logo: apogeeLogo,
    relatedFields: ["INFO", "SIR", "MAM"],
    details: {
      websiteUrl: "https://apogee-consult.com/",
      careersPortalUrl: "https://apogee-consult.com/careers",
      presentation:
        "Apogee Consult est une agence web basée à Lyon qui accompagne les entreprises dans leur transformation digitale. Le site met en avant des prestations de développement full-stack, d'applications IA & RAG, de conseil IT/DevOps et d'optimisation SEO/performance, avec une approche sur mesure et des livraisons itératives.",
      points: [
        {
          title: "Développement full-stack sur mesure",
          content:
            "Conception et réalisation d'applications web et mobiles de bout en bout, du cadrage jusqu'à la mise en production."
        },
        {
          title: "Expertise IA et RAG",
          content:
            "Intégration de solutions d'IA générative et de recherche augmentée (RAG) pour automatiser et enrichir les usages métiers."
        },
        {
          title: "Conseil IT et DevOps",
          content:
            "Accompagnement sur l'architecture, les pipelines CI/CD, la fiabilité opérationnelle et la montée en charge des projets."
        },
        {
          title: "Positionnement orienté performance",
          content:
            "Le site insiste sur l'optimisation SEO, la performance applicative et une logique de résultats mesurables pour les clients."
        }
      ]
    }
  }
}
