import { SupportLayout } from "@/components/screens/support";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SupportLayout>{children}</SupportLayout>;
}
