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
  Button,
} from "@/components/ui";
import {
  BookmarkIcon,
  ClockIcon,
  DotsVerticalIcon,
  PlusCircledIcon,
  Share2Icon,
} from "@radix-ui/react-icons";
import { HiSparkles } from "react-icons/hi2";
import Image from "next/image";
import { CourseContents } from "./course-contents";
import { CourseFaq } from "./course-faq";
import { FeaturedCourse } from "./featured-course";
import { courses } from "@/assets/data/coursedata";
import Link from "next/link";

export const CourseDetail = () => {
  return (
    <div className="py-4 space-y-6">
      <div className="py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>UX/UI Design Trends Going Into 2024</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">UX/UI Design Trends Going Into 2024</h2>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:gap-10 py-4 border-b">
          <div className="w-full col-span-12 lg:col-span-8 gap-12 duration-300">
            <div className="flex flex-col gap-10 sticky top-24">
              <div className="relative group">
                <div
                  id="course_banner"
                  className="h-64 sm:h-80 w-full bg-background relative rounded-md overflow-hidden"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={1024}
                    height={150}
                    className="h-full group-hover:scale-105 duration-300 w-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute w-full pt-24 rounded-b-md bg-gradient-to-t from-accent via-30% via-accent/70 to-transparent bottom-0 left-0 grid grid-cols-2 sm:grid-cols-4  gap-2 lg:gap-4 sm:divide-x p-4 ">
                  <div className="flex gap-3 items-start w-full lg:justify-center">
                    <div className="lg:px-6">
                      <p className="text-xl whitespace-nowrap font-medium duration-200">2 months</p>
                      <p className="text-xs text-muted-foreground">Duration</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start w-full lg:justify-center">
                    <div className="lg:px-6">
                      <p className="text-xl whitespace-nowrap font-medium duration-200">Beginner</p>
                      <p className="text-xs text-muted-foreground">Course Level</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start w-full lg:justify-center">
                    <div className="lg:px-6">
                      <p className="text-xl whitespace-nowrap font-medium duration-200">
                        Self Paced
                      </p>
                      <p className="text-xs text-muted-foreground">Delivery</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start w-full lg:justify-center">
                    <div className="lg:px-6">
                      <p className="text-xl whitespace-nowrap font-medium duration-200">English</p>
                      <p className="text-xs text-muted-foreground">Language</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-sm w-full h-fit col-span-12 lg:space-y-4 gap-6 lg:gap-2 lg:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 duration-300">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Instructor</h3>
              <div className="flex gap-2 items-center">
                <Avatar className="h-10 w-10 rounded-lg">
                  <AvatarImage
                    className=" group-hover:scale-110 duration-200"
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  />
                  <AvatarFallback>MF</AvatarFallback>
                </Avatar>
                <div className="">
                  <p className="leading-[1.2] whitespace-nowrap group-hover:text-emerald-500 font-medium duration-200">
                    Michael Foster
                  </p>
                  <p className="text-xs text-muted-foreground ">Kathmandu University</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Course Begins</h3>
              <div className="space-y-1">
                <p className="leading-[1.2] whitespace-nowrap group-hover:text-emerald-500 font-medium duration-200">
                  July 24th, 2024
                </p>
                <p className="text-xs text-muted-foreground ">7:00 am - 9:00 am</p>
              </div>
            </div>
            <div className="space-y-2">
              <Button size={"lg"}>Enroll Now</Button>
              <p className="text-xs text-muted-foreground "> * Financial Aid Available</p>
            </div>

            <Link href={"#"} className="flex gap-2 items-center">
              <Share2Icon className="size-5" /> Share this course
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 lg:gap-10 py-4 border-b">
        <div className="w-full col-span-12 lg:col-span-8 gap-12 duration-300">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight text-primary">About the Course</h2>
            <p className="text-muted-foreground text-pretty">
              Every year, we have a line up of new design trends that not only look good, but also
              stick around and influence other designers to “steal” the trend. Love it or hate it,
              there are actually some design waves that are smart and functional. These functions
              could range from including more information in less space, to build more engagement
              with the users. Every year, we have a line up of new design trends that not only look
              good, but also stick around and influence other designers to “steal” the trend. Love
              it or hate it, there are actually some design waves that are smart and functional.
              <br />
              <br />
              These functions could range from including more information in less space, to build
              more engagement with the users. Every year, we have a line up of new design trends
              that not only look good, but also stick around and influence other designers to
              “steal” the trend. Love it or hate it, there are actually some design waves that are
              smart and functional. These functions could range from including more information in
              less space, to build more engagement with the users.
            </p>
          </div>
          <CourseContents />
        </div>
        <div className="lg:max-w-sm sticky top-28 w-full h-fit col-span-12 lg:space-y-3 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 duration-300">
          <h2 className="text-3xl font-semibold tracking-tight text-primary">Similar Courses</h2>
          {courses.slice(0, 5).map((course, index) => (
            <React.Fragment key={index}>
              <FeaturedCourse
                id={course.id}
                title={course.title}
                author={course.author}
                avatar={course.avatar}
                banner={course.banner}
                duration={course.duration}
                tag={course.tag}
                category={course.category}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <CourseFaq />
    </div>
  );
};
