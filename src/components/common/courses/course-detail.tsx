import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/components/ui";
import {
  BookmarkIcon,
  DotsVerticalIcon,
  PlusCircledIcon,
  Share2Icon,
} from "@radix-ui/react-icons";
import { HiSparkles } from "react-icons/hi2";

export const CourseDetail = () => {
  return (
    <div className="py-24">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Course</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Course Detail</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className=" py-10 gap-12">
          
          <div className="flex flex-col gap-10 sticky top-24">
            <div
              id="course_banner"
              className="h-56 sm:h-64 w-full bg-accent relative"></div>
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold">
                UX/UI Design Trends Going Into 2024
              </h2>
              <p className="text-muted-foreground text-pretty">
                Every year, we have a line up of new design trends that not only
                look good, but also stick around and influence other designers
                to “steal” the trend. Love it or hate it, there are actually
                some design waves that are smart and functional. These functions
                could range from including more information in less space, to
                build more engagement with the users. Every year, we have a line
                up of new design trends that not only look good, but also stick
                around and influence other designers to “steal” the trend. Love
                it or hate it, there are actually some design waves that are
                smart and functional. These functions could range from including
                more information in less space, to build more engagement with
                the users.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 ">
              <div className="flex gap-2 items-center cursor-pointer group">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    className=" group-hover:scale-110 duration-200"
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  />
                  <AvatarFallback>MF</AvatarFallback>
                </Avatar>
                <p className="hidden sm:block whitespace-nowrap font-medium duration-200">
                  Kathmandu University
                </p>
              </div>
              <p className="text-sm">1-3 Months</p>
              <div className="flex gap-4 ml-auto">
                <BookmarkIcon className="h-5 w-5" />
                <Share2Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
