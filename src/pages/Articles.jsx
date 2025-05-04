// src/pages/Articles.jsx
import { Link } from "react-router-dom";

export default function Articles() {
  const sidebarTopics = [
    "Algorithms",
    "C++ 11",
    "Graphics and multimedia",
    "How-To",
    "Language Features",
    "Unix/Linux programming",
    "Source Code",
    "Standard Library",
    "Tips and Tricks",
    "Tools and Libraries",
    "Visual C++",
    "Windows API",
  ];

  const articles = [
    {
      id: 1,
      title: "How to avoid bugs using modern C++",
      img: "artbug.JPG",
      author: "PVSCoder",
      categories: "Tips and Tricks, Standard Library, Language Features, How-To, C++11",
      date: "Sep 16, 2016",
      updated: "Sep 16, 2016",
      rating: "★★★★☆ (4.3/5 from 919 votes)",
    },
    {
      id: 2,
      title: "Learning Computer Programming Terminology",
      img: "artlcpt.JPG",
      author: "Sean Alvarez",
      categories: "How-To",
      date: "Aug 25, 2016",
      updated: "Aug 25, 2016",
      rating: "★★★☆☆ (3.7/5 from 456 votes)",
    },
    {
      id: 3,
      title: "C++ class for generating Fibonacci series",
      img: "artfib.JPG",
      author: "mhcrnl",
      categories: "Source Code, C++11",
      date: "Aug 9, 2016",
      updated: "Aug 9, 2016",
      rating: "★★★☆☆ (3.6/5 from 723 votes)",
    },
    {
      id: 4,
      title: "C++ Casting",
      img: "artcast.JPG",
      author: "Uk Marine",
      categories: "Visual C++, Tips and Tricks, Source Code, How-To",
      date: "May 15, 2016",
      updated: "May 16, 2016",
      rating: "★★★★☆ (4.0/5 from 472 votes)",
    },
    {
      id: 5,
      title: "Safe Clearing of Private Data",
      img: "artdata.JPG",
      author: "AndreyKarpov",
      categories: "Tips and Tricks, Language Features, How-To",
      date: "Apr 6, 2016",
      updated: "Apr 6, 2016",
      rating: "★★★★☆ (4.6/5 from 143 votes)",
    },
    {
      id: 6,
      title: "How I Learned A Vital Borland C++ Coding Technique I Couldn't Learn Alone",
      img: "arthow.JPG",
      author: "analyzoh",
      categories: "How-To, Source Code, Tips and Tricks",
      date: "Mar 23, 2016",
      updated: null,
      rating: "No rating available",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Sidebar */}
        <div className="bg-gray-100 p-4 rounded">
          <ul className="space-y-2 font-medium text-blue-800">
            {sidebarTopics.map((topic, index) => (
              <li key={index}>
                <Link to={`/articles/topic/${encodeURIComponent(topic.toLowerCase().replace(/\s+/g, "-"))}`} className="hover:underline">
                  {topic}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-4">Articles</h1>
          <p className="text-gray-700 mb-6 max-w-2xl">
            The Articles section on cplusplus.com offers a diverse collection of user-contributed articles that delve into various aspects of C++ programming. These articles are organized into categories. Whether you're a beginner seeking tutorials or an experienced developer looking for advanced techniques, this repository provides valuable insights and practical examples to enhance your C++ programming skills.
          </p>

          {/* Related Products Section */}
          <h2 className="text-2xl font-semibold mb-4">Related products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item) => (
              <Link
                to={`/articles/${item.id}`}
                key={item.id}
                className="border rounded p-4 hover:shadow-md transition block"
              >
                <img src={item.img} alt={item.title} className="w-full h-50 object-cover mb-3" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">Author: {item.author}</p>
                <p className="text-sm text-gray-500">Categories: {item.categories}</p>
                <p className="text-sm text-gray-500">
                  Date: {item.date} {item.updated && `(Updated: ${item.updated})`}
                </p>
                <p className="text-sm text-gray-500">Rating: {item.rating}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
