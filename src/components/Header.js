import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
      <header className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-2xl tracking-tight">Daming Wang | Software Engineer</Link>
          <nav className="flex gap-2.5 md:gap-3 text-sm md:text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-2.5 py-1.5 rounded-md transition ${isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-2.5 py-1.5 rounded-md transition ${isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              About
            </NavLink>
            <a
              href="https://github.com/dwang917"
              className="px-2.5 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/daming-wang-0a9a8b1bb/"
              className="px-2.5 py-1.5 rounded-md text-gray-700 hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-2.5 py-1.5 rounded-md transition ${isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
    );
}
  
export default Header;
  