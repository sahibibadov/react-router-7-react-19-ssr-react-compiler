import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/root-layouts.tsx", [
    index("routes/home.tsx"),
    route("image", "./routes/image-gallery.tsx"),
    route("image/:id", "./routes/image-detail.tsx"),
    route("server-fetch", "./routes/server-data-fetch.tsx"),
    route("client-fetch", "./routes/client-data-fetch.tsx"),
  ]),
  route("*?", "./routes/not-found.tsx"),
] satisfies RouteConfig;
