// src/pages/NotFoundPage.tsx

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5] text-[#4B715F]">
      {/* Titre */}
      <h1 className="text-6xl font-bold mb-4">404</h1>

      {/* Message d'Erreur */}
      <p className="text-2xl font-medium mb-8">Oups ! Cette page n'existe pas.</p>

      {/* Lien vers la Page d'Accueil */}
      <Link
        to="/"
        className="px-6 py-3 bg-[#4B715F] text-white rounded-lg hover:bg-[#355948] transition-colors duration-200"
      >
        Retour à l'Accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;