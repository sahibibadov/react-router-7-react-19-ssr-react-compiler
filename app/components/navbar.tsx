import { Link, NavLink } from "react-router";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { cn } from "~/lib/utils";
import { Container } from "./container";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container asChild>
        <nav>
          <div className="flex w-full items-center justify-between h-16">
            {/* logo */}
            <Link to="/" viewTransition className="font-bold text-2xl">
              Logo
            </Link>

            <div className="flex items-center gap-6">
              {/* Dekstop menu links */}
              <ul className="hidden md:flex gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      prefetch="intent"
                      className={({ isActive }) =>
                        cn(
                          "transition-colors hover:text-foreground/80",
                          isActive ? "text-foreground font-medium" : "text-foreground/60",
                        )
                      }
                      to={link.to}
                      viewTransition
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {/* toggle theme menu and hamburger menu */}
              <div className="flex items-center gap-2">
                <Button size="icon" variant="outline" asChild className="rounded-full">
                  <Link
                    to="https://github.com/sahibibadov/react-router-7-react-19-ssr-react-compiler/tree/main"
                    target="_blank"
                  >
                    <Github />
                  </Link>
                </Button>
                <ModeToggle />

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center rounded-md p-2  md:hidden text-foreground"
                  aria-label="Toggle menu"
                >
                  <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span
                      className={cn(
                        "w-full h-0.5 bg-current transition-transform duration-300",
                        isOpen && "rotate-45 translate-y-[10px]",
                      )}
                    />
                    <span
                      className={cn("w-full h-0.5 bg-current transition-transform duration-300", isOpen && "opacity-0")}
                    />
                    <span
                      className={cn(
                        "w-full h-0.5 bg-current transition-transform duration-300",
                        isOpen && "-rotate-45 -translate-y-2",
                      )}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <div
            className={cn(
              "border-b border-border bg-background md:hidden transition-[max-height,opacity,visibility] duration-300 ease-in-out",

              isOpen ? "max-h-64 opacity-100 visible" : "max-h-0 opacity-0 invisible",
            )}
          >
            <ul className="flex flex-col py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    prefetch="intent"
                    className={({ isActive }) =>
                      cn(
                        "block transition-colors hover:text-foreground/80",
                        isActive ? "text-foreground font-medium" : "text-foreground/60",
                      )
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
      </Container>
    </header>
  );
};

export default Navbar;
