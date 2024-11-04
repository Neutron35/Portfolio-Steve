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
    issues: [
      {
        title: `Barre de recherche`,
        desc: [
          `La barre de recherche devait s'adapter différemment sur mobile avec un bouton qui change de texte à icône.`,
        ],
        solutions: [
          `Utilisation de @media queries pour modifier le bouton sur mobile`,
          `Remplacement du texte "Rechercher" par une icône FontAwesome`,
          `Ajustement de la largeur et du style pour une meilleure ergonomie mobile`,
        ],
      },
      {
        title: `Cartes d'hébergement`,
        desc: [`Les cartes devaient s'organiser différemment selon les breakpoints (3 colonnes, puis 2, puis 1).`],
        solutions: [
          `Utilisation de Flexbox avec flex-wrap`,
          `Définition de largeurs en pourcentage pour une adaptation fluide`,
          `Ajustement des marges et espacements pour maintenir la cohérence visuelle`,
        ],
      },
      {
        title: `Menu de navigation`,
        desc: [`Le menu de navigation devait passer d'horizontal à vertical sur mobile avec un style différent.`],
        solutions: [
          `Modification de la structure avec flex-direction: column`,
          `Changement du style de bordure (passage du top au bottom)`,
          `Ajustement des largeurs à 50% pour créer deux colonnes égales`,
        ],
      },
      {
        title: `Images responsives`,
        desc: [`Les images devaient maintenir leurs proportions tout en s'adaptant aux différentes tailles d'écran.`],
        solutions: [
          `Utilisation de object-fit: cover`,
          `Définition de hauteurs fixes selon les breakpoints`,
          `Maintien des ratios d'aspect appropriés`,
        ],
      },
      {
        title: `Ordre d'affichage mobile`,
        desc: [`La section "Populaires" devait apparaître en premier sur mobile, contrairement à la version desktop.`],
        solutions: [
          `Utilisation de la propriété order dans Flexbox`,
          `Réorganisation du contenu sans modifier la structure HTML`,
          `Adaptation des marges et du padding pour une meilleure présentation`,
        ],
      },
    ],
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
    issues: [
      {
        title: `Authentification`,
        desc: [
          `Mise en place d'un système d'authentification sécurisé`,
          `gestion du token et des états connecté/déconnecté`,
        ],
        solutions: [
          `Implémentation d'un système de token stocké dans le localStorage`,
          `Vérification de l'authentification à chaque chargement de page`,
          `Gestion des erreurs de connexion avec messages explicites`,
        ],
      },
      {
        title: `Gestion dynamique`,
        desc: [
          `Affichage dynamique des projets avec filtrage par catégorie`,
          `Maintien de la cohérence des données après modifications`,
        ],
        solutions: [
          `Création d'un système de filtrage par catégories`,
          `Mise à jour en temps réel de la galerie après modifications`,
        ],
      },
      {
        title: `Interface modale et gestion des médias`,
        desc: [
          `Création d'une interface modale responsive pour l'ajout/suppression de projets`,
          `Validation et prévisualisation des fichiers images`,
        ],
        solutions: [
          `Implémentation d'une modale avec plusieurs vues (galerie/upload)`,
          `Système de validation des fichiers avec prévisualisation`,
        ],
      },
      {
        title: `Responsive Design`,
        desc: [
          `Adaptation de l'interface à différentes tailles d'écran`,
          `Maintien de l'expérience utilisateur sur mobile`,
        ],
        solutions: [
          `Utilisation de media queries pour adapter l'interface`,
          `Ajustement dynamique des éléments de la galerie et de la modale`,
        ],
      },
      {
        title: `Gestion des erreurs`,
        desc: [`Gestion des erreurs API et des problèmes de connexion`, `Communication claire avec l'utilisateur`],
        solutions: [
          `Mise en place de try/catch pour gérer les erreurs API`,
          `Feedback visuel sur les formulaires et les actions utilisateur`,
        ],
      },
    ],
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
    issues: [
      {
        title: `Performance et Optimisation`,
        desc: [`Le site présentait des scores de performance faibles sur Lighthouse.`],
        solutions: [
          `Conversion des images en format WebP plus léger`,
          `Redimensionnement des images adapté aux besoins`,
          `Minification des fichiers`,
        ],
      },
      {
        title: `Accessibilité`,
        desc: [`Le site n'était pas conforme aux normes WCAG.`],
        solutions: [
          `Amélioration de la structure sémantique HTML`,
          `Ajout d'attributs ARIA et de textes alternatifs pour les images`,
          `Amélioration du contraste des couleurs`,
          `Ajout de labels explicites pour les formulaires`,
        ],
      },
      {
        title: `SEO`,
        desc: [`Manque de visibilité dans les moteurs de recherche.`],
        solutions: [`Implémentation des balises meta`, `Ajout de données structurées Schema.org`],
      },
    ],
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
    issues: [
      {
        title: `Carrousel`,
        desc: [`Mise en place d'un carrousel d'images fonctionnel avec navigation et numérotation.`],
        solutions: [
          `État local avec useState pour suivre l'index de l'image active`,
          `Fonctions de navigation cyclique pour gérer le défilement des images`,
          `Condition pour n'afficher les contrôles que s'il y a plus d'une image`,
        ],
      },
      {
        title: `Collapse`,
        desc: [`Créer un composant accordéon réutilisable qui gère à la fois du texte et des listes.`],
        solutions: [
          `Accepter différents types de contenu (string ou array) via PropTypes`,
          `Utiliser une animation CSS pour la transition`,
          `Gérer l'état d'ouverture/fermeture avec useState`,
        ],
      },
      {
        title: `Gestion des routes`,
        desc: [`Gérer efficacement la navigation et les erreurs 404.`],
        solutions: [
          `Utilisation de useParams et useNavigate pour la gestion des URLs`,
          `Redirection automatique vers une page 404 personnalisée`,
          `Vérification de l'existence des données avant le rendu`,
        ],
      },
      {
        title: `Responsive Design`,
        desc: [`Adapter l'interface pour différentes tailles d'écran.`],
        solutions: [
          `Variables pour les breakpoints`,
          `Media queries systématiques`,
          `Unités relatives et flexbox/grid pour une mise en page flexible`,
        ],
      },
      {
        title: `Performance et Optimisation`,
        desc: [`Optimiser le chargement et le rendu des composants.`],
        solutions: [
          `Utilisation de composants fonctionnels et de hooks React`,
          `Gestion efficace des états avec useState`,
          `Props typing avec PropTypes pour la fiabilité du code`,
          `Chargement conditionnel des éléments d'interface`,
        ],
      },
    ],
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
    issues: [
      {
        title: `Gestion des images`,
        desc: [`Optimisation et stockage des images téléchargées.`],
        solutions: [
          `Mise en place de Sharp pour optimiser les images`,
          `Conversion automatique en WebP avec une qualité de 80%`,
          `Redimensionnement à une hauteur de 570px`,
          `Suppression de l'image originale après optimisation`,
        ],
      },
      {
        title: `Sécurisation`,
        desc: [`Protection des routes et authentification des utilisateurs.`],
        solutions: [
          `Implémentation d'un middleware d'authentification JWT`,
          `Validation des emails avec regex`,
          `Hashage des mots de passe avec bcrypt`,
        ],
      },
      {
        title: `Noms de fichiers uniques`,
        desc: [`Risque de conflits avec des noms de fichiers identiques.`],
        solutions: [`Utilisation de nanoid pour générer des identifiants uniques`],
      },
      {
        title: `Gestion des CORS`,
        desc: [`Communication entre le frontend et le backend.`],
        solutions: [`Configuration des en-têtes CORS`],
      },
      {
        title: `Organisation du code`,
        desc: [`Maintenir une structure de code propre et maintenable.`],
        solutions: [
          `Architecture MVC (Models, Views, Controllers)`,
          `Configuration ESLint et Prettier pour un code cohérent`,
          `Utilisation de modules ES6 pour une meilleure modularité`,
        ],
      },
      {
        title: `Gestion des erreurs`,
        desc: [`Traitement approprié des erreurs pour une meilleure expérience utilisateur.`],
        solutions: [
          `Mise en place de blocs try/catch systématiques`,
          `Messages d'erreur personnalisés et codes HTTP appropriés`,
        ],
      },
    ],
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
    issues: [],
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
