import { Link, NavLink } from "react-router";
import type { Route } from "./+types/image-gallery";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Image Gallery" }, { name: "description", content: "Image Gallery" }];
}

export const images = [
  "https://remix.run/blog-images/headers/the-future-is-now.jpg",
  "https://remix.run/blog-images/headers/waterfall.jpg",
  "https://remix.run/blog-images/headers/webpack.png",
];

export default function ImageGalleryRoute() {
  return (
    <div className="mt-5">
      <h1 className="mb-5 text-3xl font-bold">Image List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((src, idx) => (
          <NavLink
            key={idx}
            to={`/image/${idx}`}
            viewTransition
            className="border rounded aspect-video hover:shadow-md"
          >
            {({ isTransitioning }) => (
              <>
                <h4
                  className="p-3 text-xl font-bold "
                  style={{
                    viewTransitionName: isTransitioning ? "image-title" : "none",
                  }}
                >
                  Image Number {idx}
                </h4>
                <img
                  src={src}
                  loading="lazy"
                  className="block object-cover w-full h-full max-w-full"
                  style={{
                    viewTransitionName: isTransitioning ? "image-expand" : "none",
                  }}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
