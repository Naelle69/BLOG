// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TagsPage from "./pages/TagsPage"; // Importez correctement le composant TagsPage
import NotFoundPage from "./pages/NoFoundPage"; // Décommentez cette ligne si vous avez une page 404
import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAF8F5]">
        {/* Routes */}
        <Routes>
          {/* Page d'Accueil */}
          <Route path="/" element={<HomePage />} />

          {/* Page par Tag */}
          <Route path="/tag/:tag" element={<TagsPage />} />

          {/* Page de Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Page 404 (Erreur) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;