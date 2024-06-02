import { CoursesList } from "./sections/courses-list";
import { Filter } from "./sections/filter";
import { MobileFilter } from "./sections/mobile-filter";

export function Courses() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 h-full">
      <Filter />
      <MobileFilter />
      <div className="h-fit w-full">
        <CoursesList />
      </div>
    </div>
  );
}
