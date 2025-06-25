import RideComponent from "components/common/RideComponent";
import { useEffect, useState, type ReactNode } from "react";
import Card from "./components/common/Card";
import Form from "./components/common/forms/Form";
import InputField from "./components/common/forms/InputField";
import Layout from "./pages/layout";

const App = () => {
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
};

export default App;

const HomePage = () => {
  return (
    <span className="flex h-full flex-col relative w-screen max-w-full m-auto p-2 gap-4">
      <HeroComponent />

      <ul className="list bg-base-100 rounded-box shadow-md overflow-y-auto">
        <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
          Upcoming Rides
        </li>

        <RideComponent />
        <RideComponent />
        <RideComponent />
        <RideComponent />
        <RideComponent />
        <RideComponent />
        <RideComponent />
        <RideComponent />
      </ul>
    </span>
  );
};

const HomePage1 = () => {
  const handleSubmit = (data: any) => console.log("Submitting:", data);
  return (
    <div>
      <h3>Home Page</h3>
      <Form onSubmit={handleSubmit}>
        {(errors) => {
          return (
            <>
              <InputField
                id="destination"
                label="Destination"
                required
                customInputClass="w-100"
                error={errors?.destination}
                prefixIcon={
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                }
              />
              <InputField
                id="datetime"
                label="Datetime"
                type="datetime-local"
                required
                customInputClass="w-100"
                defaultValue={new Date().toISOString().slice(0, 16)}
                error={errors?.lastName}
              />

              <button className="btn btn-success mt-2" type="submit">
                Submit
              </button>
            </>
          );
        }}
      </Form>
    </div>
  );
};

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

const HeroComponent = () => {
  const handleSubmit = (data: any) => console.log("Submitting:", data);

  return (
    <Card customClass="shadow-2xl">
      <Form onSubmit={handleSubmit}>
        {(errors) => {
          return (
            <>
              <span className="flex gap-2 w-full">
                <InputField
                  id="origin"
                  //   label="Origin"
                  required
                  placeholder="Pick up"
                  containerClass="w-6/12"
                  customInputClass="w-full"
                  error={errors?.origin}
                  prefixIcon={
                    <svg
                      viewBox="0 0 16 16"
                      width={18}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M16 1L15 0L0 6V8L7 9L8 16H10L16 1Z"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  }
                />

                <InputField
                  id="destination"
                  //   label="Destination"
                  placeholder="Drop off"
                  containerClass="w-6/12"
                  customInputClass="w-full"
                  required
                  error={errors?.destination}
                  prefixIcon={
                    <svg
                      fill="#000000"
                      width={18}
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>location-arrow</title>
                        <path d="M30.531 1.47c-0.136-0.136-0.324-0.219-0.531-0.219-0.107 0-0.208 0.022-0.3 0.062l0.005-0.002-28.001 12c-0.269 0.118-0.454 0.382-0.454 0.689 0 0.377 0.278 0.688 0.639 0.742l0.004 0.001 13.443 1.921 1.921 13.442c0.048 0.333 0.31 0.593 0.64 0.638l0.004 0c0.030 0.004 0.064 0.006 0.099 0.006h0c0 0 0 0 0 0 0.308 0 0.572-0.185 0.687-0.45l0.002-0.005 12-27.999c0.039-0.087 0.061-0.189 0.061-0.296 0-0.207-0.084-0.394-0.219-0.53v0zM18.363 27.246l-1.621-11.353c-0.048-0.33-0.306-0.588-0.632-0.635l-0.004-0-11.352-1.622 23.818-10.208z"></path>
                      </g>
                    </svg>
                  }
                />
              </span>
              <InputField
                id="datetime"
                placeholder="Datetime"
                type="datetime-local"
                required
                customInputClass="w-full"
                defaultValue={new Date().toISOString().slice(0, 16)}
                error={errors?.lastName}
              />

              <button className="btn btn-success mt-2 w-full" type="submit">
                Search
              </button>
            </>
          );
        }}
      </Form>
    </Card>
  );
};
