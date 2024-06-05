import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const EnrollEmpty = () => {
  return (
    <section className="h-full w-full grow flex flex-col justify-center items-center gap-2">
      <Image src={"/images/empty.svg"} alt="" width={200} height={200} />
      <h1 className="text-xl font-semibold">You haven&apos;t enrolled in any courses yet</h1>
      <Link href="/courses" className={cn(buttonVariants({ variant: "outline" }), "gap-4 px-8")}>
        Explore Courses
        <ArrowRightIcon />
      </Link>
    </section>
  );
};
