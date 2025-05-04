// src/pages/DiscussionDetail.jsx
import { useParams } from "react-router-dom";

export default function DiscussionDetail() {
  const { topicSlug } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 capitalize">Discussion: {topicSlug.replace("-", " ")}</h1>
      <p className="text-gray-700 mb-6">
        This is a placeholder for the discussion thread on <code className="bg-gray-200 px-1 rounded">{topicSlug}</code>. In a real app, this page would contain posts, replies, and community interaction.
      </p>
      <div className="bg-gray-100 p-4 rounded">
        <p className="italic">📝 Coming soon: threaded discussions, post replies, upvotes, and more!</p>
      </div>
    </div>
  );
}
