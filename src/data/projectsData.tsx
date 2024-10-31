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
    context: `"Booki" est le site Internet d'une agence de voyage, permettant aux usagers de trouver des hébergements et des activités dans la ville de leur choix.`,
    description: `Booki est un site d'outil de planification de vacances.
                  Les utilisateurs peuvent trouver des hébergements et des activités dans la ville de son choix.
                  Les résultats de recherche peuvent être filtrés par thématique, comme le budget ou l'ambiance.
                  Trois maquettes ont été fournies par l'UI designer : Desktop, Tablette et Mobile.
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
    context: ``,
    description: ``,
    issues: ``,
    skills: [
      `Récupérer les données utilisateurs dans le JavaScript via des formulaires`,
      `Manipuler les éléments du DOM avec JavaScript`,
      `Gérer les événements utilisateurs avec JavaScript`,
    ],
    githubLink: 'https://github.com/Neutron35/Portfolio-architecte-Sophie-Bluel',
    previewLink: '',
  },
  {
    id: 2,
    title: 'Nina Carducci',
    tags: ['Optimisation', 'Débug'],
    image: Carducci,
    context: ``,
    description: ``,
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
    context: ``,
    description: ``,
    issues: ``,
    skills: [
      `Configurer la navigation entre les pages de l'application avec React Router`,
      `Initialiser une application avec Create React App`,
      `Développer des éléments de l'interface d'un site web grâce à des composants React`,
      `Mettre en oeuvre des animations CSS`,
      `Développer une interface web avec Sass`,
    ],
    githubLink: 'https://github.com/Neutron35/Kasa-react',
    previewLink: '',
  },
  {
    id: 4,
    title: 'Mon Vieux Grimoire',
    tags: ['Node', 'Express', 'MongoDB'],
    image: MVG,
    context: ``,
    description: ``,
    issues: ``,
    skills: [
      `Implémenter un modèle logique de données conformément à la réglementation`,
      `Mettre en oeuvre des opérations CRUD de manière sécurisée`,
      `Stocker des données de manière sécurisée`,
    ],
    githubLink: 'https://github.com/Neutron35/Mon-Vieux-Grimoire',
    previewLink: '',
  },
  {
    id: 5,
    title: 'Qwenta',
    tags: ['Scrum', 'Notion', 'Kanban'],
    image: Qwenta,
    context: ``,
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
    githubLink: '',
    previewLink: '',
  },
];

export const galleryData = {
  title: 'Mes projets',
  content: projectsData,
};
