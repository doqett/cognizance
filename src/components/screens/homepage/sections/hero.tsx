import { Input } from '@/components/ui';
import React from 'react';
import bg from './banner.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='flex w-full flex-col items-start justify-start bg-accent h-80 md:h-96 mt-16'>
      <div className='container flex text-start justify-between gap-4 h-full'>
        <div className='pt-16 md:pt-24 space-y-4 z-20'>
          <h2 className='text-4xl sm:text-5xl xl:text-6xl max-w-2xl text-primary text-pretty font-semibold'>
            What Skills Will You Master Today?
          </h2>
          <p className='text-lg sm:text-xl text-muted-foreground md:font-light'>
            Browse Doqett&apos;s Library of Courses
          </p>
          <Input
            className='h-12 bg-background max-w-sm text-base'
            placeholder='Search Courses '
          />
        </div>
        <div className='absolute left-0 md:relative bg-foreground  h-80 md:h-96 w-full md:w-fit md:[clip-path:polygon(25%_0%,100%_0%,100%_100%,_0%_100%)] z-0'>
          <Image
            src={bg}
            alt='Student'
            className='w-full h-full object-cover select-none pointer-events-none'
          />
          <div className='absolute right-0 top-0 w-full md:w-48 h-full bg-gradient-to-b md:bg-gradient-to-l from-accent'></div>
        </div>
      </div>
    </section>
  );
};
