import { PreviewCourse } from "@/components/common/courses/preview-course";
import React from "react";
import { courses } from "@/assets/data/coursedata";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function PopularCourses() {
  return (
    <section>
      <div className="container pb-12 space-y-8">
        <div className=" gap-2 flex-wrap justify-center text-xs hidden">
          <div className="px-2.5 py-1.5 border rounded-full w-fit hover:bg-accent duration-200">
            Digital Marketing
          </div>
          <div className="px-2.5 py-1.5 border rounded-full w-fit hover:bg-accent duration-200">
            SEO Expert
          </div>
          <div className="px-2.5 py-1.5 border rounded-full w-fit hover:bg-accent duration-200">
            Frontend
          </div>
          <div className="px-2.5 py-1.5 border rounded-full w-fit hover:bg-accent duration-200">
            Public Service Commission
          </div>
          <div className="px-2.5 py-1.5 border rounded-full w-fit hover:bg-accent duration-200">
            10 +2 Classes
          </div>
          <div className="px-2.5 py-1.5 border rounded-full w-fit hover:bg-accent duration-200">
            EPS Coaching
          </div>
          <div className="px-2.5 py-1.5 border rounded-full w-fit hover:bg-accent duration-200">
            IELTS
          </div>
        </div>
        <div className="pt-10 flex justify-between items-center flex-wrap gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
              Earn Professional Certificates
            </h2>
            <p className="text-lg text-muted-foreground">
              Dive into Doqett&apos;s most popular programs, get ready for
              in-demand career options.
            </p>
          </div>
          <Link
            href={"/courses/?categories=certificate+courses"}
            className="h-12 py-2 px-5 flex gap-4 items-center w-full sm:w-fit max-w-xs bg-primary text-primary-foreground rounded-lg shadow hover:shadow-lg duration-300">
            <p className="sm:text-lg">View All Certificate Courses</p>
            <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 divide-y sm:divide-y-0 ">
          {courses.slice(0, 8).map((course, index) => (
            <React.Fragment key={index}>
              <PreviewCourse
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
    </section>
  );
}
