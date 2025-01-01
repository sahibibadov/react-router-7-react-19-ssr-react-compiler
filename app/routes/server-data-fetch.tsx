import { getData } from "~/services/useGetData";
import type { Route } from "./+types/server-data-fetch";
// server fetch
export async function loader({ context }: Route.LoaderArgs) {
  return {
    message: "Hello from the server!",
    posts: await context.getPostsServer(),
    VALUE_FROM_VERCEL: context.VALUE_FROM_VERCEL,
  };
}

// client fetch
// export async function clientLoader() {
//   const posts = await getData();
//   return { posts };
// }
const ServerFetch = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;

  return (
    <div className="mt-10">
      <h3 className="text-3xl font-bold mb-4 text-gray-800">Server fetch </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: any) => (
          <div key={post.id} className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <p className="text-gray-700">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerFetch;
