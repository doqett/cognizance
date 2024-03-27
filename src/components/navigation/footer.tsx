import React from 'react'
import playstore from '@/assets/icons/playstore.svg';
import appstore from '@/assets/icons/appstore.svg';
import Image from 'next/image';
import { Logo } from '@/assets/jsx/logo';
import { year } from '@/lib/utils';
import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
} from 'react-icons/fa6';
import Link from 'next/link';
import { NavLink } from "../ui";
import { footerItems } from "@/assets/data/constants";

export const Footer = () => {
  return (
    <div className="bg-accent">
      <div className="container py-12">
        <div className="grid grid-cols-4 gap-12 text-lg py-10">
          <div className="col-span-4 sm:col-span-2 md:col-span-1 space-y-4">
            <p className="font-medium">Popular Courses</p>
            <ul className="text-sm space-y-2">
              <li>Fullstack Development</li>
              <li>Frontend Development</li>
              <li>Java Development</li>
              <li>PSC Preparation</li>
              <li>EPS Preparation</li>
              <li>IELTS Preparation</li>
              <li>GRE Preparation</li>
            </ul>
          </div>
          <div className="col-span-4 sm:col-span-2 md:col-span-1 space-y-4">
            <p className="font-medium">Doqett</p>
            <ul className="text-sm space-y-2">
              {footerItems.company.map((item, index) => {
                return (
                  <li key={`${index}`}>
                    <NavLink href={item.path} exact className="transition duration-300">
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-4 sm:col-span-2 md:col-span-1 space-y-4">
            <p className="font-medium">More</p>
            <ul className="text-sm space-y-2">
              {footerItems.legal.map((item, index) => {
                return (
                  <li key={`${index}`}>
                    <NavLink href={item.path} exact className="transition duration-300">
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-4 sm:col-span-2 md:col-span-1 space-y-2">
            <Logo className="h-9 [&>path]:fill-primary transition-colors duration-300 hidden sm:block" />
            <p className="text-sm max-w-xs">Doqett: Master New Skills and Connect with Experts</p>
            <p className="font-medium text-xl pt-2">Download the Doqett App</p>
            <div className="space-y-2 relative w-fit">
              <Image src={appstore} alt="Appstore" className="h-12 w-fit opacity-50" />
              <Image src={playstore} alt="Playstore" className="h-12 w-fit opacity-50" />
            </div>
          </div>
        </div>
        <div className="pt-6 border-t flex justify-between">
          <p className="text-base">&copy; Copyright {year} Doqett Labs. All rights reserved.</p>
          <div className="flex gap-3 ">
            <Link href={""} target="_blank">
              <FaXTwitter className="h-5 w-5 text-primary hover:text-black duration-200" />
            </Link>
            <Link href={""} target="_blank">
              <FaInstagram className="h-5 w-5 text-primary hover:text-pink-600 duration-200" />
            </Link>
            <Link href={""} target="_blank">
              <FaFacebook className="h-5 w-5 text-primary hover:text-blue-600 duration-200" />
            </Link>
            <Link href={""} target="_blank">
              <FaLinkedin className="h-5 w-5 text-primary hover:text-sky-600 duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
