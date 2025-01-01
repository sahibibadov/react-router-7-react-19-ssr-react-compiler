import { Button } from "./ui/button";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
      <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
      <p className="text-gray-600">{post.body}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">Post ID: {post.id}</span>
        <Button variant="link">Read More</Button>
      </div>
    </div>
  );
};
