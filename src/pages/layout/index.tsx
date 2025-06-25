import type { ReactNode } from "react";
import BottomTab from "./components/BottomTab";
import TopNav from "./components/TopNav";

const Layout = ({ children = null }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-gray-200 shadow-black shadow-3xl">
      <TopNav />
      <section className="m-auto max-w-3xl min-w-3xl flex flex-col max-h-[calc(100vh-128px)] h-screen bg-gray-100 p-2 top-[4rem] fixed gap-2">
        {children}
      </section>
      <BottomTab />
    </main>
  );
};

export default Layout;
