import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import {
  BookmarkIcon,
  DotsVerticalIcon,
  PlusCircledIcon,
  Share2Icon,
} from '@radix-ui/react-icons';
export const PreviewArticle = () => {
  return (
    <div id="article-preview" className="w-full md:max-w-lg py-4 shadow">
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          <time dateTime="2020-03-16" className="text-sm font-light text-muted-foreground">
            Mar 16, 2020
          </time>
          <div className="px-2 py-0.5 border rounded-full">
            <p className="text-xs">Technology</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="h-24 w-24 aspect-square bg-accent"></div>
          <div className="space-y-1">
            <h2 className="text-xl">Design by AI: The Fast-Food of the Future</h2>
            <p className="w-full text-wrap text-muted-foreground line-clamp-2 font-light">
              AI is going to reduce the demand for designers. Which areas will be affected? Which
              will survive?
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-muted-foreground w-full">
          <div className="flex gap-2 items-center py-1 px-1 pr-2 bg-accent rounded-full hover:brightness-95 duration-300 cursor-pointer group">
            <Avatar className="h-6 w-6">
              <AvatarImage
                className=" group-hover:scale-110 duration-200"
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              />
              <AvatarFallback>MF</AvatarFallback>
            </Avatar>
            <PlusCircledIcon className="h-5 w-5 group-hover:text-emerald-500 duration-200" />
          </div>
          <p className="text-sm">2 min read</p>
          <div className="flex gap-4 ml-auto">
            <BookmarkIcon className="h-5 w-5" />
            <Share2Icon className="h-5 w-5" />
            <DotsVerticalIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
