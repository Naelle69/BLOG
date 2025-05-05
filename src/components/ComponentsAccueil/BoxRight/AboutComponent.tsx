// src/components/ComponentsLeft/ProfileComponent.tsx

import React from "react";

const ProfileComponent: React.FC = () => {
  return (
    <fieldset className="border border-[#DDD0C8] rounded-lg p-4 text-center">
      {/* Légende */}
      <legend className="px-2 text-sm font-semibold text-[#4B715F]">👤 À propos</legend>
      {/* Contenu */}
      <img
        src="/images/flower-5614089_640.jpg"
        alt="Photo de profil"
        className="rounded-t-lg mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">Marie Dubois</h3>
      <p className="text-sm mt-2">
        Passionnée de simplicité, de beauté naturelle et d’alimentation consciente.
      </p>
      <p className="italic mt-2">"Moins mais mieux."</p>
    </fieldset>
  );
};

export default ProfileComponent;
