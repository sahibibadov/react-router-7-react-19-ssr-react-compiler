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
      <h1 className="text-5xl font-bold text-center mb-10">
        React{version} & React-Router-v7 & SSR rendering & React-Compile
      </h1>
      <Button className="mx-auto flex" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </Button>
      <pre>
        {"react scan enable => root-layout.tsx"}
        <br />
        <code>
          {`if (typeof window !== "undefined") {
  scan({
    enabled: true, // react-scan
    log: false,
  });
}`}
        </code>
      </pre>
      {/* Rich component */}
      <Rich />
    </div>
  );
}
