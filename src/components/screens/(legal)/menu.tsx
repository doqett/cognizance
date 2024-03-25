"use client";
import { footerItems } from "@/assets/data/constants";
import { NavLink } from "@/components/ui";
import React from "react";

export function Menu() {
  return (
    <div>
      <ul className="flex flex-col items-start gap-4">
        {footerItems.legal.map((item, index) => {
          return (
            <li key={`${index}`}>
              <NavLink href={item.path} exact className="transition duration-300 font-medium">
                {item.name}
                {item.new ? (
                  <span className="ml-2 font-medium text-xs leading-5 rounded-full text-new px-2 py-0.5 ">
                    New
                  </span>
                ) : null}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
