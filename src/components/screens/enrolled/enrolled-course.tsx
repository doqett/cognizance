import { courses } from "@/assets/data/coursedata";
import { FeaturedCourse } from "@/components/common/courses";
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
import { CalendarIcon, Share2Icon, StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMedalOutline } from "react-icons/io5";

export const EnrolledCourse = () => {
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
            <div
              id="course_banner"
              className="aspect-video shadow w-full bg-background relative rounded-lg overflow-hidden"
            >
              <video
                width="320"
                height="240"
                controls
                preload="none"
                className="h-full group-hover:scale-105 duration-300 w-full object-cover rounded-lg"
              >
                <source
                  src="https://videos.pexels.com/video-files/4124024/4124024-hd_1366_720_50fps.mp4"
                  type="video/mp4"
                />
                <track
                  src="https://videos.pexels.com/video-files/4124024/4124024-hd_1366_720_50fps.mp4"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
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
};
