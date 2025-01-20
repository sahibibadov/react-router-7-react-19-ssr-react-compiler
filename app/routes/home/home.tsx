import { useState, version } from "react";
import type { Route } from "./+types/home";
import Rich from "~/components/rich-components";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "React-Router-v7 + SSR + React19 + React-Compiler" },
  ];
}

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-balance sm:text-7xl font-bold text-center mb-10 max-w-4xl mx-auto bg-gradient-to-b from-primary to-primary/45 text-transparent bg-clip-text">
        React{version} & React-Router-v7 & SSR rendering & React-Compiler
      </h1>

      <pre className="mb-2 border rounded-md p-2 bg-secondary text-secondary-foreground text-sm sm:text-base">
        {"react scan enable => root-layout.tsx"}
        <br />
        <code className="text-muted-foreground">
          {`if (typeof window !== "undefined") {
  scan({
    enabled: true, // react-scan
    log: false,
  });
}`}
        </code>
      </pre>
      <Button
        variant="outline"
        className="mx-auto flex my-6  active:scale-95 transition-transform"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </Button>
      {/* Rich component */}
      <Rich />
    </div>
  );
}
