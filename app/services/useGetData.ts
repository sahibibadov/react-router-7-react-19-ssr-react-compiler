import { useQuery } from "@tanstack/react-query";
export const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export const useGetData = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getData,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
  });
};
