// src/components/ArticleDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../assets/data/articles";


const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const articleId = parseInt(id || "0", 10);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div className="p-6">
      {/* Titre et image */}
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      {/* Informations de l'auteur */}
      <div className="flex items-center mb-4">
        <img
          src={article.author.photo}
          alt={`${article.author.name} photo`}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <strong>{article.author.name}</strong>
          <p className="text-sm text-gray-500">{article.author.bio}</p>
        </div>
      </div>
      {/* Contenu de l'article */}
      <p className="text-gray-700">{article.description}</p>
      {/* Tags */}
      <div className="mt-4">
        <strong>Tags :</strong>
        <ul className="flex space-x-2 mt-2">
          {article.tags.map((tag, index) => (
            <li key={index} className="text-sm text-gray-600">
              #{tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleDetail;