// src/components/PopularPosts.tsx

import React from "react";
import { articles } from "../../../assets/data/articles";

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface PopularPostsProps {
  legend?: string;
}

const PopularPosts: React.FC<PopularPostsProps> = ({ legend = "🔥 Posts populaires" }) => {
  // Tri des articles par date décroissante (les plus récents en premier)
  const sortedArticles = [...articles].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Sélection des 5 derniers articles publiés
  const lastFiveArticles = sortedArticles.slice(0, 5);

  return (
    <fieldset className="border border-[#DDD0C8] rounded-lg p-4 bg-[#FAF8F5]">
      {/* Légende */}
      <legend className="px-2 text-lg font-semibold text-[#4B715F]">{legend}</legend>
      {/* Liste des articles */}
      <ul className="text-sm space-y-4">
        {lastFiveArticles.map((article) => (
          <li key={article.id}>
            {/* Titre */}
            <a href="#" className="font-semibold block">
              {article.title}
            </a>
            {/* Description */}
            {article.description && (
              <p className="text-[#616161] text-md mt-1">{article.description}</p>
            )}
            {/* Date */}
            <div className="flex flex-wrap items-center text-sm space-x-4 py-2 text-[#616161] ">
              <p>Publié le <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time></p>
              <p>Temps de lecture : {article.readingTime}</p>
            </div>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default PopularPosts;