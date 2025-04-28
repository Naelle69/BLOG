// src/data/Posts.ts

interface Post {
    title: string;
    url: string;
    description?: string; // Description optionnelle
    date?: string; // Date de publication optionnelle
    category?: string; // Catégorie optionnelle
  }
  
  // Tableau des posts populaires
  export const posts: Post[] = [
    {
      title: "Routine peau simplifiée",
      url: "#",
      description: "Découvrez comment simplifier votre routine de soins de la peau.",
      date: "2023-10-01",
      category: "Beauté",
    },
    {
      title: "Recettes express & saines",
      url: "#",
      description: "Des idées de recettes rapides et nutritives pour tous les jours.",
      date: "2023-09-25",
      category: "Cuisine",
    },
    {
      title: "Salle de bain minimaliste",
      url: "#",
      description: "Comment créer une salle de bain épurée et fonctionnelle.",
      date: "2023-09-20",
      category: "Décoration",
    },
    {
      title: "Pourquoi j'ai arrêté le fond de teint",
      url: "#",
      description: "Mon expérience avec le no-makeup look et ses bienfaits.",
      date: "2023-09-15",
      category: "Beauté",
    },
    {
      title: "Top 5 huiles végétales",
      url: "#",
      description: "Les meilleures huiles naturelles pour votre peau et vos cheveux.",
      date: "2023-09-10",
      category: "Soins",
    },
  ];