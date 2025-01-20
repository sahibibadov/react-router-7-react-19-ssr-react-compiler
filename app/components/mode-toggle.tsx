import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useTheme } from "~/providers/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleThem = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button onClick={toggleThem} aria-label="Toggle Theme" size="icon" variant="outline" className="rounded-full">
      <Sun className="absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100 " />
      <Moon className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <span className="sr-only">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
    </Button>
  );
}
