import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Comprehensive C++ Programming Resource</h1>
      <p>Dive into a rich collection of tutorials, comprehensive references, insightful articles, and an active forum—everything you need to excel in C++ programming.</p>

      {/* Tutorials, References, Articles */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
        <Link to="/tutorials" className="hover:scale-105 transition">
          <img src="/tst.JPG" alt="Tutorials" className="mx-auto" />
          <h2 className="text-xl font-semibold mt-2">Tutorials</h2>
          <p className="text-sm">Learn the C++ language from its basics up to its most advanced features.</p>
        </Link>

        <Link to="/references" className="hover:scale-105 transition">
          <img src="ref.JPG" alt="References" className="mx-auto" />
          <h2 className="text-xl font-semibold mt-2">References</h2>
          <p className="text-sm">Description of the most important classes, functions and objects of the Standard Language Library.</p>
        </Link>

        <Link to="/articles" className="hover:scale-105 transition">
          <img src="Art.JPG" alt="Articles" className="mx-auto" />
          <h2 className="text-xl font-semibold mt-2">Articles</h2>
          <p className="text-sm">User-contributed articles, organized into categories.xYou can contribute your own articles!</p>
        </Link>
      </div>

      {/* Forum Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Forum</h2>
        <img src="Forun.JPG" alt="Forum" className="mx-auto mb-4" />
        <Link to="/forum" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Join</Link>
      </div>

      {/* Information Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h3 className="font-semibold text-lg">A brief description</h3>
          <p className="mb-2">Some general aspects of the language.</p>

          <h3 className="font-semibold text-lg">History of C++</h3>
          <p className="mb-2">Brief history and development of C++.</p>

          <h3 className="font-semibold text-lg">FAQs</h3>
          <p>A short list of frequently asked questions.</p>
        </div>
        <img src="homedown.JPG" alt="Information" className="mx-auto" />
      </div>

      {/* Discussion Section */}
      <div className="text-center border-t pt-6">
        <h2 className="text-xl font-bold mb-2">Join the discussion and contribute to the forum</h2>
        <div className="flex justify-center gap-4 mt-4">
          <Link to="/login" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Log In</Link>
          <Link to="/signup" className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-100">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
