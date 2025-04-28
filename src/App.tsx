// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TagsPage from "./pages/TagsPage";
import NotFoundPage from "./pages/NoFoundPage"; 
import ContactPage from "./pages/ContactPage";
import ArticlePage from "./pages/ArticlePage";

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

          {/* Page Article détaillé */}
          <Route path="/article/:id" element={<ArticlePage />} />

          {/* Page 404 (Erreur) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;