import { NavLink } from "react-router";
const navLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Image Gallery",
    to: "/image",
  },
  {
    name: "Server Fetch",
    to: "/server-fetch",
  },
  {
    name: "Client Fetch",
    to: "/client-fetch",
  },
];
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center h-16 p-3 bg-white border-b">
      <nav className="container mx-auto">
        <ul className="flex gap-5">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                prefetch="intent"
                className={({ isActive }) => (isActive ? "text-gray-700 font-bold" : "text-gray-400")}
                to={link.to}
                viewTransition
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
