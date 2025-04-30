import TartinesHoumous from '../assets/tartines_houmous_champignons.webp';
import QuicheChevreEpinards from '../assets/quiche_chevre_epinards.webp';
import BrochettesDindeHaricotsSemoule from '../assets/brochettes_dinde_haricots_semoule.webp';
import CurryBoulettes from '../assets/curry_boulettes.webp';
import GratinBrocoli from '../assets/gratin_brocoli.webp';
import SaladeCampagnarde from '../assets/salade_campagnarde.webp';
import OmeletteChampignonComteFrites from '../assets/omelette_champignon_comte_frites.webp';
import PouletNouillesLegumes from '../assets/poulet_nouilles_legumes.webp';
import PastaAllaCarbonara from '../assets/pasta_carbonara.webp';
import CroqueMonsieur from '../assets/croque_monsieur.webp';
import WokLegumesPouletCacahuete from '../assets/wok_legumes_poulet_cacahuete.webp';

export const bannerData = {
  title: 'Mes Recettes',
  content:
    'Voici quelques recettes que j\'ai réalisées. Elles sont classées par catégories et vous pouvez les filtrer en fonction de vos préférences.',
};

export const recipesData = [
  {
    id: 0,
    title: 'Tartine houmous & champignons grillés',
    image: TartinesHoumous,
    portions: 1,
    ingredients: [
      {
        quantity: 2,
        ingredient: 'Tartines de seigle',
      },
      {
        quantity: 50,
        unit: 'g',
        ingredient: 'Houmous',
      },
      {
        quantity: 100,
        unit: 'g',
        ingredient: 'Champignons de Paris',
      },
      {
        quantity: 30,
        unit: 'g',
        ingredient: 'Feta',
      },
      {
        quantity: 1,
        ingredient: 'Oeuf',
      },
      {
        quantity: 1,
        unit: 'poignée',
        ingredient: 'Salade (mélange)',
      },
      {
        quantity: 1,
        unit: 'càc',
        ingredient: 'Huile d\'olive',
      },
    ],
    instructions: [
      'Lavez puis coupez les champignons en tranches.',
      'Faites chauffer une poêle avec un filet d\'huile d\'olive, puis faites cuire les champignons pendant 4 minutes. Salez et poivrez.',
      'En parallèle, faites bouillir une casserole d\'eau et faites cuire les œufs pendant 6 minutes. Plongez-les immédiatement dans l\'eau froide une fois la cuisson terminée, pour stopper la cuisson. Mettez-les de côté.',
      'Étalez le houmous sur la tartine, ajoutez les champignons grillés, l\'œuf mollet et la feta émiettée. Servez avec une salade assaisonnée selon vos goûts. C\'est prêt !',
    ],
  },
  {
    id: 1,
    title: 'Quiche chèvre épinards',
    image: QuicheChevreEpinards,
    portions: 6,
    ingredients: [
      {
        quantity: 1,
        ingredient: 'Pâte brisée',
      },
      {
        quantity: 3,
        ingredient: 'Oeufs',
      },
      {
        quantity: 3,
        unit: 'càs',
        ingredient: 'Crème fraiche',
      },
      {
        quantity: 200,
        unit: 'g',
        ingredient: 'Chèvre (bûche)',
      },
      {
        quantity: 400,
        unit: 'g',
        ingredient: 'Épinards (surgelés)',
      },
    ],
    instructions: [
      'Préchauffez le four à 200°C. Décongelez les épinards selon les instructions du paquet et égouttez-les bien.',
      'Dans un saladier, battez les œufs avec la crème fraîche, salez, poivrez et ajoutez les épinards ainsi que la moitié du chèvre émietté. Mélangez délicatement.',
      'Placez la pâte brisée dans un moule (le noôre fait 31 cm de diamètre) et piquez-la. Versez le mélange dans la pâte à tarte.',
      'Ajoutez le reste du chèvre en tranches sur le dessus de la tarte. Enfournez la quiche à 200°C pendant 30 à 40 minutes. Servez la quiche seule ou avec une salade. C\'est prêt !',
    ],
    nb: 'Pour une quiche encore meilleure, badigeonner la pâte à tarte de moutarde & agrémenter l\'appareil à quiche de saumon fumé, de lardons ou des tomates séchées.',
  },
  {
    id: 2,
    title: 'Brochette dinde, haricots & semoule',
    image: BrochettesDindeHaricotsSemoule,
    portions: 1,
    ingredients: [
      {
        quantity: 1,
        ingredient: 'Escalope de dinde',
      },
      {
        quantity: 150,
        unit: 'g',
        ingredient: 'Haricots verts',
      },
      {
        quantity: 60,
        unit: 'g',
        ingredient: 'Semoule',
      },
      {
        quantity: 1,
        unit: 'càs',
        ingredient: 'Yaourt grec',
      },
      {
        quantity: 1 / 2,
        unit: 'càc',
        ingredient: 'Paprika',
      },
      {
        quantity: 2,
        ingredient: 'Pics à brochette (facultatif)',
      },
      {
        quantity: 1 / 2,
        unit: 'càs',
        ingredient: 'Huile d\'olive',
      },
    ],
    instructions: [
      'Faites chauffer une casserole d\'eau bouillante salée. Équeutez les haricots verts si besoin, et plongez-les dans la casserole d\'eau bouillante pendant 10 minutes.',
      'Pendant ce temps, coupez la dinde en lamelles de 2 à 3 cm. ',
      'Ajoutez les morceaux de dinde dans un récipient. Salez, poivrez, parsemez de paprika et versez un filet d\'huile d\'olive. Mélangez.',
      'Enfilez les lamelles de dinde sur des pics à brochettes.',
      'Une fois les haricots verts cuits, égouttez-les et réservez. ',
      'Faites revenir les brochettes à feu doux dans une poêle avec un filet d\'huile d\'olive pendant 10 à 12 minutes en les retournant régulièrement.',
      'Pendant ce temps, faites bouillir de l\'eau chaude. Versez la semoule dans un récipient et versez par-dessus le même volume de semoule en eau. Couvrez et laissez gonfler.',
      'Retournez les brochettes pour les faire cuire de l\'autre coté.',
      'Égrainez la semoule.',
      'Dans un petit récipient, mélangez le yaourt grec avec du sel, du poivre et un filet d\'huile d\'olive.',
      'Retirez les brochettes du feu. ',
      'Dans une assiette, servez la semoule, les haricots verts et les brochettes de dinde. Ajoutez une cuillère à soupe de sauce, et parsemez de paprika. C\'est prêt !',
    ],
  },
  {
    id: 3,
    title: 'Curry & boulettes végé',
    image: CurryBoulettes,
    portions: 1,
    ingredients: [
      {
        quantity: 80,
        unit: 'g',
        ingredient: 'Boulettes végétales',
      },
      {
        quantity: 70,
        unit: 'g',
        ingredient: 'Riz',
      },
      {
        quantity: 100,
        unit: 'g',
        ingredient: 'Épinards (surgelés)',
      },
      {
        quantity: 80,
        unit: 'ml',
        ingredient: 'Lait de coco',
      },
      {
        quantity: 1,
        unit: 'càc',
        ingredient: 'Curry (poudre)',
      },
      {
        quantity: 1,
        unit: 'càc',
        ingredient: 'Tomate (concentré)',
      },
      {
        quantity: 1,
        unit: 'càc',
        ingredient: 'Huile d\'olive',
      },
    ],
    instructions: [
      'Dans une casserole d’eau bouillante salée, faites cuire le riz selon les instructions du paquet. Égouttez-le en fin de cuisson.',
      'Pendant ce temps, faites chauffer un filet d\'huile d\'olive dans une poêle. Ajoutez les épinards surgelés et faites-les revenir à couvert pendant 4 à 5 minutes, sur feu moyen.',
      'Ajoutez le curry et le concentré de tomate, puis mélangez. Ajoutez ensuite le lait de coco. Mélangez puis laissez mijoter 3 à 4 minutes.',
      'Ajoutez les boulettes végétales et mélangez. Salez, poivrez, puis laissez mijoter à nouveau 3 à 4 minutes.',
      'Servez le curry végé sur le riz. Ré-assaisonnez selon vos goûts, c\'est prêt !',
    ],
  },
  {
    id: 4,
    title: 'Gratin de brocoli',
    image: GratinBrocoli,
    portions: 2,
    ingredients: [
      {
        quantity: 500,
        unit: 'g',
        ingredient: 'Brocoli',
      },
      {
        quantity: 25,
        unit: 'g',
        ingredient: 'Farine de blé',
      },
      {
        quantity: 60,
        unit: 'g',
        ingredient: 'Fromage râpé',
      },
      {
        quantity: 25,
        unit: 'g',
        ingredient: 'Beurre',
      },
      {
        quantity: 250,
        unit: 'ml',
        ingredient: 'Lait',
      },
    ],
    instructions: [
      'Préchauffez le four à 240°C. Détaillez le brocoli en fleurette si nécessaire.',
      'Faites-les cuire dans un grand volume d\'eau bouillante pendant 10 minutes.',
      'Pendant ce temps, préparez la béchamel : dans une casserole, ajoutez le beurre et faites-le fondre à feu doux.',
      'Ajoutez la farine et mélangez rapidement.',
      'Ajoutez progressivement le lait en mélangeant jusqu\'à obtenir une texture de pâte à crêpes un peu épaisse.',
      'Après 10 minutes, vérifiez la cuisson du brocoli et égouttez-le.',
      'Dans un plat à gratin (le nôtre fait 29 cm de diamètre), déposez le brocoli, salez et poivrez. Versez la béchamel et ajoutez le fromage sur le dessus.',
      'Enfournez pendant 15 minutes jusqu\'à ce que le dessus soit bien doré. C\'est prêt !',
    ],
  },
  {
    id: 5,
    title: 'Salade campagnarde',
    image: SaladeCampagnarde,
    portions: 1,
    ingredients: [
      {
        quantity: 3,
        ingredient: 'Oeuf de caille',
      },
      {
        quantity: 150,
        unit: 'g',
        ingredient: 'Pommes de terre (primeur)',
      },
      {
        quantity: 2,
        ingredient: 'Poignées de mâche',
      },
      {
        quantity: 20,
        unit: 'g',
        ingredient: 'Chèvre frais',
      },
      {
        quantity: 2,
        ingredient: 'Tranches de bacon',
      },
    ],
    instructions: [
      'Lavez les pommes de terre et coupez-les en 2 ou en 4.',
      'Dans un poêle avec un filet d\'huile d\'olive, ajoutez les pommes de terre, salez, poivrez et saisissez-les 5 minutes, à feu vif.',
      'Couvrez et laissez cuire à feu doux 10 minutes.',
      'Pendant ce temps, faites cuire les œufs dans une casserole d\'eau bouillante (3 minutes pour les œufs de caille et 10 minutes pour les œufs de poule).',
      'Placez-les dans un bol d\'eau froide pour stopper la cuisson, écalez-les et coupez-les en deux.',
      'Après 10 minutes. Coupez la cuisson des pommes de terre.',
      'Dans la poêle, faites cuire le bacon 2 minutes sur chaque face.',
      'Dressez la salade : dans une assiette ajoutez la mâche, les pommes de terres, les œufs, le bacon et le chèvre. (Optionnel : ajoutez des herbes fraîches). C\'est prêt !',
    ],
  },
  {
    id: 6,
    title: 'Omelette champignon, comté & frites',
    image: OmeletteChampignonComteFrites,
    portions: 1,
    ingredients: [
      {
        quantity: 150,
        unit: 'g',
        ingredient: 'Frites surgelées',
      },
      {
        quantity: 2,
        ingredient: 'Oeuf',
      },
      {
        quantity: 100,
        unit: 'g',
        ingredient: 'Champignons de Paris',
      },
      {
        quantity: 15,
        unit: 'g',
        ingredient: 'Comté (râpé)',
      },
    ],
    instructions: [
      'Préchauffez le four à 220°C. Disposez les frites sur une plaque recouverte de papier cuisson et enfournez pour le temps de cuisson indiqué sur le paquet.',
      'Pendant ce temps, lavez puis coupez les champignons en lamelles.',
      'Faites chauffer un filet d\'huile d\'olive dans une poêle, à feu vif. Ajoutez les champignons. Salez, poivrez et faites-les revenir pendant 5 minutes, en mélangeant régulièrement, jusqu\'à ce qu\'ils soient bien dorés.',
      'Dans un bol, cassez les œufs. Salez, poivrez, puis fouettez-les.',
      'Versez les œufs dans la poêle avec les champignons. Parsemez de comté râpé, puis laissez cuire 5 à 6 minutes. Une fois le dessous de l\'omelette bien doré, pliez-la en deux et enlevez du feu.',
      'Sortez les frites du four.',
      'Servez l\'omelette avec les frites. Ajoutez quelques feuilles de persil, si vous en avez. C\'est prêt ! ',
    ],
  },
  {
    id: 7,
    title: 'Poulet & nouilles sautées aux légumes',
    image: PouletNouillesLegumes,
    portions: 1,
    ingredients: [
      {
        quantity: 60,
        unit: 'g',
        ingredient: 'Nouilles chinoises (aux oeufs)',
      },
      {
        quantity: 1,
        ingredient: 'Poulet (escalope)',
      },
      {
        quantity: 220,
        unit: 'g',
        ingredient: 'Julienne de légumes',
      },
      {
        quantity: 1,
        unit: 'càs',
        ingredient: 'Sauce soja salée',
      },
      {
        quantity: 1,
        unit: 'càs',
        ingredient: 'Huile d\'olive',
      },
    ],
    instructions: [
      'Dans une casserole d\'eau bouillante, faites cuire les nouilles selon les instructions du paquet. Égouttez-les en fin de cuisson.',
      'Pendant ce temps, faites chauffer une poêle avec un filet d\'huile d\'olive et faites cuire les légumes pendant 8 minutes.',
      'Coupez le filet de poulet dans le sens de la largeur afin d\'obtenir une épaisseur plus fine.',
      'Dans une poêle avec un filet d\'huile d\'olive, ajoutez le poulet et faites-le dorer 2 minutes à feu vif sur une première face. Retournez-le et laissez-le cuire encore 8 minutes à feu moyen. Salez et poivrez.',
      'Quand les légumes sont cuits ajoutez les nouilles et la sauce soja et faites revenir le tout pendant 2 minutes.',
      'Dans une assiette ajoutez les nouilles sautées et le poulet. Assaisonnez selon vos préférences. C\'est prêt !',
    ],
    nb: 'Pour une recette encore plus gourmande, faire mariner le poulet 5 à 10 minutes dans un mélange de sauce soja, d\'ail & d\'huile de sésame',
  },
  {
    id: 8,
    title: 'Pasta alla carbonara',
    image: PastaAllaCarbonara,
    portions: 1,
    ingredients: [
      {
        quantity: 100,
        unit: 'g',
        ingredient: 'Pâtes (spaghetti)',
      },
      {
        quantity: 3,
        ingredient: 'Tranches de pancetta',
      },
      {
        quantity: 1,
        ingredient: 'Oeuf',
      },
      {
        quantity: 40,
        unit: 'g',
        ingredient: 'Parmesan (morceaux)',
      },
    ],
    instructions: [
      'Coupez grossièrement la pancetta.',
      'Dans une poêle chaude, ajoutez la pancetta. Faites-la revenir 5 minutes puis réservez.',
      'En parallèle, dans une casserole d\'eau bouillante salée, faites cuire les pâtes selon les instructions du paquet.',
      'Séparez les blancs des jaunes d\'œuf. Fouettez les jaunes, à l\'aide d\'une fourchette.',
      'En fin de cuisson, prélevez une petite louche d\'eau de cuisson des pâtes puis égouttez-les.',
      'Versez l\'eau de cuisson réservée dans les jaunes d\'œufs et fouettez le tout pour obtenir un mélange lisse. Ajoutez le parmesan râpé. Salez légèrement puis poivrez et mélangez à nouveau.',
      'Ajoutez les pâtes à peine égouttées dans la poêle avec la pancetta. Versez le mélange de jaunes d\'œuf puis mélangez.',
      'Servez les pâtes carbonara dans une assiette. Parsemez de parmesan râpé, s\'il vous en reste. Re-assaisonnez selon vos goûts, c\'est prêt !',
    ],
  },
  {
    id: 9,
    title: 'Croque-monsieur gourmand',
    image: CroqueMonsieur,
    portions: 1,
    ingredients: [
      {
        quantity: 2,
        ingredient: 'Tranches de pain de mie',
      },
      {
        quantity: 1,
        ingredient: 'Tranche de jambon blanc',
      },
      {
        quantity: 40,
        unit: 'g',
        ingredient: 'Comté (râpé)',
      },
      {
        quantity: 10,
        unit: 'g',
        ingredient: 'Beurre',
      },
      {
        quantity: 10,
        unit: 'g',
        ingredient: 'Maïzena',
      },
      {
        quantity: 125,
        unit: 'ml',
        ingredient: 'Lait',
      },
      {
        quantity: 1,
        unit: 'pincée',
        ingredient: 'Noix de muscade (facultatif)',
      },
      {
        quantity: 1,
        unit: 'poignée',
        ingredient: 'Salade (Mélange)',
      },
      {
        quantity: 2,
        unit: 'noisettes',
        ingredient: 'Beurre',
      },
    ],
    instructions: [
      'Préchauffez le four à 220°C. Préparez la béchamel. Dans une casserole, ajoutez le beurre et faites-le fondre, sur feu doux. Ajoutez la maïzena et mélangez rapidement à l\'aide d\'un fouet.',
      'Ajoutez le lait, en mélangeant continuellement, jusqu\'à obtenir une texture de pâte à crêpes un peu épaisse. Salez, poivrez et ajoutez un peu de muscade râpée (optionnel), puis mélangez. Laissez la béchamel refroidir complètement afin qu\'elle s\'épaississe.',
      'Disposez les tranches de pain de mie dans un plat allant au four et tartinez-les avec la béchamel refroidie.',
      'Ajoutez le jambon en morceaux et la moitié du comté râpé.',
      'Refermez les croques-monsieur avec la seconde tranche de pain, puis recouvrez-les du reste de béchamel et de comté râpé. Enfournez 10 à 15 minutes à 220°C.',
      'Une fois dorés et croustillants, sortez les croques-monsieur du four et servez-les avec une salade verte assaisonnée selon vos goûts. C\'est prêt !',
    ],
  },
  {
    id: 10,
    title: 'Wok légumes sautés, poulet & sauce cacahuète',
    image: WokLegumesPouletCacahuete,
    portions: 1,
    ingredients: [
      {
        quantity: 1,
        ingredient: 'Poulet (escalope)',
      },
      {
        quantity: 1,
        ingredient: 'Carotte (frais)',
      },
      {
        quantity: 1 / 2,
        ingredient: 'Courgette',
      },
      {
        quantity: 1 / 2,
        ingredient: 'Gousse d\'ail',
      },
      {
        quantity: 1,
        unit: 'càs',
        ingredient: 'Beurre de cacahuète',
      },
      {
        quantity: 2,
        unit: 'càs',
        ingredient: 'Sauce soja sucrée',
      },
      {
        quantity: 70,
        unit: 'g',
        ingredient: 'Riz',
      },
      {
        quantity: 1,
        unit: 'càc',
        ingredient: 'Huile d\'olive',
      },
    ],
    instructions: [
      'Faites cuire le riz selon les instructions du paquet. Égouttez-le en fin de cuisson. Réservez.',
      'Réalisez des lamelles de courgettes et de carottes à l’aide d’un économe.',
      'Coupez le poulet en tranches. Réservez.',
      'Dans une grande poêle, faites chauffer un filet d\'huile d\'olive. Ajoutez les carottes et les courgettes. Salez, poivrez et faites-les revenir pendant 5-6 minutes. Débarrassez les légumes de la poêle.',
      'Dans la même poêle, ajoutez un filet d\'huile d\'olive et faites revenir le poulet 5-6 minutes, en remuant régulièrement, jusqu\'à ce qu\'il soit doré.',
      'Pendant ce temps, préparez la sauce cacahuète. Dans un bol, mélangez : le beurre de cacahuète, la sauce soja et l\'ail râpé. Ajoutez un filet d\'eau, petit à petit, pour délayer la sauce.',
      'Ajoutez les légumes mis de côté dans la poêle avec le poulet, puis versez la sauce cacahuète. Mélangez le tout sur feu doux pendant 3 minutes.',
      'Dans une assiette, ajoutez le riz et la poêlée de légumes et poulet. Parsemez de graines de sésame, si vous en avez. C\'est prêt ! ',
    ],
  },
];

export const galleryData = {
  title: 'Mes Recettes',
  content: recipesData,
};