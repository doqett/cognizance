"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  NavLink,
} from "@/components/ui";
import { usePathname } from "next/navigation";
import { footerItems } from "@/assets/data/constants";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function SupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const breadcrumbitem = footerItems.legal.find((item) => item.path === pathname);
  return (
    <div className=" w-full flex py-20 md:py-24 container relative">
      <div className="w-60 h-fit p-5 hidden md:block sticky top-16">
        <ul className="flex flex-col items-start gap-4">
          {footerItems.legal.map((item, index) => {
            return (
              <li key={`${index}`}>
                <NavLink href={item.path} exact className="transition duration-300 font-medium">
                  {item.name}
                  {item.new ? (
                    <span className="ml-2 font-medium text-xs leading-5 rounded-full text-new px-2 py-0.5 ">
                      New
                    </span>
                  ) : null}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full md:w-[calc(100%-15rem)]">
        <div className="w-full py-5 sticky top-16 bg-background flex gap-4">
          <Drawer>
            <DrawerTrigger className="md:hidden">
              <HamburgerMenuIcon className="h-5 w-5" />
            </DrawerTrigger>
            <DrawerContent>
              <div className="py-20 px-8">
                <ul className="flex flex-col items-start gap-4">
                  {footerItems.legal.map((item, index) => {
                    return (
                      <li key={`${index}`}>
                        <DrawerClose asChild>
                          <NavLink
                            href={item.path}
                            exact
                            className="transition duration-300 font-medium"
                          >
                            {item.name}
                            {item.new ? (
                              <span className="ml-2 font-medium text-xs leading-5 rounded-full text-new px-2 py-0.5 ">
                                New
                              </span>
                            ) : null}
                          </NavLink>
                        </DrawerClose>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </DrawerContent>
          </Drawer>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="font-semibold">{breadcrumbitem?.name}</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {children}
      </div>
    </div>
  );
}
