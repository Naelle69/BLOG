// src/components/CommentsSection.tsx
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
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Commentaires</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4">
          <div className="flex items-center mb-2">
            <img
              src={comment.avatar}
              alt={`${comment.author} avatar`}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <strong>{comment.author}</strong> says:
              <p className="text-gray-500 text-sm mt-1">{comment.date}</p>
            </div>
          </div>
          <p className="mt-2">{comment.content}</p>
          <a href="#" className="text-blue-500 hover:underline">
            Reply
          </a>
          <hr className="my-4" />
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-bold mb-2">Leave a Reply</h3>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Votre commentaire..."
        ></textarea>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Nom *"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Email *"
        />
        <button
          type="submit"
          className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;