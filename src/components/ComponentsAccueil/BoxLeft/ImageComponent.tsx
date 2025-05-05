import React from "react";

const ImageComponent: React.FC = () => {
  return (
    <section className="relative w-full">
      <img
        src="/images/stones-947475_640.jpg"
        alt="Hero"
        className="w-full rounded-2xl"
      />
      <div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col justify-center items-center text-white p-8">
        <h2 className="text-4xl font-bold font-serif">Simplement Essentiel</h2>
        <p className="mt-2 text-center text-4xl">Moins de produits, plus de bien-être</p>
      </div>
    </section>
  );
};

export default ImageComponent;