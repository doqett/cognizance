import { Courses } from "@/components/screens";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Courses",
};

const Page = () => {
  return <Courses />;
};

export default Page;
