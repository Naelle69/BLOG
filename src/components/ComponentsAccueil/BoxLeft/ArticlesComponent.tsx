// src/components/ComponentsLeft/ArticlesComponent.tsx

import React, { useState } from "react";
import { articles, Article } from "../../../assets/data/articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ArticlesComponent: React.FC = () => {
  // État pour la page actuelle
  const [currentPage, setCurrentPage] = useState(1);

  // Nombre d'articles par page
  const articlesPerPage = 5;

  // Tri des articles du plus récent au plus ancien
  const sortedArticles = [...articles].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Calcul des articles à afficher pour la page actuelle
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Changement de page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);

  return (
    <div className="w-full">
      {/* Affichage des articles */}
      {currentArticles.map((article: Article) => (
        <article key={article.id} className="flex flex-col md:flex-row bg-white border border-[#DDD0C8] p-6 rounded-2xl shadow-sm gap-4 w-full mb-6">
          <div className="w-full md:w-1/2">
            <img src={article.imageUrl} alt="Image article" className="rounded-l-2xl w-full h-full object-cover" />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-[#4B715F] mb-2">{article.title}</h3>
            <p className="text-sm text-[#4B715F] py-2">{article.description}</p>

            <div className="flex flex-wrap items-center text-[#E6B87A] text-sm space-x-4 py-2">
              <p>Publié le <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time></p>
              <p>Temps de lecture : {article.readingTime}</p>
            </div>

            <div className="flex items-center mt-4">
              <img src={article.author.photo} alt={`Photo de ${article.author.name}`} className="w-10 h-10 rounded-full mr-2" />
              <div>
                <div className="flex items-center space-x-2">
                  <p className="font-bold">{article.author.name}</p>
                  <a href="#" className="bg-[#E6B87A] p-1 rounded-full w-[30px] h-[30px] align-center text-center" aria-label="Linkedin">
                    <FontAwesomeIcon icon={faLinkedin} size="sm" />
                  </a>
                </div>
                <p className="text-sm">{article.author.bio}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag, index) => (
                <button key={index} className="px-3 py-1 bg-[#DDD0C8] rounded hover:bg-[#A8C4A2]">
                  {tag}
                </button>
              ))}
            </div>

            <Link
              to={`/article/${article.id}`}
              className="mt-4 bg-[#4B715F] text-white px-4 py-2 rounded block text-center hover:bg-[#355948] transition duration-300"
            >
              Lire plus
            </Link>
            
          </div>
        </article>
      ))}

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

export default ArticlesComponent;