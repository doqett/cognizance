import { Filter } from "@/components/screens/courses/sections/filter";
import { MobileFilter } from "@/components/screens/courses/sections/mobile-filter";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen flex flex-col w-full py-20 lg:py-24 relative">
      <div className="container h-full flex flex-col grow">{children}</div>
    </div>
  );
};

export default Layout;
