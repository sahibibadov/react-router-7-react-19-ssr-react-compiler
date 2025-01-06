import { Outlet } from "react-router";
import { scan } from "react-scan";
import Navbar from "~/components/navbar";
// react-scan
// if (typeof window !== "undefined") {
//   scan({
//     enabled: true, // react-scan
//     log: false,
//   });
// }
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-2 sm:px-0">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
