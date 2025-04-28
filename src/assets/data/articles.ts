// src/assets/data/articles.ts
// src/assets/data/articles.ts

export interface Article {
  id: number;
  title: string;
  description: string;
  category?: string;
  date: string;
  readingTime: string;
  author: {
    name: string;
    photo: string;
    bio: string;
    linkedinUrl: string;
  };
  imageUrl: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Routine minimaliste pour une peau éclatante",
    description:
      "Adoptez une routine beauté simplifiée avec seulement 3 produits essentiels pour un teint naturel et radieux.",
    category: "Beauté",
    date: "2022-08-24",
    readingTime: "3 min",
    author: {
      name: "Jane Smith",
      photo: "../assets/images/jane-smith.jpg",
      bio: "Passionnée de soins naturels et de routines minimalistes.",
      linkedinUrl: "#",
    },
    imageUrl: "../../../assets/images/essential-oils-3931430_640.jpg",
    tags: ["Beauté", "Soins", "Bien-être"],
  },
  {
    id: 2,
    title: "Les bienfaits du yoga sur la santé mentale",
    description:
      "Découvrez comment le yoga peut améliorer votre bien-être mental et réduire le stress au quotidien.",
    category: "Santé",
    date: "2022-08-25",
    readingTime: "4 min",
    author: {
      name: "Jane Smith",
      photo: "./images/jane-smith.jpg",
      bio: "Experte en bien-être holistique et pratiques de santé.",
      linkedinUrl: "#",
    },
    imageUrl: "./images/yoga-session.jpg",
    tags: ["Santé", "Bien-être", "Rituels"],
  },
  {
    id: 3,
    title: "Rituel du matin pour une journée productive",
    description:
      "Intégrez ces 5 étapes simples dans votre rituel matinal pour démarrer la journée avec énergie et clarté.",
    category: "Rituel",
    date: "2022-08-26",
    readingTime: "5 min",
    author: {
      name: "Jane Smith",
      photo: "./images/jane-smith.jpg",
      bio: "Coach en productivité et routines quotidiennes.",
      linkedinUrl: "#",
    },
    imageUrl: "./images/morning-ritual.jpg",
    tags: ["Rituels", "Bien-être", "Productivité"],
  },
  {
    id: 4,
    title: "Les secrets d'une peau hydratée toute l'année",
    description:
      "Apprenez les gestes essentiels pour maintenir une peau hydratée et saine, même en hiver.",
    category: "Soins",
    date: "2022-08-27",
    readingTime: "4 min",
    author: {
      name: "Jane Smith",
      photo: "./images/jane-smith.jpg",
      bio: "Spécialiste en soins de la peau et routines naturelles.",
      linkedinUrl: "#",
    },
    imageUrl: "./images/skin-care.jpg",
    tags: ["Soins", "Beauté", "Bien-être"],
  },
  {
    id: 5,
    title: "Recette de smoothie détox pour le petit-déjeuner",
    description:
      "Préparez ce smoothie riche en nutriments pour un petit-déjeuner sain et revitalisant.",
    category: "Recettes",
    date: "2022-08-28",
    readingTime: "3 min",
    author: {
      name: "Jane Smith",
      photo: "./images/jane-smith.jpg",
      bio: "Nutritionniste passionnée par les recettes saines.",
      linkedinUrl: "#",
    },
    imageUrl: "./images/smoothie.jpg",
    tags: ["Recettes", "Santé", "Bien-être"],
  },
  {
    id: 6,
    title: "Comment adopter un mode de vie éco-responsable",
    description:
      "Découvrez des astuces simples pour réduire votre empreinte écologique au quotidien.",
    category: "Eco-responsabilité",
    date: "2022-08-29",
    readingTime: "5 min",
    author: {
      name: "Jane Smith",
      photo: "./images/jane-smith.jpg",
      bio: "Engagée pour une vie plus durable et respectueuse de l'environnement.",
      linkedinUrl: "#",
    },
    imageUrl: "./images/eco-friendly.jpg",
    tags: ["Eco-responsabilité", "Bien-être", "Rituels"],
  },
  {
    id: 7,
    title: "Les secrets d'un maquillage naturel et rapide",
    description:
      "Maîtrisez les bases d'un maquillage discret et rapide pour un look impeccable en 10 minutes.",
    category: "Beauté",
    date: "2022-08-30",
    readingTime: "4 min",
    author: {
      name: "Jane Smith",
      photo: "./images/jane-smith.jpg",
      bio: "Make-up artist spécialisée dans le naturel.",
      linkedinUrl: "#",
    },
    imageUrl: "./images/natural-makeup.jpg",
    tags: ["Beauté", "Soins", "Bien-être"],
  },
  {
    id: 8,
    title: "Les clés pour cultiver un esprit positif",
    description:
      "Apprenez à transformer votre état d'esprit grâce à ces pratiques simples et efficaces.",
    category: "Bien-être",
    date: "2022-08-31",
    readingTime: "4 min",
    author: {
      name: "Jane Smith",
      photo: "./images/jane-smith.jpg",
      bio: "Coach en développement personnel et bien-être mental.",
      linkedinUrl: "#",
    },
    imageUrl: "./images/positive-mindset.jpg",
    tags: ["Bien-être", "Rituels", "Développement personnel"],
  },
];