import { Outlet } from "react-router";
import { scan } from "react-scan";
import { Container } from "~/components/container";
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
      <Container asChild>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default RootLayout;
