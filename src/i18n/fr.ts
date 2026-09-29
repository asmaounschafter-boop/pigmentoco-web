import type { Dict } from "./en";

const fr: Dict = {
  meta: {
    title: "PigmentOCO — Teinture textile sans eau au CO₂ supercritique",
    description:
      "PigmentOCO teint le coton au CO₂ supercritique en circuit fermé : zéro eau, zéro rejet, moins de chimie et des coûts d'exploitation réduits pour les industriels du textile.",
  },
  nav: {
    technology: "Technologie",
    impact: "Impact",
    about: "À propos",
    news: "Actualités",
    contact: "Contact",
    cta: "Prendre rendez-vous",
    menu: "Menu",
    close: "Fermer",
  },
  common: {
    learnMore: "En savoir plus",
    readArticle: "Lire l'article",
    contactUs: "Nous contacter",
    imageSlot: "Image à venir",
    source: "Source",
  },
  home: {
    hero: {
      eyebrow: "Teinture textile sans eau",
      titleA: "La couleur,",
      titleB: "sans l'eau.",
      body: "PigmentOCO teint le coton au CO₂ supercritique, en circuit fermé. Pas d'eaux usées, pas de traitement des effluents — et un tissu qui sort de la machine déjà sec.",
      primary: "Parler à l'équipe",
      secondary: "Comment ça marche",
    },
    proof: [
      { label: "Trophée Avantex 2026", sub: "Texworld Apparel Sourcing, Paris" },
      { label: "Présentée par HEC Paris", sub: "Innovation & entrepreneuriat" },
      { label: "Fondée en 2024", sub: "Deep tech tunisienne" },
    ],
    problem: {
      eyebrow: "Le problème",
      title: "La teinture, c'est là que la mode fait le plus de dégâts.",
      body: "Colorer les textiles est l'une des étapes les plus gourmandes en eau et les plus polluantes de toute la chaîne. L'essentiel de l'eau utilisée ressort chargée de colorants et de produits chimiques. Pour les industriels, cela signifie aussi un traitement coûteux des eaux usées, un chauffage et un séchage énergivores, et des boues toxiques difficiles à éliminer.",
      stats: [
        { value: "≈1 900 milliards L", label: "d'eau consommés chaque année par la teinture textile" },
        { value: "0 L", label: "d'eau dans le procédé de teinture PigmentOCO" },
        { value: "Circuit fermé", label: "le CO₂ est récupéré et réutilisé, cycle après cycle" },
      ],
      source: "Chiffre sur l'eau : HEC Paris.",
    },
    solution: {
      eyebrow: "Ce que nous faisons",
      title: "Le CO₂ supercritique remplace l'eau.",
      body: "Sous pression, le CO₂ devient un fluide qui fait pénétrer le colorant au cœur de la fibre — puis redevient gaz et est recyclé. Ce qui sort de la machine : un tissu coloré et sec. Ce qui reste dans la boucle : le CO₂ et le colorant non utilisé.",
      pillars: [
        {
          title: "Zéro effluent",
          body: "Aucune eau usée à traiter ni à rejeter. Rien n'atteint les rivières ni la mer.",
        },
        {
          title: "Moins de chimie",
          body: "Pas de sels ni d'auxiliaires de bain, et moins de colorant gaspillé par kilo de tissu.",
        },
        {
          title: "Coûts réduits",
          body: "Ni traitement des effluents ni séchage : des économies qui s'additionnent à chaque lot.",
        },
      ],
      cta: "Découvrir la technologie",
    },
    cotton: {
      eyebrow: "Notre avantage",
      title: "Pensée pour le coton — là où la teinture au CO₂ n'a jamais percé.",
      body: "La teinture au CO₂ existe déjà pour le polyester. Le coton, fibre naturelle la plus utilisée au monde, lui a toujours résisté : ses fibres ne fixent pas les colorants solubles dans le CO₂. Nous concevons l'interaction colorant–fibre par la chimie verte pour rendre la teinture sans eau possible sur les fibres naturelles.",
      table: {
        cols: ["Sans eau", "Adaptée au coton", "Zéro effluent"],
        rows: [
          { name: "Teinture conventionnelle à l'eau", values: ["no", "yes", "no"] },
          { name: "Teinture CO₂ pour synthétiques", values: ["yes", "no", "yes"] },
          { name: "Chimie de teinture améliorée", values: ["no", "yes", "partial"] },
          { name: "PigmentOCO", values: ["yes", "yes", "yes"] },
        ],
        legend: { yes: "Oui", no: "Non", partial: "Réduit" },
      },
    },
    partners: {
      eyebrow: "Notre façon de travailler",
      title: "Conçue pour s'intégrer à votre production.",
      items: [
        {
          title: "Teinturiers & filatures",
          body: "Des essais pilotes sur vos propres tissus et coloris, et un chemin pour intégrer la teinture sans eau à côté de vos lignes existantes.",
        },
        {
          title: "Marques de mode & textile",
          body: "Co-développez couleurs et collections avec une étape de teinture que vous pouvez vraiment défendre dans votre reporting RSE.",
        },
        {
          title: "Investisseurs & partenaires",
          body: "Rejoignez-nous pour porter un principe éprouvé à l'échelle industrielle, sur les fibres qui comptent le plus.",
        },
      ],
      cta: "Démarrer la conversation",
    },
    coral: {
      eyebrow: "Pourquoi le corail ?",
      title: "Les coraux perdent leur couleur quand leur eau est polluée. Ils peuvent la retrouver.",
      body: "Notre nom et notre mission viennent du même endroit. Nous voulons que les textiles gardent leur éclat sans le prendre à l'océan — pour que les récifs retrouvent aussi le leur.",
      cta: "Notre histoire",
    },
    news: { title: "Dans la presse", all: "Toutes les actualités" },
    collaborators: {
      title: "Partenaires & collaborateurs technologiques",
    },
    finalCta: {
      title: "Teignons autrement.",
      body: "Teinturier, marque ou investisseur dans la deep tech : nous serions ravis d'échanger avec vous.",
      button: "Prendre rendez-vous",
    },
  },
  technology: {
    hero: {
      eyebrow: "Technologie",
      title: "La science de la couleur sans eau.",
      body: "La teinture au CO₂ supercritique est un principe éprouvé. Nous le rendons opérant là où c'est le plus utile : sur le coton et les fibres naturelles.",
    },
    diagram: { solid: "Solide", liquid: "Liquide", gas: "Gaz", supercritical: "Supercritique", zone: "zone de teinture" },
    what: {
      title: "Qu'est-ce que le CO₂ supercritique ?",
      body: "Au-delà de 31 °C et 74 bar, le dioxyde de carbone entre dans un état ni gazeux ni liquide. Il diffuse dans le tissu comme un gaz et dissout le colorant comme un liquide. Il suffit de relâcher la pression pour qu'il redevienne gaz — sans résidu et sans rien à sécher.",
      facts: [
        { value: "31 °C", label: "température critique" },
        { value: "74 bar", label: "pression critique" },
        { value: "Recyclé", label: "CO₂ réutilisé en circuit fermé" },
      ],
    },
    steps: {
      title: "Comment fonctionne le procédé",
      items: [
        { title: "Charger", body: "Le tissu ou le fil est placé avec le colorant dans une cuve de teinture étanche." },
        { title: "Pressuriser", body: "Le CO₂ est porté au-delà de son point critique et devient un fluide supercritique." },
        { title: "Teindre", body: "Le fluide dissout le colorant et le transporte au cœur de la fibre, où notre chimie le fixe." },
        { title: "Récupérer", body: "La pression est relâchée : le CO₂ redevient gaz et est récupéré, le colorant non utilisé est collecté, et le tissu sort sec." },
      ],
    },
    cotton: {
      title: "Le défi du coton",
      body: "Les machines de teinture au CO₂ existantes fonctionnent sur le polyester, car les colorants solubles dans le CO₂ sont conçus pour les fibres synthétiques. Le coton est hydrophile et se lie à d'autres familles de colorants : il est donc resté hors de portée. PigmentOCO conçoit l'interaction entre colorant et fibre grâce à la chimie verte, pour que les fibres naturelles, à commencer par le coton, puissent être teintes sans eau.",
    },
    benefits: {
      title: "Ce que cela change pour un industriel",
      items: [
        { title: "Pas de station d'épuration", body: "Aucun effluent à traiter, surveiller ou rejeter." },
        { title: "Pas de séchage", body: "Le tissu sort sec de la cuve — aucune énergie pour évaporer l'eau." },
        { title: "Moins de colorant et de chimie", body: "Le colorant non utilisé peut être récupéré ; ni sels ni bains auxiliaires." },
        { title: "Liberté d'implantation", body: "La teinture ne dépend plus de l'accès à de grands volumes d'eau douce." },
      ],
    },
    status: {
      title: "Où nous en sommes",
      body: "PigmentOCO développe et valide son procédé. Nous recherchons des partenaires industriels pour mener des essais pilotes sur des tissus réels.",
      stages: [
        { title: "R&D & validation labo", body: "Chimie colorant–fibre pour le coton", current: true },
        { title: "Essais pilotes", body: "Avec des partenaires industriels", current: false },
        { title: "Échelle industrielle", body: "Lignes de teinture sans eau", current: false },
      ],
      current: "Aujourd'hui",
      cta: "Devenir partenaire pilote",
    },
  },
  impact: {
    hero: {
      eyebrow: "Impact",
      title: "Une couleur propre, de la fibre au récif.",
      body: "Retirer l'eau de la teinture ne réduit pas seulement une empreinte : cela supprime la pollution à la source.",
    },
    pillars: [
      {
        title: "Eau",
        body: "La teinture traditionnelle consomme d'énormes volumes d'eau douce. Notre procédé n'en utilise aucune, ce qui préserve la ressource dans des régions en stress hydrique comme la nôtre.",
      },
      {
        title: "Chimie",
        body: "Sans auxiliaires chimiques nocifs : des textiles plus propres, pas de boues toxiques et des conditions de travail plus sûres dans les teintureries.",
      },
      {
        title: "Énergie",
        body: "Pas d'eau à chauffer, pas de tissu à sécher. Le cycle de teinture est optimisé pour consommer moins d'énergie.",
      },
      {
        title: "Océans",
        body: "Zéro effluent : rien n'atteint les rivières et les mers — la cause profonde des dégâts que subissent les récifs coralliens.",
      },
    ],
    sdg: {
      title: "Alignée avec les Objectifs de développement durable de l'ONU",
      items: [
        {
          n: "3",
          title: "Bonne santé et bien-être",
          body: "En supprimant les produits chimiques nocifs de la teinture textile, nous voulons des conditions de travail plus sûres et des communautés en meilleure santé.",
          url: "https://www.un.org/sustainabledevelopment/fr/health/",
        },
        {
          n: "6",
          title: "Eau propre et assainissement",
          body: "Notre teinture sans eau préserve les ressources en eau douce et évite la pollution de l'eau, pour des procédés industriels propres et durables.",
          url: "https://www.un.org/sustainabledevelopment/fr/water-and-sanitation/",
        },
        {
          n: "9",
          title: "Industrie, innovation et infrastructure",
          body: "Nous développons une innovation industrielle écologique qui peut redéfinir la production textile, en réduisant son impact environnemental et en favorisant une croissance durable.",
          url: "https://www.un.org/sustainabledevelopment/fr/infrastructure/",
        },
        {
          n: "13",
          title: "Lutte contre les changements climatiques",
          body: "Notre technologie réduit l'empreinte carbone de la teinture textile et contribue à atténuer le changement climatique, vers un avenir bas carbone.",
          url: "https://www.un.org/sustainabledevelopment/fr/climate-change/",
        },
        {
          n: "14",
          title: "Vie aquatique",
          body: "En empêchant les produits chimiques de teinture d'atteindre les cours d'eau, nous protégeons les écosystèmes marins et la santé des océans.",
          url: "https://www.un.org/sustainabledevelopment/fr/oceans/",
        },
        {
          n: "17",
          title: "Partenariats pour la réalisation des objectifs",
          body: "La collaboration est au cœur de notre mission. Nous recherchons activement des partenaires pour accélérer l'innovation durable et amplifier notre impact.",
          url: "https://www.un.org/sustainabledevelopment/fr/globalpartnerships/",
        },
      ],
      learnMore: "En savoir plus",
    },
    quote: {
      text: "La teinture, c'est là que l'industrie de la mode fait le plus de dégâts — et là qu'elle a le plus à réparer.",
      author: "La conviction à l'origine de PigmentOCO",
    },
  },
  about: {
    hero: {
      eyebrow: "À propos",
      title: "Un mouvement qui réconcilie la mode et l'océan.",
      body: "PigmentOCO est une start-up cleantech fondée en Tunisie en 2024. Notre mission : transformer la façon dont l'industrie textile colore ses tissus.",
    },
    story: {
      title: "Notre histoire",
      body: [
        "Tout est parti d'une passion pour la mode et la couleur — et du choc en découvrant les dégâts que la teinture des textiles inflige à l'eau et aux écosystèmes.",
        "Nous avons choisi le corail comme symbole parce qu'il incarne à la fois la fragilité et la résilience. Les coraux perdent leur couleur quand leur eau est polluée, et peuvent la retrouver quand leur environnement est protégé. Nous voulons rendre leur éclat aux textiles tout en contribuant à cette renaissance.",
      ],
    },
    team: {
      title: "Fondateurs",
      members: [
        { name: "Amal Chebbi", photo: "/team/amal.jpg" },
        { name: "Asma Chafter", photo: "/team/asma.jpg" },
      ],
    },
    values: {
      title: "Ce qui nous guide",
      items: [
        { title: "La science d'abord", body: "Une vraie chimie colorant–fibre, pas des promesses marketing." },
        { title: "Le réalisme industriel", body: "Une solution qui a du sens économiquement pour ceux qui teignent au quotidien." },
        { title: "La joie de la couleur", body: "La mode durable doit être vibrante, créative et accessible." },
      ],
    },
    recognition: {
      title: "Distinctions",
      items: [
        "Trophée Avantex — Avantex Fashion Pitch, Texworld Apparel Sourcing Paris 2026",
        "Portrait par HEC Paris — Innovation & Entrepreneuriat",
        "Profil de start-up sur VC4A",
      ],
    },
    careers: {
      title: "Rejoignez l'équipe fondatrice",
      body: "Ingénieur·e chimiste, textile ou industriel·le, vous voulez changer la façon dont le monde colore ses vêtements ? Nous serions ravis de vous rencontrer.",
      cta: "Envoyez-nous votre profil",
    },
  },
  news: {
    hero: {
      eyebrow: "Actualités",
      title: "PigmentOCO dans la presse.",
      body: "Prix, portraits et étapes clés sur notre route vers la teinture sans eau.",
    },
    filters: { title: "Filtrer :", all: "Tout", awards: "Prix", press: "Presse", profiles: "Profils", sustainability: "Durabilité", empty: "Aucune actualité dans cette catégorie pour le moment." },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Parlons couleur.",
      body: "Parlez-nous de vos tissus, de votre production ou de votre projet. Nous répondons généralement sous quelques jours ouvrés.",
    },
    channels: [
      { title: "Filatures & teinturiers", body: "Essais pilotes, intégration, questions techniques.", subject: "Essai pilote — [entreprise]" },
      { title: "Marques", body: "Co-développement, échantillons, objectifs RSE.", subject: "Partenariat marque — [entreprise]" },
      { title: "Investisseurs & presse", body: "Financement, interviews et demandes média.", subject: "Investisseurs / presse" },
      { title: "Carrières", body: "Profils en ingénierie chimique, textile et industrielle.", subject: "Candidature — [poste]" },
    ],
    write: "Nous écrire",
    location: { title: "Basée en", value: "Tunisie" },
    follow: "Suivez-nous",
  },
  footer: {
    tagline: "Teinture textile sans eau au CO₂ supercritique.",
    rights: "Tous droits réservés.",
    explore: "Explorer",
    connect: "Nous suivre",
    legal: "Légal",
  },
  legal: {
    pending: "Cette page est en cours de rédaction. Pour toute question d'ici là, écrivez-nous à",
    docs: {
      privacy: {
        title: "Politique de confidentialité",
        short: "Comment PigmentOCO collecte, utilise et protège vos données personnelles.",
      },
      terms: { title: "Conditions générales", short: "Les règles applicables à l'utilisation du site PigmentOCO." },
      cookies: {
        title: "Politique relative aux cookies",
        short: "Les cookies utilisés par ce site et la manière de les contrôler.",
      },
    },
  },
  notFound: { title: "Cette page a déteint.", back: "Retour à l'accueil" },
};

export default fr;
