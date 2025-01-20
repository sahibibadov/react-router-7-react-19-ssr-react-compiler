import type { Route } from "./+types/client-data-fetch";
import { useGetData } from "~/services/useGetData";
import { Skeleton } from "~/components/ui/skeleton";
import { Card } from "~/components/ui/card";
import { PostCard } from "~/components/post-card";
import { getData } from "~/services/useGetData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Client Data Fetch" },
    { name: "description", content: "React-Router-v7 + SSR + React19 + React-Query" },
  ];
}

// client fetch
// export async function clientLoader() {
//   const posts = await getData();
//   return { posts };
// }

// client loading
// export function HydrateFallback() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
//       {[...Array(9)].map((_, index) => (
//         <PostSkeleton key={index} />
//       ))}
//     </div>
//   );
// }

const ClientFetch = () => {
  //tanstack-query
  const { data, isLoading, error } = useGetData();

  return (
    <div className="mt-10">
      <h3 className="text-3xl font-bold mb-4">Client fetch</h3>
      {error && (
        <div>
          Error: {error.message} <br />
          <pre>
            <code>{JSON.stringify(error, null, 2)}</code>
          </pre>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading
          ? [...Array(9)].map((_, index) => <PostSkeleton key={index} />)
          : data?.map((post: any) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default ClientFetch;

const PostSkeleton = () => (
  <Card className="p-4">
    <Skeleton className="h-6 w-3/4 mb-2" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
    <div className="mt-4 flex justify-between items-center">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-9 w-24" />
    </div>
  </Card>
);
