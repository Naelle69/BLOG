import React from "react";

// Définition des props pour le composant
interface AdvertisementProps {
  label?: string; // Texte alternatif pour la légende (optionnel)
  content?: string; // Contenu à afficher dans la zone de publicité (optionnel)
  height?: string; // Hauteur personnalisable (optionnel)
}

const Advertisement: React.FC<AdvertisementProps> = ({
  label = "🪧 Publicité",
  content = "Ad Here",
  height = "h-24", // Hauteur par défaut
}) => {
  return (
    <fieldset className="border border-[#DDD0C8] rounded-lg p-4 bg-[#FAF8F5]">
      {/* Légende */}
      <legend className="px-2 text-sm font-semibold text-[#4B715F]">{label}</legend>
      {/* Zone de publicité */}
      <div
        className={`flex items-center justify-center text-[#A8A29E] border border-dashed border-[#A8A29E] ${height}`}
      >
        {content}
      </div>
    </fieldset>
  );
};

export default Advertisement;