import { Link, NavLink } from "react-router";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Image-Gallery",
    to: "/image",
  },
  {
    name: "Server-Fetch",
    to: "/server-fetch",
  },
  {
    name: "Client-Fetch",
    to: "/client-fetch",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-2 sm:px-0">
        <div className="flex items-center justify-between h-16">
          <Link to="/" viewTransition className="text-2xl font-bold">
            Logo
          </Link>

          {/* Hamburger button */}
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 md:hidden" aria-label="Toggle menu">
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive ? "text-gray-700 font-bold" : "text-gray-400 hover:text-gray-600"
                  }
                  to={link.to}
                  viewTransition
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out  ${
            isOpen ? "max-h-64 opacity-100 visible" : "max-h-0 opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col px-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive ? "block py-2 text-gray-700 font-bold" : "block py-2 text-gray-400 hover:text-gray-600"
                  }
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  viewTransition
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
