import { SectionType } from '@/types/section.types.ts';

export const bannerData = {
  title: 'Mon profil',
};

export const experienceData: SectionType = {
  id: 'experience',
  title: 'Parcours',
  content: [
    {
      title: `Formation Développeur Web`,
      description: `Openclassrooms - 03.2024 / 11.2024`,
      projectsList: [
        `Créez la page d'accueil d'une agence de voyage avec HTML & CSS`,
        `Créez une page web dynamique avec JavaScript`,
        `Débuggez et optimisez un site de photographe`,
        `Créez une application web de location immobilière avec React`,
        `Développez le back-end d'un site de notation de livres`,
        `Planifiez le développement du site de votre client`,
        `Créez et publiez votre portfolio de développeur`,
      ],
    },
    {
      title: `Prep'Apprentissage Développeur Web`,
      description: `Openclassrooms - 04.2022 / 08.2022`,
      projectsList: [`Créez la page d'accueil d'une agence de voyage avec HTML & CSS`],
    },
  ],
};

export const skillsData: SectionType = {
  id: 'skills',
  title: 'Compétences',
  content: [
    {
      title: `Intégration et développement front-end`,
      text: [
        `Intégration de contenu respectant les maquettes et directives du projet en utilisant HTML et CSS.`,
        `Création d'interfaces responsives et interactives optimisées pour différents appareils.`,
      ],
      logos: ['faHtml5', 'faCss3'],
    },
    {
      title: `Gestion de projets et collaboration`,
      text: [
        `Suivi des tâches via des outils de gestion de projet.`,
        `Rédaction de spécifications techniques et découpage des fonctionnalités en tâches claires et exploitables pour garantir un développement efficace.`,
      ],
      logos: [],
    },
    {
      title: `Programmation JavaScript`,
      text: [
        `Manipulation d'éléments DOM.`,
        `Gestion des événements utilisateurs.`,
        `Collecte de données via des formulaires en JavaScript.`,
        `Familiarité avec les opérations asynchrones et gestion d'état côté front.`,
      ],
      logos: ['faJs'],
    },
    {
      title: `Développement d'applications avec React`,
      text: [
        `Création d'applications SPA en utilisant React pour construire des composants modulaires et performants.`,
        `Gestion de la navigation avec React Router.`,
        `Implémentation de hooks personnalisés.`,
      ],
      logos: ['faReact', 'faSass'],
    },
    {
      title: `Back-end et gestion de données`,
      text: [
        `Implémentation d’opérations CRUD sécurisées.`,
        `Modélisation logique des données.`,
        `Sécurisation des accès pour garantir la confidentialité et l’intégrité des informations.`,
        `Connaissance des principes d'architecture REST et d'API pour permettre des interactions efficaces entre le front-end et le back-end.`,
      ],
      logos: ['faNodeJs'],
    },
    {
      title: `Outils et workflows de développement`,
      text: [
        `Utilisation de Git et GitHub pour le versionnement.`,
        `Configuration d'environnements de développement front-end.`,
        `Maîtrise des DevTools de Chrome pour le débogage et l’optimisation de performance.`,
      ],
      logos: ['faGit', 'faGithub'],
    },
  ],
};

export const sectionsData: SectionType[] = [experienceData, skillsData];
