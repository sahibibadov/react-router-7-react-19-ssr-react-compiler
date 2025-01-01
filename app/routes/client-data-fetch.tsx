import { Button } from "~/components/ui/button";
import type { Route } from "./+types/client-data-fetch";
import { useGetData } from "~/services/useGetData";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Client Data Fetch" },
    { name: "description", content: "React-Router-v7 + SSR + React19 + React-Query" },
  ];
}
const PostSkeleton = () => (
  <div className="bg-white border rounded-lg shadow-md p-4 animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <div className="h-4 bg-gray-200 rounded w-20"></div>
      <div className="h-9 bg-gray-200 rounded w-24"></div>
    </div>
  </div>
);

const ClientFetch = () => {
  const { data, isLoading, error } = useGetData();

  if (isLoading) {
    return (
      <div className="mt-10">
        <h3 className="text-3xl font-bold mb-5">Client fetch</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(9)].map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-10">
      <h3 className="text-3xl font-bold mb-5">Client fetch</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((post: any) => (
          <div key={post.id} className="bg-white border rounded-lg shadow-md p-4">
            <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
            <p className="text-gray-600">{post.body}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Post ID: {post.id}</span>
              <Button>Read More</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientFetch;
