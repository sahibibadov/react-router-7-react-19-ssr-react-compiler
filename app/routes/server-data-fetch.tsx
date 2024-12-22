import type { Route } from "./+types/server-data-fetch";
// server fetch
export async function loader({ context }: Route.LoaderArgs) {
  return {
    message: "Hello from the server!",
    posts: await context.getPostsServer(),
    VALUE_FROM_VERCEL: context.VALUE_FROM_VERCEL,
  };
}

const ServerFetch = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;
  return (
    <div className="border border-gray-200 p-3">
      <h3 className="text-3xl font-bold">Server fetch </h3>
      {posts.map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default ServerFetch;
