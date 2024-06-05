import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
} from "@/components/ui";
import {
  BackpackIcon,
  BadgeIcon,
  CalendarIcon,
  ClockIcon,
  GlobeIcon,
  Share2Icon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { CourseContents } from "./course-contents";
import { FeaturedCourse } from "./featured-course";
import { courses } from "@/assets/data/coursedata";
import Link from "next/link";
import { IoMedalOutline } from "react-icons/io5";

export const CourseSingle = () => {
  return (
    <div className="py-4 h-full space-y-6">
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
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="basis-full lg:basis-3/5 space-y-6 lg:pr-8">
          <div className="space-y-6 w-full pb-6">
            <h2 className="text-3xl sm:text-5xl font-semibold">
              UX/UI Design Trends Going Into 2024
            </h2>
            <div className="flex gap-2 items-center">
              <Avatar className="h-9 w-9 rounded-lg">
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
            <Stats />
            <div
              id="course_banner"
              className="aspect-[21/9] shadow w-full bg-background relative rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={1024}
                height={150}
                className="h-full group-hover:scale-105 duration-300 w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="basis-full lg:basis-2/5 flex-row gap-6 lg:gap-0 flex-wrap space-y-2 flex justify-between lg:flex-col lg:justify-end lg:pl-8">
          <div className="space-y-2 grow lg:grow-0">
            <div className="flex items-center gap-2">
              <StarFilledIcon className="text-amber-400 size-4" />
              <p className="text-lg font-medium">4.5</p>
              <p className="text-muted-foreground">(43 Reviews)</p>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon />
              <p className="text-lg font-medium">Updated: July 3rd, 2024</p>
            </div>
            <div className="flex items-center gap-2">
              <IoMedalOutline />
              <p className="text-lg font-medium">Certificate on Completion</p>
            </div>
          </div>
          <div className="space-y-1 lg:pt-8 grow lg:grow-0">
            <h3 className="font-medium">Course Begins</h3>
            <div className="space-y-1">
              <p className="leading-[1.2] text-xl whitespace-nowrap group-hover:text-emerald-500 font-medium duration-200">
                July 24th, 2024
              </p>
              <p className="text-sm text-muted-foreground ">7:00 am - 9:00 am</p>
            </div>
          </div>
          <div className="space-y-2 lg:pt-8">
            <div className="flex gap-4 w-full">
              <Button className="px-8 py-6 text-base border border-primary" size={"lg"}>
                Enroll Now
              </Button>
              <Button className="px-8 py-6 text-base" variant={"outline"} size={"lg"}>
                Refer a friend
              </Button>
            </div>
            <p className="text-xs text-muted-foreground "> * Financial Aid Available</p>
          </div>

          <Link href={"#"} className="flex gap-2 items-center lg:py-4 w-full">
            <Share2Icon className="size-5" /> Share this course
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-0">
        <div className="basis-full lg:basis-3/5 space-y-6 w-full lg:pr-8">
          <About />
          <CourseContents />
        </div>
        <div className="basis-full lg:basis-2/5 space-y-6 sticky top-24 lg:pl-8">
          <h2 className="text-3xl font-semibold tracking-tight text-primary">Similar Courses</h2>
          <div className="space-y-2">
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
      </div>
    </div>
  );

  function Stats() {
    return (
      <div className="flex justify-between gap-12 max-w-3xl">
        <div>
          <div className="flex items-center gap-3">
            <CalendarIcon className="size-4" />
            <p className="text-xl whitespace-nowrap font-medium duration-200">2 months</p>
          </div>
          <p className="text-xs text-muted-foreground ml-7">Duration</p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <BackpackIcon className="size-4" />
            <p className="text-xl whitespace-nowrap font-medium duration-200">Beginner</p>
          </div>
          <p className="text-xs text-muted-foreground ml-7">Course Level</p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <ClockIcon className="size-4" />
            <p className="text-xl whitespace-nowrap font-medium duration-200">Self Paced</p>
          </div>
          <p className="text-xs text-muted-foreground ml-7">Delivery</p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <GlobeIcon className="size-4" />
            <p className="text-xl whitespace-nowrap font-medium duration-200">English</p>
          </div>
          <p className="text-xs text-muted-foreground ml-7">Language</p>
        </div>
      </div>
    );
  }
};

function About() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-primary">About this Course</h2>
      <p className="text-muted-foreground text-pretty">
        Every year, we have a line up of new design trends that not only look good, but also stick
        around and influence other designers to “steal” the trend. Love it or hate it, there are
        actually some design waves that are smart and functional. These functions could range from
        including more information in less space, to build more engagement with the users. Every
        year, we have a line up of new design trends that not only look good, but also stick around
        and influence other designers to “steal” the trend. Love it or hate it, there are actually
        some design waves that are smart and functional.
        <br />
        <br />
        These functions could range from including more information in less space, to build more
        engagement with the users. Every year, we have a line up of new design trends that not only
        look good, but also stick around and influence other designers to “steal” the trend. Love it
        or hate it, there are actually some design waves that are smart and functional. These
        functions could range from including more information in less space, to build more
        engagement with the users.
      </p>
    </div>
  );
}
