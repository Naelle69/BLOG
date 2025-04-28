// src/components/ComponentsLeft/NewsletterComponent.tsx

import React from "react";

const NewsletterComponent: React.FC = () => {
  return (
    <fieldset className="border border-[#DDD0C8] rounded-lg p-4 bg-[#FAF8F5]">
      <legend className="px-2 text-sm font-semibold text-[#4B715F]">📰 Newsletter</legend>
      <p className="text-sm mb-2">
        Recevez mes conseils bien-être directement par mail.
      </p>
      <input
        type="email"
        placeholder="Votre e-mail"
        className="w-full p-2 mb-2 rounded border border-[#A8A29E]"
      />
      <button className="bg-[#4B715F] text-white w-full py-2 rounded hover:bg-[#355948]">
        S'inscrire
      </button>
    </fieldset>
  );
};

export default NewsletterComponent;
