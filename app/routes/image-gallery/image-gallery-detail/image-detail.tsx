import { Link } from "react-router";
import { images } from "../image-gallery";
import type { Route } from "./+types/image-detail";

export default function ImageDetailsRoute({ params }: Route.ComponentProps) {
  return (
    <div className="mt-5 space-y-3">
      <Link to="/image" viewTransition className="text-blue-500 hover:underline">
        Back
      </Link>
      <h2
        className="text-3xl font-bold"
        style={{
          viewTransitionName: "image-title",
        }}
      >
        Image Number {params.id}
      </h2>
      <img
        style={{
          viewTransitionName: "image-expand",
        }}
        src={images[Number(params.id)]}
      />
    </div>
  );
}
