/* le stockage dans un tableau des photos et leurs caractéristiques */

export let cantinPictures = [
  {
    category: "Mariage",
    linkTo: "#",
    pictures: [
      {
        pictitle: "Mélange",
        picture: "./pictures/Mariage/Melange.jpg",
        description: "Mains qui mélangent des couleurs dans un pot",
        price: 270,
      },
      {
        pictitle: "Par la main",
        picture: "./pictures/Mariage/Par_la_main.jpg",
        description: "Gros plan sur main qui se tiennent avec bouquet",
        price: 270
      },
      {
        pictitle: "Alliance",
        picture: "./pictures/Mariage/Alliance.jpg",
        description: "Gros plan des mains avec alliance feminine",
        price: 270
      },
      {
        pictitle: "Grand départ",
        picture: "./pictures/Mariage/Grand_depart.jpg",
        linkTo: "#",
        description: "mariés vus de dos en partance vu depuis sous la traîne",
        price: 270
      }
    ],
  },
  {
    category: "Couples",
    linkto:"#",
    pictures: [
      {
        pictitle: "Belle vue",
        picture: "./pictures/Couple/Belle_vue.jpg",
        description: "Couple assis en hauteur devant un paysage infini",
        price: 310
      },
      {
        pictitle: "Siéste Urbaine",
        picture: "./pictures/Couple/Sieste_urbaine.jpg",
        description: "Couple assis devant un mur gris délabré",
        price: 280
      },
      {
        pictitle: "Tombée du jour",
        picture: "./pictures/Couple/Tombee_du_jour.jpg",
        description: "Couple de profil a la tombée du jour devant un paysage",
        price: 210
      },
      {
        pictitle: "Bonheur",
        picture: "./pictures/Couple/Bonheur.jpg",
        description: "Couple enlacé sur fond décor flou",
        price: 300
      }
    ]
  },
  {
    category: "Famille",
    linkTo: "#",
    pictures: [
      {
        pictitle: "Bulles dans le parc",
        picture: "./pictures/Famille/Bulles_dans_le_parc.jpg",
        description: "Homme avec sa femme dans le parc faisant des bulles de savon pour leurs enfants",
        price: 310
      },
      {
        pictitle: "Je sauuuute",
        picture: "./pictures/Famille/je saute.jpeg",
        description: "Jeune enfant qui saute avec un prent de chaque côlé qui la tiennent par la main",
        price: 250
      },
      {
        pictitle: "Sur le ponton",
        picture: "./pictures/Famille/sur le ponton.jpeg",
        description: "Famille de 4 se promenant sur un ponton au dessus de lamer avec un coucher de soleil",
        price: 270
      },
      {
        pictitle: "Patauge",
        picture: "./pictures/Famille/assis a la mer.jpeg",
        description: "Trois enfants et une ado assis sur un banc au bord de l'eau et qui pataugent avec les pieds",
        price: 270
      }
    ]
  },
  {
    category: "Grossesse",
    linkTo: "#",
    pictures: [
      {
        pictitle: "Mains tendresse",
        picture: "./pictures/Grossesse/Mains_tendresse.jpg",
        description: "Mains du père de la mère et de leur enfant sur le ventre de la future maman",
        price: 250
      },
      {
        pictitle: "Tatouages",
        picture: "./pictures/Grossesse/Tatouages.jpg",
        description: "Homme de dos avec son tatouage qui écoute le ventre de la future maman",
        price: 250
      },
      {
        pictitle: "Dans la ville",
        picture: "./pictures/Grossesse/Dans_la_ville.jpg",
        description: "Maman enceinte se promenant en ville avec sa fille mangeant une glace en éte",
        price: 250
      },
      {
        pictitle: "Heureuse",
        picture: "./pictures/Grossesse/allongee.jpeg",
        description: "Dame noire enceinte allongée dans un pré avec une robe bleue",
        price: 250
      },
      {
        pictitle: "En route droit devant",
        picture: "./pictures/Grossesse/en route.jpeg",
        description: "Dame assise en position de conduite dos à un ballon et tenant un faux volant",
        price: 210
      }
    ]
  },
  {
    category: "Bapteme",
    linkTo: "#",
    pictures: [
      {
        pictitle: "Que d'eau",
        picture: "./pictures/Bapteme/Que d_eau.jpg",
        description: "Bébé au baptème avec l'eau qui coule de la mai du prêtre",
        price: 230
      },
      {
        pictitle: "Presque",
        picture: "./pictures/Bapteme/Presque.jpg",
        description: "la tête du bébé qui attend l'eau de la coupelle du prêtre au dessus du récipiend",
        price: 230
      },
      {
        pictitle: "Flamme intense",
        picture: "./pictures/Bapteme/Flamme_intense.jpg",
        description: "Une femme allume un cierge au premier plan flou avec une bougie",
        price: 230
      },
      {
        pictitle: "La cruche",
        picture: "./pictures/Bapteme/La_cruche.jpg",
        description: "Bébé baptisé avec l'eau d'une cruche bleue en céramique au dessus du bassin",
        price: 230
      }
    ]
  },
  {
    category: "Bebe",
    linkTo: "#",
    pictures: [
      {
        pictitle: "Petits pieds",
        picture: "./pictures/Bebe/Petits_pieds.jpg",
        description: "Petits pides de bébé dans une main, en noir et blanc",
        price: 420
      },
      {
        pictitle: "Cigogne",
        picture: "./pictures/Bebe/Cigogne.jpg",
        description: "Scupture en couleur de cigogne tenant un bébé dans un sac de transport",
        price: 400
      },
      {
        pictitle: "Just Relax",
        picture: "./pictures/Bebe/Relax.jpg",
        description: "Bébé dans des relax au grand air lors d'une fête",
        price: 400
      },
      {
        pictitle: "Mes chaussons",
        picture: "./pictures/Bebe/Mes_chaussons.jpg",
        description: "Présentation des chaussons dorés dans les mains de la maman",
        price: 350
      }
    ]
  }
];

/* le stockage des infos concernant le menu */

let cantinMenu = [
  
]

/* le stockage concernant les tarifs */

export const cantinPrices =[
  {
    title:"JUSTE MOI",
    description:"Scéance pour une personne en extérieur ou en studio",
    picture1: "/Pictures/Portrait/berbere-small.jpg",
    picture2: "/Pictures/Portrait/smoker-small.jpg",
    alt1: "portrait de femme berbere avec un voile",
    alt2: "portrait d homme qui fume en studio",
    price: 130 
  },
  {
    title:"POUR DEUX",
    description:"Scéance pour deux personne en extérieur ou en studio",
    picture1: "/Pictures/Couple/studio-couple-small.jpg",
    picture2: "/Pictures/Couple/sunshine-couple-small.jpg",
    alt1: "Couple de noirs enlacés en studio",
    alt2: "Couple en contrejour au soleil couchant",
    price: 195 
  },
  {
    title:"FAMILLE",
    description:"Pour la famille ou les amis jusqu'a 4 personnes, extérieur studio.",
    picture1:"/Pictures/Famille/3_dans_le_parc_small.jpg",
    picture2:"/Pictures/Famille/Face_a_la_mer_small.jpeg",
    alt1: "Parents et enfant sur les épaules dans le parc façon daltons",
    alt2: "Famille de 4 personnes de dos face à la mer",
    price: 220
  },
  {
    title:"IL ETAIT UNE FOIS",
    description:"Photo de grossesse, domicile, studio ou en extérieur",
    picture1:"/Pictures/Grossesse/grossesse_1_small.jpeg",
    picture2:"/Pictures/Grossesse/grossesse_2_small.jpeg",
    alt1: "Femme enceinte dans un champ de blé du de 3/4",
    alt2: "Femme noire enceinte dans un pré arboré vue de 3/4 avant",
    price: 160
  },
  {
    title:"MON BEBE",
    description:"Photo d'enfants jusqu'a 3 ans (domicile)",
    picture1:"/Pictures/Bebe/bebe_1_small.jpg",
    picture2:"/Pictures/Bebe/enfant_1_small.jpg",
    alt1: "Portrait de bébé dans son lit avec un bonnet à oreilles",
    alt2: "Portrait de petite fille de dos assise dans un champ de fleurs regardant le soleil a travers les arbles",
    price: 100
  },
  {
    title: "J'IMMORTALISE L EVENEMENT",
    description:"Prestation (mariage, baptème, etc...",
    picture1:"/Pictures/Mariage/mariage_1_small.jpeg",
    picture2:"/Pictures/Mariage/mariage_3_small.jpeg",
    alt1: "Coupole de mariage au fond avec les tables dréssées sur les côtés",
    alt2: "Le marié servant du champagne",
    price: 0
  }
]
