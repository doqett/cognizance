import { Menu } from "@/components/screens";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full w-full flex py-24 container">
      <div className="w-60 min-h-full p-5 hidden md:block">
        <Menu />
      </div>
      <div className="w-full md:w-[calc(100%-15rem)] py-5">{children}</div>
    </div>
  );
}
