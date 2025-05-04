// src/pages/ArticleDetail.jsx
import { useParams, Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "How to avoid bugs using modern C++",
    content: "Detailed guide on writing bug-free C++ using RAII, smart pointers, etc.",
  },
  {
    id: 2,
    title: "Learning Computer Programming Terminology",
    content: "Glossary of computer science and programming terms explained.",
  },
  {
    id: 3,
    title: "C++ class for generating Fibonacci sequence",
    content: "A breakdown of how to use a class in C++ to calculate Fibonacci numbers.",
  },
  {
    id: 4,
    title: "C++ Copying",
    content: "Understanding shallow vs deep copy in C++ with examples.",
  },
  {
    id: 5,
    title: "Safe Clearing of Private Data",
    content: "Techniques for securely clearing sensitive variables from memory.",
  },
  {
    id: 6,
    title: "Vital Bottom-End C++ Coding Technique | Quorum Learn",
    content: "Advanced memory handling tips for serious C++ engineers.",
  },
];

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <div className="p-6 text-red-500">Article not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/articles" className="text-blue-600 underline mb-4 inline-block">← Back to Articles</Link>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700">{article.content}</p>
    </div>
  );
}
