import { courses } from "@/assets/data/coursedata";
import { EnrolledCard } from "./enrolled-card";

export const EnrolledList = () => {
  return (
    <section>
      <div className="pt-6">
        <div className="">
          <h2 className="text-xl md:text-2xl font-medium">
            Courses you&apos;re currently enrolled in.
          </h2>
        </div>
        <div className="py-6 grid gap-6 grid-cols-[repeat(auto-fill,minmax(290px,1fr))]">
          {courses.slice(0, 3).map((course) => (
            <EnrolledCard
              key={course.id}
              id={course.id}
              title={course.title}
              author={course.author}
              avatar={course.avatar}
              banner={course.banner}
              duration={course.duration}
              tag={course.tag}
              category={course.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
