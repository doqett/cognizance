import { Avatar, AvatarFallback, AvatarImage, Progress } from "@/components/ui";
import { ICoursePreview } from "@/interface/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const EnrolledCard = ({ ...props }: ICoursePreview) => {
  return (
    <div className="rounded-lg relative w-full cursor-pointer h-full">
      <Link href={`/courses/e/${props.title}`}>
        <div className="bg-background flex flex-col border border-border/50 h-full rounded-lg shadow hover:shadow-lg duration-300 group">
          <div className="flex flex-col gap-4 items-start">
            <div
              className={cn(
                " w-full h-40 aspect-square bg-accent relative rounded-t-lg overflow-hidden"
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
          <div className={cn("flex flex-col grow relative p-2.5 px-4 md:p-4 gap-1")}>
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
            <h2 className={cn("text-lg pt-2 leading-none md:leading-tight line-clamp-2")}>
              {props.title}
            </h2>
            <div className={cn("pt-1.5 mt-auto flex items-center gap-3")}>
              <Progress className="[&>div]:bg-green-500" value={35} />
            </div>
            <p className="text-sm">35% Complete</p>
          </div>
        </div>
      </Link>
      <div className="absolute right-2 top-2 bg-green-200/50 text-green-800 dark:text-green-300 dark:bg-green-900/50 backdrop-blur-sm rounded-lg px-4 py-1">
        Active
      </div>
    </div>
  );
};
