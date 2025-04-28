// src/pages/TagsPage.tsx

import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ArticlesByTags from "../components/ArticlesByTags";
import AboutComponent from "../components/ComponentsAccueil/BoxRight/AboutComponent";
import PopularPosts from "../components/ComponentsAccueil/BoxRight/PostsComponent";
import NewsletterComponent from "../components/ComponentsAccueil/BoxRight/NewsletterComponent";
import FollowMeComponent from "../components/ComponentsAccueil/BoxRight/SocialsMediaComponent";
import Advertisement from "../components/ComponentsAccueil/BoxRight/PubComponent";

const TagsPage: React.FC = () => {
  const { tag } = useParams(); // Récupère le paramètre 'tag' de l'URL

  // Si aucun tag n'est spécifié, affichez un message ou redirigez vers une autre page
  if (!tag) {
    return <p className="text-lg text-[#4B715F] text-center p-6">Tag non spécifié.</p>;
  }

  return (
    <div className="App">
      <Header />
      <div className="container mx-auto flex flex-col lg:flex-row py-8 px-4 gap-8">
          <main className="w-full lg:w-2/3 flex flex-col items-center space-y-8">
            <ArticlesByTags tag={tag} />
          </main>
          <aside className="w-full lg:w-1/3 flex flex-col space-y-6">
            <AboutComponent />
            <FollowMeComponent />
            <PopularPosts />
            <NewsletterComponent />               
            <Advertisement />
          </aside>
      </div>
    </div>
  );
};

export default TagsPage;
