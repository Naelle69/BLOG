// src/components/ArticlesByTags.tsx

import React, { useState } from "react";
import { articles, Article } from "../assets/data/articles";
import { Link } from "react-router-dom";

interface ArticlesByTagsProps {
  tag: string;
}

const ArticlesByTags: React.FC<ArticlesByTagsProps> = ({ tag }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  // Filtrer les articles par tag
  const filteredArticles = articles.filter((article) =>
    article.tags.includes(tag)
  );

  // Trier les articles du plus récent au plus ancien
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sortedArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);

  // Gestion du changement de page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full p-6 space-y-6">
      {/* Titre de la page */}
      <div className="flex justify-center items-center h-16 border-t border-b border-[#DDD0C8] ">
        <h1 className="text-3xl font-bold text-[#4B715F]">{tag}</h1>
      </div>

      {/* Affichage des articles */}
      {currentArticles.length > 0 ? (
        currentArticles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col md:flex-row bg-white border border-[#DDD0C8] p-6 rounded-2xl shadow-sm gap-4 w-full mb-6"
          >
            <div className="w-full md:w-1/2">
              <img
                src={article.imageUrl}
                alt={`Image pour l'article ${article.title}`}
                className="rounded-l-2xl w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-[#4B715F] mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-[#4B715F] py-2">{article.description}</p>

              <div className="flex flex-wrap items-center text-[#E6B87A] text-sm space-x-4 py-2">
                <p>
                  Publié le{" "}
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </p>
                <p>Temps de lecture : {article.readingTime}</p>
              </div>

              <Link
              to={`/article/${article.id}`}
              className="mt-4 bg-[#4B715F] text-white px-4 py-2 rounded block text-center hover:bg-[#355948] transition duration-300"
            >
              Lire plus
            </Link>
            </div>
          </article>
        ))
      ) : (
        <p className="text-lg text-[#4B715F]">Aucun article trouvé pour ce tag.</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center space-x-2 pt-4">
        {/* Bouton Précédent */}
        <button
          className={`px-3 py-1 bg-[#DDD0C8] rounded hover:bg-[#A8C4A2] ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>

        {/* Numéros de Page */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`px-3 py-1 bg-[#DDD0C8] rounded hover:bg-[#A8C4A2] ${
              currentPage === page ? "bg-[#E6B87A]" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Bouton Suivant */}
        <button
          className={`px-3 py-1 bg-[#DDD0C8] rounded hover:bg-[#A8C4A2] ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default ArticlesByTags;