// src/pages/References.jsx
import { Link } from "react-router-dom";

const references = [
  { name: "<cassert>", desc: "C Diagnostics Library", slug: "cassert" },
  { name: "<cctype>", desc: "Character handling functions", slug: "cctype" },
  { name: "<cerrno>", desc: "C Errors", slug: "cerrno" },
  { name: "<cfenv>", desc: "Floating-point environment", slug: "cfenv" },
  { name: "<cfloat>", desc: "Characteristics of floating-point types", slug: "cfloat" },
  { name: "<cinttypes>", desc: "C integer types", slug: "cinttypes" },
  { name: "<ciso646>", desc: "ISO 646 Alternative operator spellings", slug: "ciso646" },
  { name: "<climits>", desc: "Sizes of integral types", slug: "climits" },
  { name: "<clocale>", desc: "C localization library", slug: "clocale" },
  { name: "<cmath>", desc: "C numerics library", slug: "cmath" },
  { name: "<csetjmp>", desc: "Non local jumps", slug: "csetjmp" },
  { name: "<csignal>", desc: "C library to handle signals", slug: "csignal" },
  { name: "<cstdarg>", desc: "Variable arguments handling", slug: "cstdarg" },
  { name: "<cstdbool>", desc: "Boolean type", slug: "cstdbool" },
  { name: "<cstddef>", desc: "C-Standard definitions", slug: "cstddef" },
  { name: "<cstdint>", desc: "Integer types", slug: "cstdint" },
  { name: "<cstdio>", desc: "Cilibrary to perform Input/Output operations", slug: "cstdio" },
  { name: "<cstdlib>", desc: "C Standard General Utilities Library", slug: "cstdlib" },
  { name: "<cstring>", desc: "CStrings", slug: "cstring" },
  { name: "<ctgmath>", desc: "Type-generic math", slug: "ctgmath" },
  { name: "<ctime>", desc: "CTime Library", slug: "ctime" },
  { name: "<cuchar>", desc: "Unicode characters", slug: "cuchar" },
  { name: "<cwchar>", desc: "Wide characters", slug: "cwchar" },
  { name: "<cwctype>", desc: "Wide character type", slug: "cwctype" },
];

export default function References() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Standard C++ Library reference</h1>

      <table className="w-full border text-sm mb-10">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-2 border">Header</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          {references.map((ref, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              <td className="p-2 border text-blue-600 underline">
                <Link to={`/reference/${ref.slug}`}>{ref.name}</Link>
              </td>
              <td className="p-2 border">{ref.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <img src="ref1.JPG" className="mx-auto mb-2" />
          <h3 className="font-semibold">Containers</h3>
          <p className="text-sm text-gray-600">A container is a holder object that stores a collection of other objects (its elements). They are implemented as class templates, which allows a great flexibility in the types supported as elements.</p>
        </div>
        <div>
          <img src="ref2.JPG" className="mx-auto mb-2" />
          <h3 className="font-semibold">Input - Output</h3>
          <p className="text-sm text-gray-600">The iostream library is an object-oriented library that provides input and output functionality using streams.</p>
        </div>
        <div>
          <img src="ref3.JPG" className="mx-auto mb-2" />
          <h3 className="font-semibold">Multi-threading</h3>
          <p className="text-sm text-gray-600">Resources on multi-threading in C++, focusing on support for atomic operations and thread management.</p>
        </div>
      </div>
    </div>
  );
}
