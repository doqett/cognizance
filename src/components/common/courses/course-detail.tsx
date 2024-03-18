import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import {
  BookmarkIcon,
  ClockIcon,
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
              <BreadcrumbLink href="/search">Course</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                UX/UI Design Trends Going Into 2024
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid grid-cols-12 gap-10 py-16 border-b">
          <div className="w-full col-span-12 lg:col-span-8 xl:col-span-9 gap-12 duration-300">
            <div className="flex flex-col gap-10 sticky top-24">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  UX/UI Design Trends Going Into 2024
                </h2>
              </div>
              <div className="border border-accent rounded-lg overflow-hidden shadow hover:shadow-lg duration-300">
                <div
                  id="course_banner"
                  className="h-64 sm:h-80 w-full bg-accent relative"></div>
                <div className="grid grid-cols-2 sm:grid-cols-4  gap-4 sm:divide-x p-4 ">
                  <div className="flex gap-3 items-start w-full justify-center">
                    <ClockIcon className="h-6 w-6 mt-1 hidden" />
                    <div className="">
                      <p className="text-xl whitespace-nowrap font-medium duration-200">
                        1-3 months
                      </p>
                      <p className="text-xs text-muted-foreground">Duration</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start w-full justify-center">
                    <ClockIcon className="h-6 w-6 mt-1 hidden" />
                    <div className="">
                      <p className="text-xl whitespace-nowrap font-medium duration-200">
                        Beginner
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Course Level
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start w-full justify-center">
                    <ClockIcon className="h-6 w-6 mt-1 hidden" />
                    <div className="">
                      <p className="text-xl whitespace-nowrap font-medium duration-200">
                        Self Paced
                      </p>
                      <p className="text-xs text-muted-foreground">Delivery</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start w-full justify-center">
                    <ClockIcon className="h-6 w-6 mt-1 hidden" />
                    <div className="">
                      <p className="text-xl whitespace-nowrap font-medium duration-200">
                        English
                      </p>
                      <p className="text-xs text-muted-foreground">Language</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full py-10 col-span-12  lg:col-span-4 xl:col-span-3 duration-300">
            hello
          </div>
        </div>
        <div className="py-10 grid grid-cols-12 gap-10 space-y-10">
          <div className="w-full col-span-12 lg:col-span-8 xl:col-span-9  space-y-5">
            <h3 className="text-2xl font-medium">About the Course</h3>
            <p className="text-muted-foreground text-pretty">
              Every year, we have a line up of new design trends that not only
              look good, but also stick around and influence other designers to
              “steal” the trend. Love it or hate it, there are actually some
              design waves that are smart and functional. These functions could
              range from including more information in less space, to build more
              engagement with the users. Every year, we have a line up of new
              design trends that not only look good, but also stick around and
              influence other designers to “steal” the trend. Love it or hate
              it, there are actually some design waves that are smart and
              functional.
              <br />
              <br />
              These functions could range from including more information in
              less space, to build more engagement with the users. Every year,
              we have a line up of new design trends that not only look good,
              but also stick around and influence other designers to “steal” the
              trend. Love it or hate it, there are actually some design waves
              that are smart and functional. These functions could range from
              including more information in less space, to build more engagement
              with the users.
            </p>
            <h3 className="text-2xl font-medium">What you will learn?</h3>
            <p className="text-muted-foreground text-pretty">
              Every year, we have a line up of new design trends that not only
              look good, but also stick around and influence other designers to
              “steal” the trend. Love it or hate it, there are actually some
              design waves that are smart and functional. These functions could
              range from including more information in less space, to build more
              engagement with the users. Every year, we have a line up of new
              design trends that not only look good, but also stick around and
              influence other designers to “steal” the trend. Love it or hate
              it, there are actually some design waves that are smart and
              functional.
              <br />
              <br />
              These functions could range from including more information in
              less space, to build more engagement with the users. Every year,
              we have a line up of new design trends that not only look good,
              but also stick around and influence other designers to “steal” the
              trend. Love it or hate it, there are actually some design waves
              that are smart and functional. These functions could range from
              including more information in less space, to build more engagement
              with the users.
            </p>
            <h3 className="text-2xl font-medium">Course Requirements</h3>
            <p className="text-muted-foreground text-pretty">
              Every year, we have a line up of new design trends that not only
              look good, but also stick around and influence other designers to
              “steal” the trend. Love it or hate it, there are actually some
              design waves that are smart and functional. These functions could
              range from including more information in less space, to build more
              engagement with the users. Every year, we have a line up of new
              design trends that not only look good, but also stick around and
              influence other designers to “steal” the trend. Love it or hate
              it, there are actually some design waves that are smart and
              functional.
              <br />
              <br />
              These functions could range from including more information in
              less space, to build more engagement with the users. Every year,
              we have a line up of new design trends that not only look good,
              but also stick around and influence other designers to “steal” the
              trend. Love it or hate it, there are actually some design waves
              that are smart and functional. These functions could range from
              including more information in less space, to build more engagement
              with the users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
