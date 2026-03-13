export type CompanyData = {
  name: string
  shortDescription: string
  relatedFields: ('INFO' | 'GBM' | 'MAM' | 'SIR' | 'MECA' | 'MAT')[]
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
      type: 'alternance' | 'stage'
      title: string
      file: string
    }>
  }
}

export const companies: Record<string, CompanyData> = {
  agixis: {
    name: 'Agixis',
    shortDescription:
      "Un expert du développement logiciel spécialisé dans les secteurs innovants de la santé, de l'IoT et de la transformation digitale.",
    logo: 'images/logos/compressed/agixis.png',
    relatedFields: ['INFO', 'GBM', 'MAM', 'SIR'],
    details: {
      websiteUrl: 'https://www.agixis.com',
      presentation: "Développement logiciel dans la santé, l'IoT et la transformation digitale",
      degreesResearched: ['Bac +4', 'Bac +5', 'Diplomé', 'Bac +3'],
      points: [
        {
          title: "Secteurs d'avenir",
          content:
            "Spécialisation dans la santé et l'IoT, offrant des projets à fort impact sociétal et technologique.",
        },
        {
          title: 'Transformation digitale',
          content:
            'Opportunité de participer activement à la modernisation des processus de différents clients.',
        },
        {
          title: 'Développement logiciel',
          content:
            "Environnement idéal pour consolider ses compétences en ingénierie d'études et développement.",
        },
        {
          title: 'Diversité des profils',
          content: 'Entreprise ouverte aux étudiants et jeunes diplômés (Bac+3 à Bac+5).',
        },
      ],
      offers: [
        {
          type: 'alternance',
          title: 'Alternance Ingénieur études et Développement (F/H)',
          file: 'offers/agixis/Alt IED (HF) AGIXIS.docx',
        },
      ],
    },
  },
  pharea: {
    name: 'PHAREA',
    shortDescription:
      'Un groupe multi-expertises accompagnant les grands projets industriels via la conception, la simulation numérique et le génie électrique.',
    logo: 'images/logos/compressed/pharea.png',
    relatedFields: ['SIR', 'MECA'],
    details: {
      websiteUrl: 'https://www.pharea.com/',
      presentation:
        "Le Groupe Pharea accompagne ses clients dans la mise en œuvre des projets industriels. Spécialisés dans la conception et la simulation numérique, nous avons élargi notre expertise pour offrir des solutions en génie industriel et génie E.I.A* et télécoms & réseaux à travers nos différentes entités. Aujourd'hui, we proposons également des logiciels de simulation numérique. \n\n* électricité, instrumentation, automatisme",
      degreesResearched: ['Bac +5'],
      points: [
        {
          title: 'Excellence technique en calcul',
          content:
            "Maîtrise d'ANSYS, Abaqus, LS-DYNA pour des calculs statiques, dynamiques, sismiques et multiphysiques (fluides et structures).",
        },
        {
          title: '5 marques complémentaires',
          content:
            'Pharea (mécanique), Younicorn (industriel), Anthil (électrique), Optedis (télécoms), Simu.1 (distribution logiciels MSC Software et Hexagon).',
        },
        {
          title: 'Secteurs exigeants',
          content:
            'Nucléaire, aéronautique, énergie, automobile, ferroviaire, BTP, médical et procédés industriels.',
        },
        {
          title: "6 bureaux d'études spécialisés",
          content:
            'Conception mécanique, calculs EF, plasturgie, génie civil, installation générale et charpente métallique.',
        },
        {
          title: 'Missions types',
          content:
            'Ingénieur calculs mécaniques, Ingénieur simulation numérique, Ingénieur méthodes, Automaticien, Chef de projet industriel, Ingénieur qualité nucléaire.',
        },
      ],
      offers: [],
    },
  },
  dymasco: {
    name: 'Dymasco',
    shortDescription:
      "Spécialiste de l'Industrie 4.0 et partenaire de Dassault Systèmes, pilotant la transformation digitale des usines via des solutions MES.",
    logo: 'images/logos/compressed/dymasco.png',
    relatedFields: ['INFO', 'MAM', 'SIR'],
    details: {
      websiteUrl: 'https://www.dymasco.com/fr',
      careersPortalUrl: 'https://dymasco.zohorecruit.eu/jobs/offres-emploi',
      presentation:
        "Dymasco est spécialisée dans les projets industriels IT et la digitalisation des usines.\nPartenaire de Dassault Systèmes, nous déployons des solutions logicielles du portefeuille DELMIA au cœur des environnements de production français et internationaux.\n\nNous accompagnons les industriels dans la mise en place de systèmes MES (Manufacturing Execution System) pour piloter, tracer et optimiser la production en temps réel.\nNos projets combinent informatique, data et compréhension fine des processus industriels.\n\nNos équipes interviennent de l'analyse du besoin jusqu'au déploiement et à l'amélioration continue des solutions.\nRejoindre Dymasco, c'est contribuer concrètement à la transformation digitale de l'industrie et travailler sur des projets techniques à fort impact opérationnel.",
      degreesResearched: ['Bac +5', 'Diplomé'],
      points: [
        {
          title: 'Industrie 4.0',
          content:
            'Cœur de métier axé sur la digitalisation des usines et le déploiement de systèmes MES et IT industriels.',
        },
        {
          title: 'Partenaire Dassault Systèmes',
          content:
            "Utilisation d'un portefeuille logiciel reconnu (DELMIA) dans des contextes internationaux.",
        },
        {
          title: 'Approche pluridisciplinaire',
          content:
            'Projets alliant informatique, gestion des données (data) et expertise des processus industriels.',
        },
        {
          title: 'Cycle en V et Agilité',
          content: "Intervention complète, de l'analyse du besoin jusqu'à l'amélioration continue.",
        },
      ],
      offers: [
        {
          type: 'stage',
          title: 'Développement et amélioration continue des assets internes',
          file: 'offers/dymasco/Stage pole Asset.pdf',
        },
        {
          type: 'stage',
          title:
            "Intégration et montée de version du logiciel de système d'exécution de la fabrication (MES) DELMIA Apriso",
          file: 'offers/dymasco/Stage pole Run.pdf',
        },
      ],
    },
  },
  carrier: {
    name: 'Carrier',
    shortDescription:
      "Un leader industriel mondial dédié à la conception et fabrication d'équipements thermiques de haute technicité pour le CVC et la réfrigération.",
    logo: 'images/logos/compressed/carrier.png',
    relatedFields: ['INFO', 'MAM', 'SIR', 'MAT', 'MECA'],
    details: {
      websiteUrl: 'https://www.carrier.com/commercial/fr/fr/a-propos/carrier-france/',
      careersPortalUrl: 'https://jobs.carrier.com/fr/recherche-d%27offres',
      presentation:
        "Le site Carrier de Montluel est un site industriel majeur du groupe Carrier, spécialisé dans la conception, la fabrication et le développement d'équipements aérauliques et frigorifiques industriels, principalement dans le domaine du CVC (Chauffage, Ventilation, Climatisation) et de la réfrigération.",
      degreesResearched: ['Bac +5'],
      points: [
        {
          title: "Site industriel d'envergure",
          content:
            'Intégration sur le site de Montluel reconnu pour la conception et la fabrication CVC / Réfrigération.',
        },
        {
          title: 'Large panel de métiers',
          content:
            "Des offres multiples couvrant la R&D, l'industrialisation, la qualité, la supply chain et les logiciels embarqués.",
        },
        {
          title: 'Enjeux thermodynamiques',
          content: "Fort besoin d'expertises en mécanique, acoustique, modélisation et énergies.",
        },
        {
          title: 'Rôle clé dans le cycle de production',
          content:
            'Opportunité de participer directement à la chaîne de conception de produits industriels majeurs.',
        },
      ],
      offers: [],
    },
  },
  hecapp: {
    name: 'Healthcare Public Procurement - HeCaPP',
    shortDescription:
      "Une centrale d'achat stratégique dédiée au secteur de la santé, alliant expertise réglementaire et gestion des approvisionnements publics.",
    logo: 'images/logos/compressed/hecapp.png',
    relatedFields: ['GBM'],
    details: {
      websiteUrl: 'https://hecapp.be/',
      presentation:
        "L'HeCaPP est une centrale d'achats selon l'article 2, 6°a et 7°b de la loi du 17 juin 2016 relative aux marchés publics active dans le domaine des soins de santé.",
      degreesResearched: ['Bac +4'],
      points: [
        {
          title: 'Achats de santé publique',
          content:
            "Au cœur de l'approvisionnement des institutions de soins, avec un impact direct sur le système de santé.",
        },
        {
          title: 'Dimension réglementaire',
          content:
            'Forte implication des cadres légaux relatifs aux marchés publics (Loi de 2016).',
        },
        {
          title: 'Fonctions supports et achats',
          content:
            "Une opportunité pour se former dans la fonction d'acheteur public pour des profils transverses.",
        },
        {
          title: 'Poste formateur',
          content:
            'Environnement propice aux stages avec une exigence de montée en compétences (niveau Bac+4).',
        },
      ],
      offers: [],
    },
  },
  atos: {
    name: 'Atos',
    shortDescription:
      "Leader international du numérique transformant la société à travers le cloud, la cybersécurité, l'IA et la décarbonation.",
    logo: 'images/logos/compressed/atos.png',
    relatedFields: ['INFO'],
    details: {
      websiteUrl: 'https://atos.net/fr/',
      careersPortalUrl: 'https://atos.net/fr/rejoignez-nous/stagiaires-et-alternants',
      presentation:
        "Nous sommes une équipe de 72 000 collaborateurs passionnés avec une ambition claire : utiliser le numérique pour faire avancer ce qui compte pour nos clients et la société dans 68 pays.\nChaque jour, nous travaillons ensemble pour créer des fondations numériques fiables et évolutives pour les entreprises, les institutions et les communautés du monde entier. \nAvec nos experts et nos partenaires de classe mondiale, nous développons des solutions numériques du quotidien à la mission critique - en matière d'intelligence artificielle, de cloud hybride, de gestion des infrastructures, de décarbonation et d'expérience collaborateur.\n\nNotre objectif ? \nAvoir un impact significatif pour nos clients et l'ensemble de la société. C'est ce que nous appelons le « Power of We ».\n\nChez Atos Tech Foundations, nous concevons des solutions numériques de la vie quotidienne aux activités critiques – en matière d'intelligence artificielle, de cloud hybride, de gestion des infrastructures, de décarbonation et d'expérience utilisateur.",
      degreesResearched: ['Bac +5'],
      points: [
        {
          title: 'Envergure internationale',
          content:
            'Groupe de 72 000 collaborateurs répartis dans 68 pays, idéal pour débuter une carrière globale.',
        },
        {
          title: 'Tech Foundations',
          content:
            'Projets critiques en IA, cloud hybride, infrastructure réseau, cybersécurité et décarbonation.',
        },
        {
          title: 'Développement et Support',
          content:
            "Offres axées sur le développement d'applications, ainsi que le support N1 et N3 en système et sécurité.",
        },
        {
          title: 'Culture du « Power of We »',
          content:
            "Accent sur l'impact sociétal, la collaboration interdisciplinaire et l'innovation durable.",
        },
      ],
      offers: [],
    },
  },
  bassetti: {
    name: 'BASSETTI',
    shortDescription:
      'Éditeur de logiciels spécialisé dans la gestion des données techniques et scientifiques pour optimiser la performance industrielle et le PLM.',
    logo: 'images/logos/compressed/bassetti.png',
    relatedFields: ['INFO', 'GBM', 'MAM', 'SIR', 'MAT', 'MECA'],
    details: {
      websiteUrl:
        'https://www.bassetti-group.com/?gad_source=1&gad_campaignid=22580662526&gbraid=0AAAAAqxH0s_lDVIGI9e38-bqFxtlLORgn&gclid=Cj0KCQiAhtvMBhDBARIsAL26pjHCgiq-ptBAd6S2UV018RJ2Whh06bHPLW3Wpz42x7Ly_vQlg0a0EfIaAnuQEALw_wcB',
      presentation:
        "Filiale du Groupe BASSETTI, la société BASSETTI est un acteur majeur dans l'édition et l'intégration de logiciels de pointe dédiés à la gestion de données techniques et scientifiques et à la résolution de problématiques en contexte industriel: gestion du risque industriel, de la production (maintenance, qualité…), des mises en conformité réglementaire, du PLM, des flux d'information en usine, en laboratoire...",
      degreesResearched: ['Bac +4', 'Bac +3', 'Bac +5'],
      points: [
        {
          title: 'Data scientifique et technique',
          content:
            'Acteur de référence pour la gestion de données des environnements R&D et industriels.',
        },
        {
          title: "Digitalisation de l'industrie",
          content:
            'Forte présence sur des sujets à forte valeur (PLM, risques industriels, maintenance, conformité, LIMS).',
        },
        {
          title: 'Opportunités pour divers niveaux',
          content:
            "Postes accessibles dès Bac+3 jusqu'à Bac+5 (assistants développeurs, chefs de projet, affaires...).",
        },
        {
          title: 'Développement & Innovation',
          content:
            "Participation au cycle de création, d'intégration de logiciels ou d'activité de Recherche et Innovation (R&I).",
        },
      ],
      offers: [
        {
          type: 'stage',
          title: 'INGENIEUR CHEF DE PROJETS (H/F)',
          file: 'offers/bassetti/ACP2026.pdf',
        },
        {
          type: 'stage',
          title: 'INGENIEUR CHEF DE PROJETS (H/F)',
          file: 'offers/bassetti/ACP Chine 2026.pdf',
        },
        {
          type: 'stage',
          title: 'INGÉNIEUR DÉVELOPPEUR FULL-FRONT-BACK (H/F)',
          file: 'offers/bassetti/ADEV26.pdf',
        },
        {
          type: 'stage',
          title: 'INGÉNIEUR DÉVELOPPEUR INTEGRATEUR (H/F)',
          file: 'offers/bassetti/ADI26.pdf',
        },
        { type: 'stage', title: "INGÉNIEUR D'AFFAIRES (H/F)", file: 'AIA26.pdf' },
      ],
    },
  },
  worldline: {
    name: 'WORLDLINE',
    shortDescription:
      'Leader européen des services de paiement, repoussant les frontières de la fintech, de la blockchain et des transactions numériques sécurisées.',
    logo: 'images/logos/compressed/worldline.png',
    relatedFields: ['INFO'],
    details: {
      websiteUrl: 'https://worldline.com/fr-fr/home',
      presentation:
        "Nous façonnons un nouveau monde de paiements et de transactions fiables. Grâce à notre technologie de paiement avancée, à notre expertise en matière de paiements locaux et à nos solutions personnalisées pour des centaines de marchés et d'industries, nous aidons des millions d'entreprises de toutes tailles à réaliser leurs ambitions - plus rapidement, plus simplement et de manière plus sûre.",
      degreesResearched: ['Bac +4', 'Bac +5'],
      points: [
        {
          title: 'Paiement et transactions',
          content:
            'Leader européen dans les services de paiement électronique et transactions digitales.',
        },
        {
          title: 'Haut niveau de sécurité',
          content:
            'Enjeux cruciaux autour de la sécurisation des architectures et de la confidentialité des données.',
        },
        {
          title: 'Innovation technologique',
          content:
            "Opportunité de travailler sur l'évolution des Fintech, la blockchain et l'open-banking.",
        },
        {
          title: 'Grande échelle (Scale)',
          content:
            'Projets supportant des millions de transactions par jour, exigeant des performances de pointe.',
        },
      ],
      offers: [],
    },
  },
  thelio: {
    name: 'THELIO',
    shortDescription:
      'Cabinet de conseil 100% data, expert en ingénierie, analytics et intelligence artificielle pour piloter la performance des entreprises.',
    logo: 'images/logos/compressed/thelio.png',
    relatedFields: ['INFO', 'MAM'],
    details: {
      websiteUrl: 'https://www.thelio.fr/',
      careersPortalUrl: 'https://www.welcometothejungle.com/fr/companies/thelio',
      presentation:
        "Thélio est un cabinet de conseil et d'intégration 100 % data, accompagnant les organisations sur toute la chaîne de valeur de leurs données, de la stratégie et de la gouvernance jusqu'à l'ingénierie, l'analytics et les usages IA.\nNotre mission est de démystifier la donnée pour la rendre accessible, exploitable et source de performance pour les entreprises.\nAvec une équipe d'experts répartie sur plusieurs agences en France, nous aidons nos clients à transformer leurs données en leviers de décision et d'innovation.",
      degreesResearched: ['Bac +5', 'Diplomé'],
      points: [
        {
          title: 'Expertise 100% Data',
          content:
            'Spécialisation complète sur la chaîne de valeur de la donnée (Stratégie, Ingénierie, Analytics, IA).',
        },
        {
          title: 'Variété des métiers',
          content: 'Nombreux rôles allant de Data Engineer à Data Scientist et ML Engineer.',
        },
        {
          title: 'Démocratisation de la donnée',
          content:
            "Objectif affirmé de rendre l'usage des données accessible et performant pour les clients.",
        },
        {
          title: 'Écosystème Conseil',
          content:
            'Postes en mode agence avec une approche consultative, nécessitant analyse métier et technique.',
        },
      ],
      offers: [
        {
          type: 'alternance',
          title: 'Consultant Data et BI H/F - Alternance',
          file: 'offers/thelio/THELIO Consultant Data et BI - Alternance & Stage.pdf',
        },
      ],
    },
  },
  'mots-justes': {
    name: 'LES MOTS JUSTES',
    shortDescription:
      'Une experte en relecture et correction professionnelle pour garantir la qualité rédactionnelle de vos mémoires, thèses et rapports techniques.',
    logo: 'images/logos/compressed/les-mots-justes.png',
    relatedFields: ['INFO', 'GBM', 'MAM', 'SIR', 'MAT', 'MECA'],
    details: {
      presentation:
        "En tant que correctrice-relectrice professionnelle, je mets mes compétences linguisitiques au service des textes de mes clients. \nJe m'attache à relire et corriger tout support écrit traditionnel et/ou digital tant au niveau de la grammaire, de la conjugaison, de la syntaxe qu'au niveau de l'orthotypographie afin d'en améliorer la forme linguistique, la cohérence, la justesse et ainsi la compréhension par le public de lecteurs visés. \nJe propose donc mes prestations de service aux étudiants pour leur mémoire de fin d'études ou rapports de stage, aux enseignants pour leur thèse et sujets d'étude, aux organismes d'enseignement et de formation pour leurs supports pédagogiques, ainsi qu'aux entreprises et aux administrations pour leurs rapports, leurs notices et/ou leurs communications internes et/ou externes.",
      degreesResearched: ['Bac +3', 'Bac +4', 'Bac +5', 'Diplomé'],
      points: [
        {
          title: 'Prestation pour étudiants',
          content:
            'Service de relecture et correction indispensable pour les mémoires, thèses et rapports de stages.',
        },
        {
          title: 'Qualité rédactionnelle',
          content:
            "L'accent est mis sur l'orthotypographie, la cohérence et la précision du domaine technique décrit.",
        },
        {
          title: 'Service indépendant',
          content:
            "Profil de correctrice-relectrice professionnelle plutôt qu'un recruteur classique d'ingénieurs.",
        },
        {
          title: 'Valorisation des écrits tech',
          content:
            "Comprendre l'importance de la forme linguistique pour la vulgarisation et la transmission de travaux d'ingénierie.",
        },
      ],
      offers: [],
    },
  },
  vicinity: {
    name: 'VICINITY',
    shortDescription:
      "Cabinet de conseil lyonnais à taille humaine, expert en ingénierie et IT, axé sur la proximité et l'engagement sociétal.",
    logo: 'images/logos/compressed/vicinity.png',
    relatedFields: ['INFO', 'SIR', 'MECA'],
    details: {
      websiteUrl: 'https://www.vicinity-group.fr/',
      presentation:
        'Nous sommes une société de conseil spécialisée en ingénierie et en IT, basée à Lyon et fondée en septembre 2020. \n\nNotre vie entreprise repose sur 4 valeurs qui sont les suivantes : proximité, bienveillance, expertise technique et engagement sociétal et sportif.',
      degreesResearched: ['Bac +5', 'Diplomé'],
      points: [
        {
          title: 'Société à taille humaine',
          content: 'Basée à Lyon avec un ancrage local fort et une volonté de proximité.',
        },
        {
          title: "Métier de l'ingénierie d'affaires",
          content:
            'Opportunité de développer la double compétence technique/commerciale très prisée.',
        },
        {
          title: 'Valeurs fortes',
          content:
            "Engagement sociétal et sportif mis en avant, favorable à l'intégration et au bien-être.",
        },
        {
          title: 'Double axe IT et Ingénierie',
          content:
            "Ouverture aussi bien aux profils en systèmes d'information qu'en ingénierie classique.",
        },
      ],
      offers: [
        {
          type: 'alternance',
          title: "Alternance Ingénieur d'Affaires F/ H",
          file: 'offers/vicinity/Alternance Ingénieur d_affaires .pdf',
        },
        {
          type: 'stage',
          title: 'Stage développeur C# F/H',
          file: 'offers/vicinity/Stage développement .Net.pdf',
        },
        {
          type: 'stage',
          title: 'Stage développeur Java F/H',
          file: 'offers/vicinity/Stage développeur Java.pdf',
        },
        {
          type: 'stage',
          title: "Stage Ingénieur d'Affaires F/H",
          file: 'offers/vicinity/Stage Ingénieur d_affaires.pdf',
        },
      ],
    },
  },
  dattico: {
    name: 'Dattico',
    shortDescription:
      'Cabinet de conseil spécialisé dans la création de plateformes de données uniques qui génèrent une valeur stratégique pour les entreprises.',
    logo: 'images/logos/originals/dattico.svg',
    relatedFields: ['INFO'],
    details: {
      websiteUrl: 'https://www.dattico.com',
      presentation:
        "Dattico est un cabinet de conseil spécialisé dans la création de plateformes de données uniques qui génèrent une valeur stratégique pour les entreprises. Nous commençons par comprendre votre stratégie, puis nous concentrons vos données afin de créer une solution personnalisée qui répond à vos besoins. Recrutement pour les projets : nous helpons les entreprises à recruter du personnel pour leurs projets. Projets : nous sommes convaincus que notre équipe est capable de fournir d'excellents produits de données. Revendeur Azure/AWS : nous pouvons héberger votre solution de données.",
      degreesResearched: ['Diplomé', 'Bac +5'],
      points: [
        {
          title: 'Orienté IT / Numérique',
          content:
            'Spécialisé majoritairement sur les profils informatiques de niveau Bac+5 et plus.',
        },
        {
          title: 'Positionnement marché',
          content:
            "Interventions probables en développement d'applications, conseil technique ou intégration.",
        },
      ],
      offers: [
        {
          type: 'stage',
          title: 'Application Development Intern – Cloud, Voice AI & LLMs',
          file: 'offers/dattico/Application Development Internship.docx',
        },
      ],
    },
  },
  capgemini: {
    name: 'Capgemini',
    shortDescription:
      "Géant mondial de la tech accompagnant la transformation des entreprises à travers l'IA, le Cloud, la Data et l'ingénierie durable.",
    logo: 'images/logos/compressed/capgemini.png',
    relatedFields: ['INFO', 'MAM', 'SIR', 'MECA'],
    details: {
      websiteUrl: 'https://www.capgemini.com/fr-fr/',
      careersPortalUrl:
        'https://www.capgemini.com/fr-fr/carrieres/parcours-professionnels/etudiants-diplomes/stage-et-alternance/',
      presentation:
        "Capgemini, partenaire de la transformation business et technologique de ses clients, les accompagne dans leur transition vers un monde plus digital et durable, tout en créant un impact positif pour la société. Le Groupe, responsable et multiculturel, rassemble 340 000 collaborateurs dans plus de 50 pays. Depuis plus de 55 ans, ses clients lui font confiance pour répondre à l'ensemble de leurs besoins grâce à la technologie. Capgemini propose des services et solutions de bout en bout, allant de la stratégie et du design jusqu'à l'ingénierie, en tirant parti de ses compétences de pointe en intelligence artificielle et IA générative, en cloud, et en data, ainsi que de son expertise sectorielle et de son écosystème de partenaires. Le Groupe a réalisé un chiffre d'affaires de 22,1 milliards d'euros en 2024.",
      degreesResearched: ['Bac +4', 'Bac +5'],
      points: [
        {
          title: "Leader de l'ESN",
          content:
            'Acteur incontournable du numérique mondial (340 000 collaborateurs), idéal pour faire ses armes.',
        },
        {
          title: 'Diversité de secteurs',
          content:
            "Projets dans l'IA, le Cloud, la Data, et les grands systèmes intégrés (SAP, Salesforce).",
        },
        {
          title: 'Outil de transformation',
          content: "Approche de bout en bout de la stratégie au design et à l'ingénierie tech.",
        },
        {
          title: 'Multitude des rôles',
          content:
            'Des postes très diversifiés (développement, qualification, ingénierie de la donnée, conseil ERP).',
        },
      ],
      offers: [],
    },
  },
  amiltone: {
    name: 'Amiltone',
    shortDescription:
      "Une agence digitale agile intervenant sur la conception d'applications web, mobiles et les infrastructures numériques.",
    logo: 'images/logos/compressed/amiltone.png',
    relatedFields: ['INFO'],
    details: {
      websiteUrl: 'https://www.amiltone.com/',
      presentation:
        "Amiltone est une Entreprise de Services du Numérique (ESN) qui accompagne les organisations dans leur transformation digitale à travers toute la France. Elle s'appuie sur une équipe de plus de 400 experts répartis dans 8 agences pour offrir un accompagnement de proximité et sur mesure. Ses domaines d'intervention couvrent l'intégralité du cycle de vie d'un projet, incluant le conseil, le design UX/UI, ainsi que le développement d'applications web et mobiles. L'entreprise se distingue par ses pôles d'expertise pointus en Data, Intelligence Artificielle et cybersécurité, garantissant des solutions technologiques innovantes et sécurisées. Enfin, Amiltone place l'humain et l'engagement éco-responsable au cœur de sa stratégie en cherchant activement à réduire son empreinte énergétique.",
      degreesResearched: ['Bac +5', 'Bac +4', 'Bac +3'],
      points: [
        {
          title: 'Service Numérique',
          content:
            'Interventions variées sur le plan du développement web, mobile et infrastructures.',
        },
        {
          title: 'Ouverture des profils',
          content: "Accessible très vite dans le cursus (dès Bac+3) jusqu'au niveau ingénieur.",
        },
      ],
      offers: [],
    },
  },
  groupama: {
    name: 'Groupama Support & Service',
    shortDescription:
      "GIE informatique du Groupe Groupama, spécialisé dans la transformation digitale et l'innovation technologique pour les entreprises du groupe.",
    logo: 'images/logos/compressed/g2s.png',
    relatedFields: ['INFO'],
    details: {
      websiteUrl: 'https://www.g2s-groupama-technologies.fr/',
      careersPortalUrl: 'https://www.groupama-gan-recrute.com/',
      presentation:
        "Groupama Support & Service (G2S) est le GIE informatique du Groupe Groupama.\nNous mettons la puissance des nouvelles technologies – data, intelligence artificielle, cybersécurité, robotique, objets connectés, smart building, … – au service des entreprises du groupe Groupama et les transforme en solutions métiers innovantes pour apporter de la valeur ajoutée à ses 12 millions de sociétaires et clients. \nNos 1500 collaborateurs, répartis sur une dizaine de sites en France, interviennent sur tous les métiers de l'IT et aussi sur l'Immobilier d'exploitation et les Achats.  Nous nous inscrivons pleinement dans les valeurs portées par notre Groupe qui sont celles du mutualisme : Solidarité, Engagement, Proximité, Responsabilité.",
      degreesResearched: ['Bac +4', 'Bac +5', 'Bac +3'],
      points: [
        {
          title: 'GIE du Groupe Groupama',
          content: "Rôle central dans la transformation digitale d'un grand groupe mutualiste.",
        },
        {
          title: 'Technologies innovantes',
          content: 'Projets impliquant data, IA, cybersécurité, robotique, IoT et smart building.',
        },
        {
          title: 'Large spectre de métiers IT',
          content:
            "Interventions sur tous les métiers de l'informatique, ainsi que sur l'immobilier d'exploitation et les achats.",
        },
        {
          title: 'Valeurs mutualistes',
          content: 'Engagement dans des valeurs fortes de solidarité, proximité et responsabilité.',
        },
      ],
      offers: [],
    },
  },
  coexya: {
    name: 'COEXYA',
    shortDescription:
      'Acteur multi-spécialiste du numérique, combinant conseil, édition logicielle et intégration pour accélérer la transformation digitale.',
    logo: 'images/logos/compressed/coexya.png',
    relatedFields: ['INFO'],
    details: {
      websiteUrl: 'https://www.coexya.eu',
      careersPortalUrl: 'https://jobs.coexya.eu',
      presentation:
        "Coexya est un actor du numérique, multi-spécialiste exerçant les métiers d'intégrateur, d'éditeur de software et de conseil. Nous accompagnons les entreprises dans leur transformation digitale et l'exploitation de leur data, par le développement de solutions répondant aux nouveaux usages pour leurs collaborateurs et leurs clients. En 2024, Coexya a rejoint le groupe Talan, acteur international de conseil et d'expertises technologiques qui accélère la transformation de ses clients par les leviers de l'innovation, la technologie et la data.",
      degreesResearched: ['Bac +3', 'Bac +5', 'Bac +4'],
      points: [
        {
          title: 'Triple compétence',
          content: 'Agit à la fois comme intégrateur, éditeur et société de conseil.',
        },
        {
          title: 'Envergure internationale',
          content: 'Adossement récent au groupe Talan, augmentant sa capacité de projection.',
        },
        {
          title: 'Valeur de la donnée',
          content:
            'Forte orientation autour de la valorisation de la donnée et des nouveaux usages numériques.',
        },
        {
          title: 'Ouverture',
          content:
            'Des missions de développement accessibles dès le cycle Licence et tout au long du cursus ingénieur.',
        },
      ],
      offers: [
        {
          type: 'alternance',
          title: 'Apprenti ingénieur études et développement F/H Search & Sémantique',
          file: 'offers/coexya/ALTSSLSA25.pdf',
        },
        {
          type: 'alternance',
          title: 'Alternant Ingénieur Système, Réseau et Cybersécurité',
          file: 'offers/coexya/ALTPIS25.pdf',
        },
        {
          type: 'alternance',
          title: 'Apprenti ingénieur études et développement F/H Mobilité Urbaine Intelligente',
          file: 'offers/coexya/ALTMUI25.pdf',
        },
        {
          type: 'alternance',
          title:
            "Apprenti ingénieur d'études et développement F/H Dématérialisation - GED - Archivage",
          file: 'offers/coexya/ALTIDL25.pdf',
        },
        {
          type: 'alternance',
          title: 'Apprenti ingénieur études et développement F/H Master Data Management',
          file: 'offers/coexya/ALTDGM24.pdf',
        },
      ],
    },
  },
  nextdecision: {
    name: 'Next Decision',
    shortDescription:
      "Cabinet d'experts en Data & IA accompagnant les organisations dans l'optimisation de leur SI et de leurs enjeux RSE.",
    logo: 'images/logos/compressed/next-decision.png',
    relatedFields: ['INFO'],
    details: {
      websiteUrl: 'https://www.next-decision.fr/',
      careersPortalUrl: 'https://www.recrutement-next-decision.fr/',
      presentation:
        "Nous sommes un cabinet d'experts en Data & IA, Organisation SI, RSE & ESG, Pilotage des rémunérations, Business Apps et Digital.\nNous accompagnons nos clients sur du conseil, des formations, des licences et sur l'implémentation de solutions et logiciels.",
      degreesResearched: ['Bac +5', 'Diplomé', 'Bac +4'],
      points: [
        {
          title: 'Cabinet de conseil pluridisciplinaire',
          content:
            "Orientation forte sur les enjeux de données (Data & IA) et d'organisation des systèmes d'information.",
        },
        {
          title: 'Métier de consultant',
          content:
            "Axé sur l'accompagnement, la formation et l'implémentation chez les clients finaux.",
        },
        {
          title: 'Enjeux multiples',
          content: 'Touche des thématiques modernes comme la RSE/ESG ou le pilotage financier.',
        },
        {
          title: 'Spécialisation',
          content:
            'Focus évident sur les postes de Consultants Data, combinant compétences tech et posture de conseil.',
        },
      ],
      offers: [],
    },
  },
  parlym: {
    name: 'PARLYM',
    shortDescription:
      "Référence de l'ingénierie industrielle gérant des projets complexes dans l'énergie, le nucléaire et la défense à l'échelle mondiale.",
    logo: 'images/logos/originals/parlym.svg',
    relatedFields: ['MECA'],
    details: {
      websiteUrl: 'https://www.parlym.com/',
      presentation:
        "PARLYM, c'est avant tout…\n\nPlus de 50 ans d'ingénierie, mais surtout une aventure humaine en mouvement 🚀\nNous concevons et pilotons des projets d'ingénierie ambitieux, en France comme à l'international. Aujourd'hui, ce sont 2 000 talents passionnés, 330 M € de CA et 270 clients qui font vivre nos projets au quotidien. Nos équipes conçoivent et réalisent des projets clés en main au cœur de secteurs stratégiques : nucléaire, transition énergétique, industrie, Oil & Gas, défense, pharmacie et énergies renouvelables.\n\n Ce qui fait notre différence ?\n✨ Dynamisme, pour avancer et innover\n🧠 Savoir-faire – une expertise reconnue, construite sur l'excellence technique\n🤝 Esprit d'équipe, parce que les plus beaux projets se réussissent ensemble\n\nPARLYM, c'est l'ingénierie engagée, ambitieuse et résolument tournée vers l'avenir.",
      degreesResearched: ['Diplomé', 'Bac +5', 'Bac +4'],
      points: [
        {
          title: 'Ingénierie de grands projets',
          content:
            'Une forte expertise dans la gestion de projets clés en main et de grande échelle (EPC).',
        },
        {
          title: 'Secteurs critiques',
          content:
            "Intervention dans l'énergie (nucléaire, ENR, Oil&Gas), la défense, la pharmacie et l'industrie lourde.",
        },
        {
          title: 'Dimension internationale',
          content:
            "Présence globale permettant une forte mobilité géographique sur des projets d'envergure.",
        },
        {
          title: "Culture d'entreprise",
          content:
            "Mise en avant du travail d'équipe, de l'excellence technique et de l'innovation.",
        },
      ],
      offers: [],
    },
  },
  soprasteria: {
    name: 'SOPRA STERIA GROUP',
    shortDescription:
      "Leader européen de la tech explorant les frontières de l'IA, du cyber et du quantique pour sécuriser le monde numérique de demain.",
    logo: 'images/logos/compressed/soprasteria.png',
    relatedFields: ['INFO', 'MAM', 'SIR'],
    details: {
      websiteUrl: 'https://www.soprasteria.fr/accueil',
      careersPortalUrl: 'https://www.soprasteria.fr/carrieres',
      presentation:
        "En tant que leader européen des services du numérique, nous faisons le lien entre les technologies de pointe et les besoins essentiels des entreprises, nous transformons la complexité en solutions tangibles, souveraines et durables, nous repoussons les limites de l'IA, du cyber-espace, du cloud et du quantique.\nEn produisant un impact durable, en accompagnant les transformations audacieuses, en sécurisant les environnements numériques et en étant les pionniers d'une innovation responsable à forte valeur ajoutée, et à grande échelle.\nNous sommes 50 000 collaborateurs et collaboratrices, au sein de 30 pays, au service d'un groupe européen.\n\nNous sommes l'alternative de confiance dans un monde polarisé.",
      degreesResearched: ['Bac +5'],
      points: [
        {
          title: 'Leader européen',
          content: "Parmi les plus grandes ESN d'Europe (50 000 collaborateurs).",
        },
        {
          title: 'Enjeux prospectifs',
          content:
            "Positionnement forte sur l'IA, le Cloud, la cybersécurité, mais aussi des domaines d'avenir comme le quantique.",
        },
        {
          title: 'Transversalité des rôles',
          content:
            'Besoin de développeurs fullstack, ingénieurs logiciels, consultants ERP (SAP) et Business Analysts.',
        },
        {
          title: 'Impact durable et souveraineté',
          content:
            "Accent mis sur l'innovation responsable et la sécurisation souveraine des données européennes.",
        },
      ],
      offers: [],
    },
  },
  technord: {
    name: 'Technord France',
    shortDescription:
      "Ensemblier industriel spécialisé dans l'intégration de solutions d'électricité, d'automatisme et d'informatique industrielle (MES).",
    logo: 'images/logos/compressed/technord.png',
    relatedFields: ['INFO', 'SIR'],
    details: {
      websiteUrl: 'https://www.technord.com/',
      careersPortalUrl: 'https://jobs.technord.com/',
      presentation:
        "Technord est un ensemblier et intégrateur industriel qui rassemble toutes les compétences nécessaires à la conception, la fabrication, l'installation, la mise en service et la maintenance d'équipements industriels.\nNous intervenons en du génie électrique, automatisme et informatique industrielle.\n\nGroupe 100% familial basé à Tournai (B), Technord réalise un chiffre d'affaire de plus de 150M € en s'appuyant sur plusieurs filiales et grâce à ses 500 collaborateurs.\n\nL'entreprise est reconnue pour la fiabilité de ses solutions (électricité, automation et informatique industrielle), les technologies de pointe qu'elle propose et sa flexibilité pour répondre aux besoins de ses clients.\n\nTravailler chez Technord, c'est adhérer à une culture d'entreprise tournée vers la satisfaction des clients et la réussite collective. Notre système de management socio-économique vise en effet à responsabiliser, développer et récompenser notre personnel pour sa contribution aux succès de l'organisation.",
      degreesResearched: ['Bac +5'],
      points: [
        {
          title: 'Intégrateur industriel',
          content:
            "Maîtrise complète de la chaîne, de la conception à la maintenance d'équipements.",
        },
        {
          title: 'Culture familiale',
          content:
            'Groupe à taille humaine valorisant la responsabilisation et le développement du personnel.',
        },
      ],
      offers: [
        {
          type: 'stage',
          title: 'Ingénieur Automatisme (H/F/X)',
          file: 'offers/technord/Technord - Stage Automatisme 2026.pdf',
        },
        {
          type: 'stage',
          title: 'Ingénieur Informatique Industrielle (H/F/X)',
          file: 'offers/technord/Technord - Stage MES 2026.pdf',
        },
      ],
    },
  },
  foselev: {
    name: 'Foselev',
    shortDescription:
      "Groupe indépendant leader dans les services à l'industrie, au BTP et au nucléaire.",
    logo: 'images/logos/compressed/foselev.png',
    relatedFields: ['MECA'],
    details: {
      websiteUrl: 'https://www.foselev.com/',
      careersPortalUrl: 'https://foselev.tzportal.io/fr/jobs',
      presentation:
        "FOSELEV, fondé en 1970, est un groupe indépendant spécialisé dans les services à l'industrie, au BTP et au nucléaire, réalisant un chiffre d'affaires de 500 M€.\n\nPlus de 3000 collaborateurs sont employés au travers d'un réseau de 120 implantations en France comme à l'international.\n\nL'offre de service s'articule autour de 3 pôles de compétences complémentaires :\n- Services & Logistique : Levage, Transport, Manutention...\n- Maintenance Industrielle : Contrats de Maintenance, Travaux d'Arrêts...\n- Contracting : Constructions d'Unités, Levages Lourds...",
      degreesResearched: ['Bac +5', 'Diplomé'],
      points: [
        {
          title: "Pôles d'expertise",
          content: "Levage, maintenance industrielle et contracting pour des projets d'envergure.",
        },
        {
          title: 'Réseau étendu',
          content:
            "120 implantations en France et à l'international avec plus de 3000 collaborateurs.",
        },
        {
          title: 'Secteurs stratégiques',
          content: 'Interventions critiques dans le nucléaire et les grands ensembles industriels.',
        },
        {
          title: 'Multi-métiers',
          content: 'Opportunités en constructions modulaires, maintenance et logistique.',
        },
      ],
      offers: [],
    },
  },
  lhoist: {
    name: 'Lhoist France',
    shortDescription:
      'Leader mondial de la production de chaux et minéraux essentiels aux processus industriels.',
    logo: 'images/logos/originals/lhoist.svg',
    relatedFields: ['MAT', 'MECA', 'SIR'],
    details: {
      websiteUrl: 'https://www.lhoist.com/fr-FR',
      careersPortalUrl: 'https://www.lhoist.com/fr-FR/a-propos/carrieres',
      presentation:
        "Lhoist est un groupe industriel belge spécialisé dans la production de chaux, de dolomie et de minéraux, matières premières essentielles pour de nombreux secteurs industriels.\nL'entreprise exploite des carrières de calcaire et de dolomie, transforme ces ressources en produits à haute valeur ajoutée, et développe des applications industrielles adaptées aux besoins de ses clients.",
      degreesResearched: ['Bac +5'],
      points: [
        {
          title: 'Maîtrise minérale',
          content:
            "Spécialiste de la chaux et de la dolomie pour l'acier, l'environnement et l'industrie.",
        },
        {
          title: 'Expertise Process',
          content:
            "Enjeux forts sur l'optimisation des procédés de calcination et la qualité des matériaux.",
        },
        {
          title: 'Maintenance & Automatisme',
          content:
            "Besoin d'ingénierie pour la fiabilisation d'équipements lourds (fours, broyeurs).",
        },
        {
          title: 'Projets Industriels',
          content: "Pilotage d'investissements majeurs dans un contexte de production continue.",
        },
      ],
    },
  },
  sfen: {
    name: 'SFEN Rhône-Ain-loire',
    shortDescription:
      "Société savante et carrefour de connaissances dédié à l'énergie nucléaire et ses applications.",
    logo: 'images/logos/compressed/sfen.png',
    relatedFields: ['MAT', 'MECA'],
    details: {
      websiteUrl: 'https://sfenral.fr/',
      presentation:
        "La Société Française d'Energie Nucléaire est le carrefour français des connaissances sur l'énergie nucléaire. Créée en 1973 en Association selon la loi de 1901, la Sfen est un lieu d'échanges pour celles et ceux qui s'intéressent à l'énergie nucléaire et à ses applications. La Sfen RAL est le Groupe régional de la Sfen actif sur les départements du Rhône, de l'Ain et de la Loire.",
      degreesResearched: ['Bac +3', 'Bac +4', 'Bac +5'],
      points: [
        {
          title: "Réseau d'experts",
          content:
            "Lieu d'échanges privilégié entre professionnels et étudiants du secteur nucléaire.",
        },
        {
          title: 'Connaissances techniques',
          content:
            "Promotion des savoir-faire scientifiques liés à l'atome et à la transition énergétique.",
        },
        {
          title: 'Ancrage régional',
          content:
            "Dynamisation de la filière nucléaire sur les départements du Rhône, de l'Ain et de la Loire.",
        },
        {
          title: 'Veille scientifique',
          content:
            "Accès à une information de référence sur les évolutions technologiques de l'énergie.",
        },
      ],
      offers: [],
    },
  },
  cgi: {
    name: 'CGI',
    shortDescription:
      'Leader mondial du conseil et des services numériques accompagnant la transformation des organisations.',
    logo: 'images/logos/compressed/cgi.png',
    relatedFields: ['INFO'],
    details: {
      websiteUrl: 'https://www.cgi.com/fr',
      careersPortalUrl: 'https://www.cgi.com/fr/carrieres',
      presentation:
        "CGI est une équipe mondiale, leader du conseil et des services numériques, qui possède une connaissance fine des différents secteurs d'activité et une expertise technologique nous permettant d'anticiper les changements du marché. Nous accompagnons nos clients à travers quatre métiers : le conseil, l'intégration de systèmes, les business solutions et les services managés. Chez CGI, nous sommes plus que des employés, nous sommes aussi des associés.",
      degreesResearched: ['Bac +5'],
      points: [
        {
          title: 'Expertise Multidimensionnelle',
          content: "Intervient dans le conseil, l'intégration de systèmes et les services managés.",
        },
        {
          title: "Culture d'Associés",
          content:
            'Modèle unique où les collaborateurs sont actionnaires et acteurs de la réussite.',
        },
        {
          title: 'Innovation Technologique',
          content: "Projets d'envergure en cybersécurité, Big Data et Intelligence Artificielle.",
        },
        {
          title: 'Échelle Mondiale',
          content:
            'Une présence internationale forte offrant des parcours de carrière diversifiés.',
        },
      ],
      offers: [
        {
          type: 'alternance',
          title: 'Alternance : Assistant(e) chef(fe) de projet / PMO F/H',
          file: 'offers/cgi/Alternance Développeur(se) fullstack Java-Angular.pdf',
        },
        {
          type: 'stage',
          title: 'Stage : Testeur(se) fonctionnel F/H',
          file: 'offers/cgi/Alternance Ingénieur(e) OPS F-H.pdf',
        },
      ],
    },
  },
  soie: {
    name: 'SOIE (Service Orientation Insertion)',
    shortDescription:
      "Service d'orientation et d'insertion professionnelle de l'Université Lyon 1, facilitant la transition des étudiants vers le monde professionnel.",
    logo: 'images/logos/originals/soie.png',
    relatedFields: ['INFO', 'MAM', 'SIR', 'MAT', 'MECA', 'GBM'],
    details: {
      websiteUrl: 'https://soie.univ-lyon1.fr/',
      presentation:
        "Le SOIE est le Service d'Orientation et d'Insertion professionnelle de l'Université. Sa mission est d'accompagner les étudiants dans la construction de leur projet professionnel et de faciliter leur insertion sur le marché du travail. Ce n'est pas un recruteur, mais un partenaire clé de votre réussite.",
      points: [
        {
          title: 'Aide à la recherche de stage',
          content:
            'Le SOIE centralise et diffuse des offres, organise des forums comme celui-ci et peut vous conseiller dans votre recherche.',
        },
        {
          title: 'Ateliers CV et lettre de motivation',
          content:
            "Aide à optimiser vos outils de candidature pour maximiser vos chances, atelier CV pour l'étranger.",
        },
        {
          title: 'Préparation aux entretiens',
          content:
            "Organisation de simulations d'entretiens pour vous entraîner et recevoir des conseils personnalisés.",
        },
        {
          title: 'Ressource incontournable',
          content:
            "N'hésitez pas à les solliciter tout au long de votre parcours pour toute question liée à votre projet professionnel.",
        },
      ],
    },
  },
  polyenco: {
    name: 'Polyenco',
    shortDescription:
      "Junior-Entreprise de l'école, offrant des services de conseil et d'ingénierie pour les entreprises.",
    logo: 'images/logos/originals/polyenco.png',
    relatedFields: ['INFO', 'MAM', 'SIR', 'MAT', 'MECA', 'GBM'],
    details: {
      websiteUrl: 'https://junior-polyenco.fr/',
      presentation:
        'Polyenco (Poly Engineering Consulting) est la Junior- Entreprise de Polytech Lyon, fondée en 2007 et composée de 18 membres étudiants.Structure à but pédagogique et économique, elle met en relation les entreprises avec plus de 500 élèves - ingénieurs de Polytech Lyon à travers ses 6 filières.Finaliste du prix CNJE du meilleur espoir 2023, Polyenco réalise des prestations techniques dans des domaines variés: digital, biomédical et conception mécanique.',
      points: [
        {
          title: 'Expertise étudiante pluridisciplinaire',
          content:
            'Accès aux 6 filières de Polytech Lyon(Mécanique, Informatique, Math Appliquée, Biomédical, Matériaux, Génie Industriel).',
        },
        {
          title: 'Accompagnement complet',
          content:
            "Suivi de A à Z des projets par l'équipe administrative de la Junior-Entreprise, garantissant qualité et professionnalisme.",
        },
        {
          title: 'Tarifs attractifs',
          content:
            'Prestations de qualité à prix étudiants, idéales pour PME, startups ou projets innovants à budget maîtrisé.',
        },
        {
          title: "Domaines d'intervention",
          content:
            'Développement web/mobile, informatique industrielle/médicale, calculs haute performance, modélisation, conception mécanique, gestion de données, automatisation hospitalière.',
        },
        {
          title: 'Avantages',
          content:
            "Flexibilité, réactivité, regard neuf sur vos problématiques, accès aux dernières connaissances académiques et outils de l'école.",
        },
      ],
    },
  },
}
