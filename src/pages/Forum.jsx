import { Link } from "react-router-dom";

const forumTopics = [
  {
    slug: "unix-linux",
    title: "UNIX/Linux Programming",
    desc: "Programming C++ for UNIX and Linux.",
    latest: "Calling assembly code from C++",
    lastPost: "Oct 14, 2024, at 12:58 AM by highwayman",
    image: "linuxforum.JPG"
  },
  {
    slug: "jobs",
    title: "Jobs",
    desc: "Job offers for C++ programmers.",
    latest: "Jobs!",
    lastPost: "Apr 18, 2024, at 8:09 PM by deleted account xyzzy",
    image: "jobsforum.JPG"
  }
];


const subForumTopics = [
  {
    slug: "beginners",
    title: "Beginners",
    desc: "C++ programming for beginners.",
    latest: "C++ and the Government",
    lastPost: "Feb 15, 2025, at 8:09 AM by jsmith"
  },
  {
    slug: "windows-programming",
    title: "Windows Programming",
    desc: "MFC, ATL, C++/CLI, .NET",
    latest: "Versus backslash and Ctrl+Enter",
    lastPost: "Feb 12, 2025, at 8:56 AM by SimpleCoder"
  },
  {
    slug: "general",
    title: "General C++ Programming",
    desc: "Anything about programming in C++.",
    latest: "Do structs come with or without bitstream?",
    lastPost: "Feb 11, 2025, at 8:50 AM by jsmith"
  },
  {
    slug: "lounge",
    title: "Lounge",
    desc: "Non-programming/general site discussions.",
    latest: "Thanks to Server Timmy",
    lastPost: "Feb 10, 2025, at 8:34 AM by TheDeskMan"
  }
];

export default function Forum() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero section with background image */}
      <section
        className="relative text-center text-white py-20 mb-16 rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url('/forumbg.JPG')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold mb-4 drop-shadow-md">Forum</h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            The cplusplus.com forum is a community-driven platform for C++ programmers to ask questions, share knowledge, and discuss various topics related to C++ development.
          </p>
          <Link to="/forum/unix-linux">
            <button className="bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-200 transition">
              Join
            </button>
          </Link>
        </div>
      </section>

      {/* Main topics */}
      <div className="space-y-16">
  {forumTopics.map((topic, index) => (
    <div
      key={index}
      className={`flex flex-col md:flex-row ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      } items-center gap-10`}
    >
      {/* Image Section */}
      <img
        src={topic.image}
        alt={topic.title}
        className="w-full md:w-1/2 h-64 object-contain hover:scale-105 transition-transform duration-300"
      />

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{topic.title}</h2>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Description:</span> {topic.desc}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Latest Topic:</span> "{topic.latest}"
              </p>
              <p className="text-gray-600 mb-4">{topic.lastPost}</p>
              <Link to={`/forum/${topic.slug}`}>
                <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
                  Join Discussion
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>


      {/* Subforum topics */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6">Forum Topics</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {subForumTopics.map((topic, idx) => (
            <div
              key={idx}
              className="p-5 border rounded-xl bg-white hover:shadow-md transition"
            >
              <Link to={`/forum/${topic.slug}`}>
                <h4 className="text-lg font-semibold text-blue-700 mb-1">
                  {topic.title}
                </h4>
                <p className="text-sm text-gray-600">{topic.desc}</p>
                <p className="text-sm italic mt-1 text-gray-800">
                  Latest: {topic.latest}
                </p>
                <p className="text-sm text-gray-500">{topic.lastPost}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
