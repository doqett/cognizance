import React from "react";
import { Hero } from "./sections/hero";
import { PopularCourses } from "./sections/popular-courses";
import { ExploreCourses } from "./sections/explore-courses";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <PopularCourses />
      <ExploreCourses />
    </>
  );
};
