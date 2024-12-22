import { useState, version } from "react";
import type { Route } from "./+types/home";
import Rich from "~/components/rich-components";

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
      <h1 className="text-5xl font-bold text-center mb-3">
        React{version} & React-Router-v7 & SSR rendering & React-Compile
      </h1>
      <button className="px-2 py-1 bg-blue-200 rounded" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      {/* Rich component */}
      <Rich />
    </div>
  );
}
