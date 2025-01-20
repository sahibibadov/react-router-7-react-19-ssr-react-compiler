import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/root-layouts.tsx", [
    index("routes/home/home.tsx"),
    route("image", "./routes/image-gallery/image-gallery.tsx"),
    route("image/:id", "./routes/image-gallery/image-gallery-detail/image-detail.tsx"),
    route("server-fetch", "./routes/server-data/server-data-fetch.tsx"),
    route("client-fetch", "./routes/client-data/client-data-fetch.tsx"),
  ]),
  route("*?", "./routes/not-found/not-found.tsx"),
] satisfies RouteConfig;
