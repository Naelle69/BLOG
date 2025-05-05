import React from "react";
import { useParams } from "react-router-dom";
import { articles, Article } from "../assets/data/articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ArticleDetailComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const articleId = parseInt(id || '0', 10);
  const article = articles.find((a: Article) => a.id === articleId);

  if (!article) {
    return <div className="p-4">Article non trouvé</div>;
  }

  return (
    <article className=" md:flex-row space-y-10 bg-white border border-[#DDD0C8] p-6 rounded-2xl shadow-sm gap-4 w-full mb-6">
      <div className="w-full space-y-10">
        {/* Image de l’article */}
        <div className="w-full">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="rounded-t-2xl w-full h-full object-cover" 
          />
        </div>

        {/* Contenu de l’article */}
        <div className="flex flex-col w-full">
          <h3 className="text-2xl font-bold text-[#4B715F] mb-2">{article.title}</h3>
          <p className="text-sm text-[#4B715F] py-2">{article.description}</p>

          {/* Date et temps de lecture */}
          <div className="flex flex-wrap items-center text-[#E6B87A] text-sm space-x-4 py-2">
            <p>Publié le <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time></p>
            <p>Temps de lecture : {article.readingTime}</p>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((tag, index) => (
              <button key={index} className="px-3 py-1 bg-[#DDD0C8] rounded hover:bg-[#A8C4A2]">
                {tag}
              </button>
            ))}
          </div>

          {/* Lien vers l’article */}
          <Link
            to={`/article/${article.id}`}
            className="mt-4 bg-[#4B715F] text-white px-4 py-2 rounded block text-center hover:bg-[#355948] transition duration-300"
          >
            Partager cet article
          </Link>
        </div>
      </div>

        {/* Auteur */}
        <div className="">
        <div className="flex items-center sm:pt-6 pt-11 border-t-1 border-[#DDD0C8]">
          <img 
            src={article.author.photo} 
            alt={`Photo de ${article.author.name}`} 
            className="w-10 h-10 rounded-full mr-2" 
          />
          <div>
            <div className="flex items-center space-x-2">
              <p className="font-bold text-[#4B715F]">{article.author.name}</p>
              <a href={article.author.linkedinUrl} className="bg-[#E6B87A] text-[#4B715F] p-1 rounded-full w-[30px] h-[30px] flex items-center justify-center" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="sm" />
              </a>
            </div>
            <p className="text-sm">{article.author.bio}</p>
          </div>
        </div>
        </div>
    </article>
  );
};

export default ArticleDetailComponent;