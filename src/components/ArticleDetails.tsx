// src/components/ArticleDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../assets/data/articles";
import { Link } from "react-router-dom";


const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const articleId = parseInt(id || "0", 10);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    
<article
            key={article.id}
            className=" bg-white border border-[#DDD0C8] p-6 rounded-2xl shadow-sm gap-4 w-full space-y-4"
          >
           {/*  Article détaillé */}
          <div className="flex flex-col md:flex-row">
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
          </div>

      {/* Contenu de l'article */}
     {/*  <p className="text-gray-700">{article.description}</p> */}
      {/* Tags */}
      {/* <div className="mt-4">
        <strong>Tags :</strong>
        <ul className="flex space-x-2 mt-2">
          {article.tags.map((tag, index) => (
            <li key={index} className="text-sm text-gray-600">
              #{tag}
            </li>
          ))}
        </ul>
      </div> */}

            {/* Informations de l'auteur */}
            <div className="flex items-center mb-4 border-t-1 border-[#DDD0C8] mt-4">
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
    </article>
  );
};

export default ArticleDetail;