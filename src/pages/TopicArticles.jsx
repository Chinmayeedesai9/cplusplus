// src/pages/TopicArticles.jsx
import { useParams } from "react-router-dom";

export default function TopicArticles() {
  const { topic } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 capitalize">{decodeURIComponent(topic)}</h1>
      <p className="text-gray-700 text-justify">
        This is a detailed article about <strong>{decodeURIComponent(topic)}</strong>. Here, you'll find insights, code samples, and best practices related to this topic.
      </p>
    </div>
  );
}
