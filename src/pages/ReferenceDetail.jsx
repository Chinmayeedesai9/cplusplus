// src/pages/ReferenceDetail.jsx
import { useParams } from "react-router-dom";

export default function ReferenceDetail() {
  const { slug } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Reference: {`<${slug}>`}</h1>
      <p className="text-gray-700 text-lg">
        This is a placeholder page for the C++ standard library header <code className="bg-gray-100 px-1 rounded">{`<${slug}>`}</code>.
      </p>
      <p className="mt-4 text-gray-600">
        In future, this page will contain details about the header file, its functions, types, and usage examples.
      </p>
    </div>
  );
}
