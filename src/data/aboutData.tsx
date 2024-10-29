export const bannerData = {
  title: 'Mon profil',
};

export const experienceData = {
  title: 'Parcours',
  content: [
    {
      title: `Formation Développeur Web`,
      org: `Openclassrooms`,
      date: `03.2024 / 11.2024`,
    },
    {
      title: `Prep'Apprentissage Développeur Web`,
      org: `Openclassrooms`,
      date: `04.2022 / 08.2022`,
    },
  ],
};

export const skillsData = {
  title: 'Compétences',
  content: [
    {
      title: `Intégration et développement front-end`,
      text: `Intégration de contenu respectant les maquettes et directives du projet en utilisant HTML et CSS. Création d'interfaces responsives et interactives optimisées pour différents appareils.`,
      logos: ['faHtml5', 'faCss3'],
    },
    {
      title: `Gestion de projets et collaboration`,
      text: `Suivi des tâches via des outils de gestion de projet, rédaction de spécifications techniques et découpage des fonctionnalités en tâches claires et exploitables pour garantir un développement efficace.`,
      logos: [],
    },
    {
      title: `Programmation JavaScript`,
      text: `Manipulation d'éléments DOM, gestion des événements utilisateurs et collecte de données via des formulaires en JavaScript. Familiarité avec les opérations asynchrones et gestion d'état côté front.`,
      logos: ['faJs'],
    },
    {
      title: `Développement d'applications avec React`,
      text: `Création d'applications SPA en utilisant React pour construire des composants modulaires et performants, gestion de la navigation avec React Router, et implémentation de hooks personnalisés.`,
      logos: ['faReact', 'faSass'],
    },
    {
      title: `Back-end et gestion de données`,
      text: `Implémentation d’opérations CRUD sécurisées, modélisation logique des données et sécurisation des accès pour garantir la confidentialité et l’intégrité des informations. Connaissance des principes d'architecture REST et d'API pour permettre des interactions efficaces entre le front-end et le back-end.`,
      logos: ['faNodeJs'],
    },
    {
      title: `Outils et workflows de développement`,
      text: `Utilisation de Git et GitHub pour le versionnement, configuration d'environnements de développement front-end, et maîtrise des DevTools de Chrome pour le débogage et l’optimisation de performance.`,
      logos: ['faGit', 'faGithub'],
    },
    {
      title: `Sécurité et déploiement`,
      text: `Implémentation de pratiques sécurisées pour les opérations CRUD et le stockage de données, ainsi que le déploiement de sites statiques en ligne.`,
      logos: [],
    },
  ],
};

export const sectionsData = [experienceData, skillsData];
