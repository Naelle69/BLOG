// src/components/ComponentsLeft/FollowMeComponent.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTiktok,
  faFacebook,
  faLinkedin,
  faSnapchat,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const FollowMeComponent: React.FC = () => {
  return (
    <fieldset className="border border-[#DDD0C8] rounded-lg p-4 bg-[#FAF8F5]">
      {/* Légende */}
      <legend className="px-2 text-sm font-semibold text-[#4B715F]">📱 Suivez-moi</legend>
      {/* Icônes des réseaux sociaux */}
      <div className="flex justify-center space-x-4 text-2xl text-[#4B715F]">
        <a href="#" className="bg-[#E6B87A] p-2 rounded-full w-[50px] h-[50px]  align-center text-center" aria-label="Youtube">
          <FontAwesomeIcon icon={faYoutube} size="sm" />
        </a>
        <a href="#" className="bg-[#E6B87A] p-2 rounded-full w-[50px] h-[50px]  align-center text-center" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} size="sm" />
        </a>
        <a href="#" className="bg-[#E6B87A] p-2 rounded-full w-[50px] h-[50px]  align-center text-center" aria-label="Tiktok">
          <FontAwesomeIcon icon={faTiktok} size="sm" />
        </a>
        <a href="#" className="bg-[#E6B87A] p-2 rounded-full w-[50px] h-[50px]  align-center text-center" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} size="sm" />
        </a>
        <a href="#" className="bg-[#E6B87A] p-2 rounded-full w-[50px] h-[50px]  align-center text-center" aria-label="Linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="sm" />
        </a>
        <a href="#" className="bg-[#E6B87A] p-2 rounded-full w-[50px] h-[50px]  align-center text-center" aria-label="Snapchat">
          <FontAwesomeIcon icon={faSnapchat} size="sm" />
        </a>
        <a href="#" className="bg-[#E6B87A] p-2 rounded-full w-[50px] h-[50px]  align-center text-center" aria-label="Pinterest">
          <FontAwesomeIcon icon={faPinterest} size="sm" />
        </a>
      </div>
    </fieldset>
  );
};

export default FollowMeComponent;