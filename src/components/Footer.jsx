// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">cplusplus.com</h2>
          <a
            href="https://legacy.cplusplus.com/"
            className="text-sm text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`{Legacy version}`}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">C++</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link to="/tutorials">Tutorials</Link></li>
            <li><Link to="/reference">Reference</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/forum">Forum</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Site</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link to="/">Home page</Link></li>
            <li>
              <a
                href="https://legacy.cplusplus.com/privacy.do"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                href="https://cplusplus.com/contact.do?referrer=%2F"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link to="/site">Site information</Link></li>
            <li><Link to="/versions">C++ Versions</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
        <p>© cplusplus.com, 2000–2023 — All rights reserved — v3.3.4s</p>
      </div>
    </footer>
  );
}
