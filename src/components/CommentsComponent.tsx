import React, { useState } from "react";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
}

const CommentsSection = () => {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
  });
  const [currentPage, setCurrentPage] = useState(1); // État pour la pagination

  const commentsPerPage = 3; // Nombre de commentaires par page

  // Données simulées pour les commentaires
  const comments: Comment[] = [
    {
      id: 1,
      author: "John Williams",
      avatar: "https://via.placeholder.com/50",
      date: "August 23, 2022 at 1:49 pm",
      content:
        "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat.",
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "https://via.placeholder.com/50",
      date: "August 24, 2022 at 2:15 pm",
      content:
        "Sed ac magna ut nisi ullamcorper tincidunt. Nulla facilisi.",
    },
    {
      id: 3,
      author: "Alice Johnson",
      avatar: "https://via.placeholder.com/50",
      date: "August 25, 2022 at 3:30 pm",
      content:
        "Praesent euismod, dolor nec elementum ultrices, nisl eros vestibulum velit, nec dapibus sapien metus vitae erat.",
    },
    {
      id: 4,
      author: "Bob Anderson",
      avatar: "https://via.placeholder.com/50",
      date: "August 26, 2022 at 4:45 pm",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
      id: 5,
      author: "Eve Taylor",
      avatar: "https://via.placeholder.com/50",
      date: "August 27, 2022 at 5:00 pm",
      content:
        "Aenean auctor, nisi vel consectetur fringilla, nibh justo imperdiet augue, in eleifend risus leo a arcu.",
    }
  ];

  // Calcul des commentaires à afficher pour la page actuelle
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  // Gestion du changement de page
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Gestion du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Commentaire soumis :", formData);
    alert("Commentaire envoyé avec succès !");
    setFormData({
      comment: "",
      name: "",
      email: "",
      website: "",
    });
  };

  return (
    <div className="mt-8 bg-white border border-[#DDD0C8] space-y-10 p-6 rounded-2xl shadow-sm gap-4 w-full">
      <h2 className="text-xl font-bold mb-4">Consultez tous les commentaires en lien avec cet article</h2>

      {/* Affichage des commentaires paginés */}
      {currentComments.map((comment) => (
        <div key={comment.id} className="my-10 space-y-10">
          <div className="flex items-center mb-2">
            <img
              src={comment.avatar}
              alt={`${comment.author} avatar`}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <strong>{comment.author}</strong> a écrit:
              <p className="text-gray-500 text-sm mt-1">{comment.date}</p>
            </div>
          </div>
          <p className="mt-2">{comment.content}</p>
          <a href="#" className="text-blue-500 hover:underline">
            Lire le commentaire
          </a>
          <hr className="my-4" />
        </div>
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 pt-4">
          {/* Bouton Précédent */}
          <button
            className={`px-3 py-1 bg-[#DDD0C8] rounded hover:bg-[#A8C4A2] ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </button>

          {/* Numéros de page */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 bg-[#DDD0C8] rounded hover:bg-[#A8C4A2] ${
                currentPage === page ? "bg-[#E6B87A] font-bold" : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          {/* Bouton Suivant */}
          <button
            className={`px-3 py-1 bg-[#DDD0C8] rounded hover:bg-[#A8C4A2] ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      )}

      {/* Formulaire de commentaire */}
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-bold mb-2">Laisser un commentaire</h3>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-3 py-2 border border-[#DDD0C8] rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Votre commentaire..."
        ></textarea>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mt-4 border border-[#DDD0C8] rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Nom *"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mt-4 border border-[#DDD0C8] rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Email *"
        />
        <button
          type="submit"
          className="mt-4 bg-[#4B715F] text-white px-4 py-2 rounded block text-center hover:bg-[#355948] transition duration-300"
        >
          Envoyer le commentaire
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;