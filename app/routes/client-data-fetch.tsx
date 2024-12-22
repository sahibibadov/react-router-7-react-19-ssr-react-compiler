import type { Route } from "./+types/client-data-fetch";

// client fetch
export async function clientLoader() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const product = await res.json();
  return product;
}

const ClientFetch = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div className="border border-gray-200 p-3">
      <h3 className="text-3xl font-bold">Client fetch</h3>
      {loaderData.map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default ClientFetch;
