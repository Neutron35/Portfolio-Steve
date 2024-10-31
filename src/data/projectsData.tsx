import Bluel from '@/assets/images/Bluel.webp';
import Booki from '@/assets/images/Booki.webp';
import Carducci from '@/assets/images/Carducci.webp';
import Kasa from '@/assets/images/Kasa.webp';
import MVG from '@/assets/images/MVG.webp';
import Qwenta from '@/assets/images/Qwenta.webp';

export const bannerData = {
  title: 'Mes projets',
  content:
    'Explorez mon portfolio varié, présentant des solutions numériques raffinées, conçues pour répondre aux besoins de clients de secteurs divers.',
};

export const projectsData = [
  {
    id: 0,
    title: 'Booki',
    tags: ['HTML', 'CSS'],
    image: Booki,
    context: `Site Internet d'une agence de voyage, permettant aux usagers de trouver des hébergements et des activités dans la ville de leur choix.`,
    role: `Développeur Web`,
    date: `03.2024 - 04.2024`,
    description: `Booki est un site d'outil de planification de vacances.
                  Les utilisateurs peuvent trouver des hébergements et des activités dans la ville de son choix.
                  Les résultats de recherche peuvent être filtrés par thématique, comme le budget ou l'ambiance.
                  Trois maquettes Figma ont été fournies par l'UI designer : Desktop, Tablette et Mobile.
                  Un document regroupant les spécifications et les contraintes techniques à respecter a également été fourni.
                  Ma mission principale a donc été d'intégrer l'interface responsive du site, conformément aux maquettes, avec du code HTML et CSS.
                  Le projet a été versionné sur Git et transmis à la CTO via GitHub.`,
    issues: ``,
    skills: [
      `Intégrer du contenu conformément à une maquette avec HTML et CSS`,
      `Implémenter une interface responsive avec HTML et CSS`,
      `Versionner son projet avec Git et Github`,
      `Installer un environnement de développement front-end`,
    ],
    githubLink: 'https://github.com/Neutron35/Integration-Booki',
    previewLink: 'https://neutron35.github.io/Integration-Booki/',
  },
  {
    id: 1,
    title: 'Sophie Bluel',
    tags: ['JavaScript'],
    image: Bluel,
    context: `Conception du site portfolio d'une architecte d'intérieur`,
    role: `Développeur front-end`,
    date: `04.2024 - 05.2024`,
    description: `L'agence ArchiWebos m'a envoyé en renfort comme développeur front-end d'une équipe qui travaille sur la conception du site portfolio d'une architecte d'intérieur.
                  Une maquette Figma Desktop a été fournie.
                  Un back-end déjà développé m'a permis de faire persister les données et de tester les fonctionnalités.
                  Un Kanban a été utilisé afin de prendre connaissance de l'attribution des tâches.
                  En partant d'un code front-end d'origine avec la version statique de la page de l'architecte, mes 3 missions principales étaient de développer la page de présentation des travaux de l'architecte, la page de connexion de l'administrateur du site, ainsi que la modale permettant d'uploader de nouveaux médias.`,
    issues: ``,
    skills: [
      `Récupérer les données utilisateurs dans le JavaScript via des formulaires`,
      `Manipuler les éléments du DOM avec JavaScript`,
      `Gérer les événements utilisateurs avec JavaScript`,
    ],
    githubLink: 'https://github.com/Neutron35/Portfolio-architecte-Sophie-Bluel',
  },
  {
    id: 2,
    title: 'Nina Carducci',
    tags: ['Optimisation', 'Débug'],
    image: Carducci,
    context: `Débogage et optimisation d'un site de photographe`,
    role: `Développeur Web`,
    date: `06.2024`,
    description: `Suite à une prospection, une photographe a accepté mes services d'optimisation SEO pour son site.
                  Un audit Lighthouse initial a été effectué.
                  Le site a été optimisé, tant au niveau des performances que sur le SEO.
                  Le référencement local a été mis en place en utilisant Schema.org.
                  Les métas pour les réseaux sociaux ont été ajoutés.
                  Des modifications liées à l'accessibilité du site ont été faites.
                  Deux bugs étaient présents dans le code initial et ont été corrigés.
                  Un rapport d'intervention a été fourni, présentant toutes les actions entreprises ainsi que leur impact.`,
    issues: ``,
    skills: [
      `Optimiser les performances d'un site web`,
      `Débugger un site web grâce aux Chrome DevTools`,
      `Rédiger un cahier de recette pour tester un site`,
    ],
    githubLink: 'https://github.com/Neutron35/Nina-Carducci-Dev',
    previewLink: 'https://neutron35.github.io/Nina-Carducci-Dev/',
  },
  {
    id: 3,
    title: 'Kasa',
    tags: ['React', 'SASS'],
    image: Kasa,
    context: `Refonte du site d'une entreprise de location d'appartements entre particuliers`,
    role: `Développeur front-end`,
    date: `07.2024 - 08.2024`,
    description: `Une refonte totale a été lancée pour passer d'ASP.NET à une stack complète en JavaScript avec NodeJS et React.
                  Des maquettes Figma Desktop et Mobile ont été fournies par le designer.
                  Le back-end n'étant pas terminé, nous avons utilisé un fichier JSON comme alternative temporaire.
                  Des contraintes fonctionnelles et techniques ont été spécifiées.
                  Mon objectif était de démarrer le projet React et développer l'ensemble de l'application, les composants React, les routes React Router, en suivant les maquettes Figma responsives.
                  Sass a été utilisé pour générer le style CSS du site web et mettre en place les animations.`,
    issues: ``,
    skills: [
      `Configurer la navigation entre les pages de l'application avec React Router`,
      `Initialiser une application avec Create React App`,
      `Développer des éléments de l'interface d'un site web grâce à des composants React`,
      `Mettre en oeuvre des animations CSS`,
      `Développer une interface web avec Sass`,
    ],
    githubLink: 'https://github.com/Neutron35/Kasa-react',
  },
  {
    id: 4,
    title: 'Mon Vieux Grimoire',
    tags: ['Node', 'Express', 'MongoDB'],
    image: MVG,
    context: `Site de référencement et de notation de livres d'une petit chaîne de librairies`,
    role: `Développeur back-end`,
    date: `08.2024 - 09.2024`,
    description: ``,
    issues: ``,
    skills: [
      `Implémenter un modèle logique de données conformément à la réglementation`,
      `Mettre en oeuvre des opérations CRUD de manière sécurisée`,
      `Stocker des données de manière sécurisée`,
    ],
    githubLink: 'https://github.com/Neutron35/Mon-Vieux-Grimoire',
  },
  {
    id: 5,
    title: 'Qwenta',
    tags: ['Scrum', 'Notion', 'Kanban'],
    image: Qwenta,
    context: ``,
    role: `Product Owner`,
    date: `09.2024 - 10.2024`,
    description: ``,
    issues: ``,
    skills: [
      `Suivre le déroulement du projet grâce à un outil de gestion de projet`,
      `Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels`,
      `Découper une fonctionnalité en tâches pour préparer le développement`,
      `Présenter la solution technique`,
      `Mettre en place une méthode de veille technologique`,
      `Versionner son projet avec Git et Github`,
      `Installer un environnement de développement front-end`,
    ],
  },
];

export const galleryData = {
  title: 'Mes projets',
  content: projectsData,
};
