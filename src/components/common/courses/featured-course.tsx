import React from "react";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/components/ui";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { ICoursePreview } from "@/interface/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Bookmark } from "@/helpers/bookmark";

export const FeaturedCourse = ({ ...props }: ICoursePreview) => {
  return (
    <div id="course-preview" className="relative w-full cursor-pointer ">
      <Link href={`/courses/${props.title}`}>
        <div className="bg-background flex p-1 border border-border/50 h-full rounded-lg shadow hover:shadow-lg duration-300 group">
          <div className=" flex flex-col gap-4 items-start">
            <div
              className={cn(
                "w-full h-24 aspect-square bg-accent relative rounded-lg overflow-hidden"
              )}
            >
              <Image
                src={props.banner}
                alt={props.title}
                // placeholder='blur'
                height={200}
                width={200}
                className="h-full w-full object-cover group-hover:scale-105 duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className={cn("p-2 space-y-0.5")}>
            <h2 className={cn("text- leading-none line-clamp-2")}>{props.title}</h2>
            <p className={cn("text-sm mt-auto text-muted-foreground")}>
              Course Length: {props.duration}
            </p>
            <p className="text-xs text-muted-foreground">{props.category}</p>
          </div>
        </div>
      </Link>
      <Bookmark className="absolute right-2 bottom-2 flex gap-4 ml-auto" id={props.id} />
    </div>
  );
};
