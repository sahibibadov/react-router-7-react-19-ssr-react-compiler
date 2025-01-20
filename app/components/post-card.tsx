import { Button } from "./ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./ui/card";

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
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl truncate">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">{post.body}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <CardDescription>Post ID: {post.id}</CardDescription>
          <Button variant="link">Read More</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
