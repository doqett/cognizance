import { MobileLogo } from "@/assets/jsx/mobile-logo";
import React from "react";
import { IoLocationSharp, IoBriefcase } from "react-icons/io5";

const members = [
  {
    company_icon: (
      <MobileLogo className="h-10 [&>path]:fill-primary transition-colors duration-300" />
    ),
    company_name: "Doqett Labs",
    job_title: "Full stack engineer",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    job_type: "Full-time",
    location: "Remotely",
    path: "/careers/id-1-job",
  },
  {
    company_icon: (
      <MobileLogo className="h-10 [&>path]:fill-primary transition-colors duration-300" />
    ),
    company_name: "Doqett Labs",
    job_title: "Full stack engineer",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    job_type: "Full-time",
    location: "Remotely",
    path: "/careers/id-1-job",
  },
  {
    company_icon: (
      <MobileLogo className="h-10 [&>path]:fill-primary transition-colors duration-300" />
    ),
    company_name: "Doqett Labs",
    job_title: "Full stack engineer",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    job_type: "Full-time",
    location: "Remotely",
    path: "/careers/id-1-job",
  },
  {
    company_icon: (
      <MobileLogo className="h-10 [&>path]:fill-primary transition-colors duration-300" />
    ),
    company_name: "Doqett Labs",
    job_title: "Full stack engineer",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    job_type: "Full-time",
    location: "Remotely",
    path: "/careers/id-1-job",
  },
  {
    company_icon: (
      <MobileLogo className="h-10 [&>path]:fill-primary transition-colors duration-300" />
    ),
    company_name: "Doqett Labs",
    job_title: "Web tools manager",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    job_type: "Part-time",
    location: "USA, New york city",
    path: "/careers/id-1-job",
  },
  {
    company_icon: (
      <MobileLogo className="h-10 [&>path]:fill-primary transition-colors duration-300" />
    ),
    company_name: "Doqett Labs",
    job_title: "UI/UX Designer",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    job_type: "Full-time",
    location: "Mauritania",
    path: "/careers/id-1-job",
  },
];

export function Careers() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-md">
          <h1 className="text-2xl font-extrabold sm:text-3xl">
            Open Positions
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            We&apos;re currently looking talent software engineers, and
            designers to help us in our missions and to grow up.
          </p>
        </div>
        <ul className="mt-12 divide-y space-y-3">
          {members.map((item, idx) => (
            <li
              key={idx}
              className="px-4 py-5 duration-150 hover:rounded-xl hover:bg-accent">
              <a href={item.path} className="space-y-3">
                <div className="flex items-center gap-x-3">
                  <div className="flex items-center justify-center">
                    {item.company_icon}
                  </div>
                  <div>
                    <span className="block text-sm text-blue-500 font-medium">
                      {item.company_name}
                    </span>
                    <h3 className="text-basefont-semibold mt-1">
                      {item.job_title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground sm:text-sm">
                  {item.job_description}
                </p>
                <div className="text-sm text-muted-foreground flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <IoBriefcase className="h-5 w-5 text-muted-foreground/50" />
                    {item.job_type}
                  </span>
                  <span className="flex items-center gap-2">
                    <IoLocationSharp className="h-5 w-5 text-muted-foreground/50" />
                    {item.location}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
