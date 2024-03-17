import categories from "@/assets/data/categorydata";
import { CategoryItem } from "@/components/common/courses";
import React from "react";

export function ExploreCourses() {
  return (
    <section>
      <div className="container py-12">
        <div className="text-center pb-10">
          <p className="text-sm sm:text-lg text-muted-foreground">
            Master New Skills and Connect with Experts
          </p>
          <h1 className="text-2xl sm:text-5xl font-bold">
            Explore Doqett Catalogue
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <CategoryItem
                title={category.title}
                image={category.image}
                courses={category.courses}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
