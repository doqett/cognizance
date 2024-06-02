import { TCategoryProps } from "@/interface/types";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

export function CategoryItem(props: TCategoryProps) {
  return (
    <div className="flex cursor-pointer gap-2 bg-background border border-border/50 shadow hover:shadow-lg duration-300 p-1 rounded-lg items-center group">
      <div className="h-14 border border-border/50 w-14 rounded-md overflow-hidden">
        <Image
          src={props.image}
          alt={props.title}
          width={60}
          height={60}
          className="object-cover h-full w-full group-hover:scale-105 duration-300"
        />
      </div>
      <div className="pr-4">
        <p className="text-base font-medium">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.courses} courses</p>
      </div>
      <ArrowTopRightIcon className="size-6 ml-auto group-hover:text-primary duration-300 mr-2 text-muted-foreground" />
    </div>
  );
}
