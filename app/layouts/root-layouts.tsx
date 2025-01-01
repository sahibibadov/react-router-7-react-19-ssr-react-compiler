import { Outlet } from "react-router";
import { scan } from "react-scan";
import Navbar from "~/components/navbar";
import Provider from "~/components/provider";
// react-scan
// if (typeof window !== "undefined") {
//   scan({
//     enabled: true, // react-scan
//     log: false,
//   });
// }
const RootLayout = () => {
  return (
    <Provider>
      <Navbar />
      <main className="container mx-auto px-2 sm:px-0">
        <Outlet />
      </main>
    </Provider>
  );
};

export default RootLayout;
