// src/pages/TutorialDetail.jsx
import { useParams } from "react-router-dom";

export default function TutorialDetail() {
  const { title } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold capitalize">{decodeURIComponent(title)}</h1>
      <p className="text-gray-700 text-justify">
        Learn more about <strong>{decodeURIComponent(title)}</strong> with examples and key concepts explained in depth.
      </p>
    </div>
  );
}
