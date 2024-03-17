import { Filter } from "@/components/screens/search/sections/filter";
import { MobileFilter } from "@/components/screens/search/sections/mobile-filter";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full w-full py-20 lg:py-24 relative">
      <div className="container h-full">
        <div className="flex flex-col lg:flex-row gap-5 h-full">
          <Filter />
          <MobileFilter />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
