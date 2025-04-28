import React, { useState } from "react";

const ContactForm = () => {
  // État pour gérer les valeurs des champs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Données du formulaire soumises :", formData);
    alert("Message envoyé avec succès !");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Titre */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Formulaire de Contact
      </h2>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Champ Nom */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-[#DDD0C8]">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-[#DDD0C8] rounded-md shadow-sm focus:outline-none focus:ring-indigo-[#DDD0C8] focus:border-indigo-[#DDD0C8] sm:text-sm"
            placeholder="Votre nom"
          />
        </div>

        {/* Champ Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-[#DDD0C8]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-[#DDD0C8] rounded-md shadow-sm focus:outline-none focus:ring-indigo-[#DDD0C8] focus:border-indigo-[#DDD0C8] sm:text-sm"
            placeholder="Votre email"
          />
        </div>

        {/* Champ Sujet */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-[#DDD0C8]">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-[#DDD0C8] rounded-md shadow-sm focus:outline-none focus:ring-indigo-[#DDD0C8] focus:border-indigo-[#DDD0C8] sm:text-sm"
            placeholder="Sujet du message"
          />
        </div>

        {/* Champ Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-[#DDD0C8]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4} // Correction : utilisez un nombre pour éviter l'erreur TypeScript
            className="mt-1 block w-full px-3 py-2 border border-[#DDD0C8] rounded-md shadow-sm focus:outline-none focus:[#4B715F] focus:border-[#DDD0C8] sm:text-sm"
            placeholder="Votre message ici..."
          ></textarea>
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4B715F] hover:bg-[#4B715F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:[#4B715F]"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;