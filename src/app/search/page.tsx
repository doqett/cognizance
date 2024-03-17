import { CoursesList } from '@/components/screens/search/sections/courses-list';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Explore Courses',
};

const Page = () => {
  return <CoursesList/>;
};

export default Page;
