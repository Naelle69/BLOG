import React from "react";
import { themes} from "../../../assets/data/themes";

const ThemesComponent: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {themes.map((theme, index) => (
        <fieldset key={index} className="border border-[#DDD0C8] rounded-lg p-4">
          <legend className="px-2 text-sm font-bold text-[#4B715F]">
            {theme.emoji} {theme.title}
          </legend>
          <p className="text-sm">{theme.description}</p>
        </fieldset>
      ))}
    </section>
  );
};

export default ThemesComponent;
