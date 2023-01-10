/* le stockage dans un tableau des photos et leurs caractéristiques */

export let cantinPictures = [
  {
    category: "Mariage",
    pictures: [
      {
        pictitle: "Mélange",
        picture: "./pictures/Mariage/Melange.jpg",
        linkTo: "#",
        description: "Mains qui mélangent des couleurs dans un pot",
        price: 270,
      },
      {
        pictitle: "Par la main",
        picture: "./pictures/Mariage/Par_la_main.jpg",
        linkTo: "#",
        description: "Gros plan sur main qui se tiennet avec bouquet",
        price: 270
      },
      {
        pictitle: "Alliance",
        picture: "./pictures/Mariage/Alliance.jpg",
        linkTo: "#",
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
    pictures: [
      {
        pictitle: "Belle vue",
        picture: "./pictures/Couple/Belle_vue.jpg",
        linkTo: "#",
        description: "Couple assis en hauteur devant un paysage infini",
        price: 310
      },
      {
        pictitle: "Siéste Urbaine",
        picture: "./pictures/Couple/Sieste_urbaine.jpg",
        linkTo: "#",
        description: "Couple assis devant un mur gris délabré",
        price: 280
      },
      {
        pictitle: "Tombée du jour",
        picture: "./pictures/Couple/Tombee_du_jour.jpg",
        linkTo: "#",
        description: "Couple de profil a la tombée du jour devant un paysage",
        price: 210
      },
      {
        pictitle: "Bonheur",
        picture: "./pictures/Couple/Bonheur.jpg",
        linkTo: "#",
        description: "Couple enlacé sur fond décor flou",
        price: 300
      }
    ]
  },
  {
    categeory: "Famille",
    pictures: [
      {
        pictitle: "Bulles dans le parc",
        picture: "./pictures/Famille/Bulles_dans_le_parc.jpg",
        linkTo: "#",
        description: "Homme avec sa femme dans le parc faisant des bulles de savon pour leurs enfants",
        price: 310
      },
      {
        pictitle: "Fratrie",
        picture: "./pictures/Famille/Fratrie.jpg",
        linkTo: "#",
        description: "Frère et soeur de 6 ans environ de dos dans un parc",
        price: 250
      },
      {
        pictitle: "En nage",
        picture: "./pictures/Famille/En_nage.jpg",
        linkTo: "#",
        description: "Canards et cygnes blancs nageant au bord d'un lac",
        price: 270
      },
      {
        pictitle: "Cygnes aux lentilles",
        picture: "./pictures/Famille/Cygnes_aux_lentilles.jpg",
        linkTo: "#",
        description: "Cygne blanc emmenant ses jeunes dans un bras de rivière couvert de lentilles d'eau",
        price: 270
      }
    ]
  },
  {
    category: "Grossesse",
    pictures: [
      {
        pictitle: "Mains tendresse",
        picture: "./pictures/Grossesse/Mains_tendresse.jpg",
        linkTo: "#",
        description: "Mains du père de la mère et de leur enfant sur le ventre de la future maman",
        price: 250
      },
      {
        pictitle: "Tatouages",
        picture: "./pictures/Grossesse/Tatouages.jpg",
        linkTo: "#",
        description: "Homme de dos avec son tatouage qui écoute le ventre de la future maman",
        price: 250
      },
      {
        pictitle: "Dans la ville",
        picture: "../../../public/pictures/Grossesse/Dans_la_ville.jpg",
        linkTo: "#",
        description: "Maman enceinte se promenant en ville avec sa fille mangeant une glace en éte",
        price: 250
      },
      {
        pictitle: "Parapluie voilé",
        picture: "./pictures/Grossesse/Parapluie_voile.jpg",
        linkTo: "#",
        description: "Photo noir et blanc de la maman enceinte avec son parapluie de dentelle devant le visage",
        price: 250
      }
    ]
  },
  {
    category: "Bapteme",
    pictures: [
      {
        pictitle: "Que d'eau",
        picture: "./pictures/Bapteme/Que d_eau.jpg",
        linkTo: "#",
        description: "Bébé au baptème avec l'eau qui coule de la mai du prêtre",
        price: 230
      },
      {
        pictitle: "Presque",
        picture: "./pictures/Bapteme/Presque.jpg",
        linkTo: "#",
        description: "la tête du bébé qui attend l'eau de la coupelle du prêtre au dessus du récipiend",
        price: 230
      },
      {
        pictitle: "Flamme intense",
        picture: "./pictures/Bapteme/Flamme_intense.jpg",
        linkTo: "#",
        description: "Une femme allume un cierge au premier plan flou avec une bougie",
        price: 230
      },
      {
        pictitle: "La cruche",
        picture: "./pictures/Bapteme/La_cruche.jpg",
        linkto: "#",
        description: "Bébé baptisé avec l'eau d'une cruche bleue en céramique au dessus du bassin",
        price: 230
      }
    ]
  },
  {
    category: "Bebe",
    pictures: [
      {
        pictitle: "Petits pieds",
        picture: "./pictures/Bebe/Petits_pieds.jpg",
        linkTo: "#",
        description: "Petits pides de bébé dans une main, en noir et blanc",
        price: 420
      },
      {
        pictitle: "Cigogne",
        picture: "./pictures/Bebe/Cigogne.jpg",
        linkTo: "#",
        description: "Scupture en couleur de cigogne tenant un bébé dans un sac de transport",
        price: 400
      },
      {
        pictitle: "Relax",
        picture: "./pictures/Bebe/Relax.jpg",
        linkTo: "#",
        description: "Bébé dans des relax au grand air lors d'une fête",
        price: 400
      },
      {
        pictitle: "Mes chaussons",
        picture: "./pictures/Bebe/Mes_chaussons.jpg",
        linkTo: "#",
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
