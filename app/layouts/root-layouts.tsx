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
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
