import React from "react";
import { CategoryPreview } from "./category-preview";
import { courses } from "@/assets/data/coursedata";
import { filters } from "@/assets/data/filterdata";
import { Cross2Icon } from "@radix-ui/react-icons";

export function CoursesList() {
  return (
    <div className="h-full w-full">
      <div className="flex">
        <h2 className="text-3xl font-semibold tracking-tight text-primary">
          243 Available Courses
        </h2>
      </div>
      <div className="flex gap-2 pt-6 flex-wrap">
        <div className="px-3 text-sm py-1 border flex gap-1.5 items-center rounded-full">
          Professional Certificate
          <Cross2Icon className="h-3.5 w-3.5" />
        </div>
        <div className="px-3 text-sm py-1 border flex gap-1.5 items-center rounded-full">
          Development
          <Cross2Icon className="h-3.5 w-3.5" />
        </div>
        <div className="px-3 text-sm py-1 border flex gap-1.5 items-center rounded-full">
          Desing
          <Cross2Icon className="h-3.5 w-3.5" />
        </div>
        <div className="px-3 text-sm py-1 border flex gap-1.5 items-center rounded-full">
          Marketing
          <Cross2Icon className="h-3.5 w-3.5" />
        </div>
        <div className="px-3 text-sm py-1 border flex gap-1.5 items-center rounded-full">
          Business
          <Cross2Icon className="h-3.5 w-3.5" />
        </div>
      </div>
      {filters[0].options.map((category, index) => (
        <React.Fragment key={index}>
          <CategoryPreview title={category.title} courses={courses} />
        </React.Fragment>
      ))}
    </div>
  );
}
