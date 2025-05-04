// src/pages/Tutorials.jsx
import { Link } from "react-router-dom";

export default function Tutorials() {
  const topics = [
    { title: "ASCII Code", img: "tutasci.JPG" },
    { title: "Numerical bases", img: "tutbool.JPG" },
    { title: "Boolean operators", img: "tutbooltrue.JPG" }
  ];

    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-2">C++ tutorials</h1>
        <p className="text-gray-700 mb-6 max-w-3xl">
          The C++ Language Tutorial on cppplusplus.com offers a comprehensive guide for both beginners and experienced programmers aiming to enhance their understanding of C++.
        </p>
  
        {/* Image of code block or IDE */}
        <div className="mb-8">
          <img
            src="tut1.JPG"
            alt="Code example"
            className="w-full rounded shadow"
          />
        </div>
  
        {/* Main tutorial description text */}
        <div className="text-gray-800 space-y-4 text-justify">
          <p>
            The tutorial begins with an introduction to compilers, providing foundational knowledge essential for writing and executing C++ programs. It then delves into the basics of C++, covering topics such as program structure, variables and data types, constants, operators, and basic input/output operations. Each section is designed with a practical orientation, featuring example programs that allow learners to immediately apply and practice the concepts discussed.
          </p>
          <p>
            As learners progress, the tutorial explores more advanced aspects of C++ programming. This includes detailed discussions on control structures, functions, function overloading, templates, and logic structures. The guide also addresses compound data types like arrays, structures, and classes, along with dynamic memory management and user-defined data structures. These topics are crucial for building a deeper understanding of how to manage and organize data efficiently.
          </p>
          <p>
            Further, the tutorial provides an in-depth look at object-oriented programming principles in C++. It covers class definitions, special member functions, inheritance, polymorphism, and overriding. Additional sections focus on type conversions, templates, file handling, and pointers. The tutorial ends with a comprehensive overview of the C++ Standard Library, offering insights into commonly used functions and headers.
          </p>
          <p>
            With a structured approach, this resource serves as an essential reference for beginners and advanced C++ programmers alike.
          </p>
        </div>
  
        {/* Related articles/posts */}
        
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related articles or posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((item, index) => (
            <Link to={`/tutorials/${encodeURIComponent(item.title)}`} key={index} className="text-center hover:underline">
              <img src={item.img} alt={item.title} className="mx-auto" />
              <p className="mt-2">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}