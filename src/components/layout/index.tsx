import type { ReactNode } from "react";
import BottomTab from "./BottomTab";
import TopNav from "./TopNav";

const Layout = ({ children = null }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-gray-200 shadow-black shadow-3xl">
      <TopNav />
      <section className="m-auto max-w-3xl min-w-3xl flex flex-col items-center justify-center max-h-[calc(100vh-128px)] h-screen bg-gray-100 p-2 top-[4rem] fixed">
        {children}
      </section>
      <BottomTab />
    </main>
  );
};

export default Layout;
