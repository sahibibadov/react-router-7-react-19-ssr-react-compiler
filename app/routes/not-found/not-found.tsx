import { Link } from "react-router";
import { Button } from "~/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">404 Not Found</h1>
      <Button asChild>
        <Link to="/" viewTransition>
          Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
