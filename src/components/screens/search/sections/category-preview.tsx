import { PreviewCourse } from "@/components/common/courses/preview-course";
import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ICategoryPreview } from "@/interface/types";

export function CategoryPreview(props: ICategoryPreview) {
  return (
    <section>
      <div className=" pb-12 space-y-8">
        <div className="pt-10 flex justify-between items-center flex-wrap gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold tracking-tight text-primary">
              {props.title}
            </h2>
          </div>
          <Link
            href={"/courses/?categories=certificate+courses"}
            className="h-10 py-2 px-5 flex gap-4 items-center w-fit max-w-xs bg-blue-600 text-primary-foreground rounded-lg shadow hover:shadow-lg duration-300">
            <p className="">View All</p>
            <ArrowRightIcon className="h-5 w-5 " />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 divide-y sm:divide-y-0 ">
          {props.courses.slice(0, 6).map((course, index) => (
            <React.Fragment key={index}>
              <PreviewCourse
                title={course.title}
                author={course.author}
                avatar={course.avatar}
                banner={course.banner}
                duration={course.duration}
                tag={course.tag}
                category={course.category}
                small
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
