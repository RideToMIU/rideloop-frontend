import { useEffect, useState, type ReactNode } from "react";
import Layout from "./components/layout";

function App() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const searchParams: URLSearchParams = new URLSearchParams(
      window.location.search
    );
    const page = searchParams.get("page") || "home";
    if (page !== "home") setActive(page);
  }, []);

  const pages: { [key: string]: ReactNode } = {
    home: <HomePage />,
    history: <RideHistory />,
    availableRides: <RideOffers />,
    profile: <Profile />,
  };
  return <Layout>{pages[active]}</Layout>;
}

export default App;

const HomePage = () => <div>Home Page</div>;
const RideHistory = () => (
  <section className="flex flex-col items-center justify-center h-[calc( 100vh - 4rem )]">
    <div>RideHistory</div>
  </section>
);
const RideOffers = () => (
  <section className="flex flex-col items-center justify-center h-[calc( 100vh - 4rem )]">
    <div>Ride Offers</div>
  </section>
);
const Profile = () => (
  <section className="flex flex-col items-center justify-center h-[calc( 100vh - 4rem )]">
    <div>Profile</div>
  </section>
);
