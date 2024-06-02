import React from 'react';
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components/ui';
import { BookmarkIcon } from "@radix-ui/react-icons";
import { ICoursePreview } from "@/interface/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Bookmark } from "@/helpers/bookmark";

export const PreviewCourse = ({ small = false, ...props }: ICoursePreview) => {
  return (
    <div id="course-preview" className="relative w-full cursor-pointer h-full">
      <Link href={`/courses/${props.title}`}>
        <div className="bg-background flex flex-col border border-border/50 h-full rounded-lg shadow hover:shadow-lg duration-300 group">
          <div className="flex flex-col gap-4 items-start">
            <div
              className={cn(
                " w-full aspect-square bg-accent relative rounded-t-lg overflow-hidden",
                small ? "h-36" : "h-56"
              )}
            >
              <Image
                src={props.banner}
                alt={props.title}
                // placeholder='blur'
                height={200}
                width={500}
                className="h-full w-full object-cover group-hover:scale-105 duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className={cn("flex flex-col grow relative", small ? "p-2.5 px-4" : "p-4 gap-2")}>
            <div className="flex items-center gap-2 text-muted-foreground w-full ">
              <Avatar className="h-8 w-8 rounded border-2 border-background ring-1 ring-border">
                <AvatarImage
                  className=" group-hover:scale-110 duration-200 object-cover object-top"
                  src={props.avatar}
                />
                <AvatarFallback>MF</AvatarFallback>
              </Avatar>
              <p className="text-sm leading-tight line-clamp-2">{props.author}</p>
            </div>
            <h2 className={cn("text-lg pt-2 leading-tight line-clamp-2", small && "leading-none")}>
              {props.title}
            </h2>
            <p className={cn("text-sm mt-auto", small && "mt-1.5")}>
              Course Length: {props.duration}
            </p>
            <div className="flex gap-2 items-center">
              <p className="text-xs text-muted-foreground">{props.category}</p>
            </div>
          </div>
        </div>
      </Link>
      <Bookmark className="absolute right-4 bottom-4 flex gap-4 ml-auto" id={props.id} />
    </div>
  );
};
