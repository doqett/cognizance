'use client';
import { Logo } from '@/assets/jsx/logo';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ThemeSwitch } from '@/components/common';
import { MobileLogo } from '@/assets/jsx/mobile-logo';

export function Header() {
  return (
    <header className='fixed top-0 w-full text-foreground font-light z-50 backdrop-blur-sm bg-background shadow-md'>
      <div className='container text-lg flex justify-between items-center h-16 gap-8'>
        <Link href={'/'}>
          <Logo className='h-8 [&>path]:fill-primary transition-colors duration-300 hidden sm:block' />
          <MobileLogo className='h-8 [&>path]:fill-primary transition-colors duration-300 sm:hidden' />
        </Link>
        <div className='hidden sm:flex gap-6 items-center ml-auto lg:ml-0'>
          <ThemeSwitch />
          <Link
            href={'/login'}
            className='whitespace-nowrap text-background select-none h-10 text-base hover:text-background/80 ease-in-out duration-200 border px-5 py-2 bg-primary hover:bg-primary/90 rounded-md'>
            Login
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger className='focus:border-0 focus:outline-none focus:ring-0 focus:ring-transparent'>
              <HamburgerMenuIcon className='h-8 w-8 hover:text-white transition-colors duration-300' />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='p-5 w-64 rounded-xl bg-black/70 backdrop-blur-sm hidden'>
              <DropdownMenuGroup className='pt-12'>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/'}>Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/docs'}>Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/lightpaper'}>Lightpaper</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/contact'}>Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup className='px-2 pt-12 pb-6'>
                <h4 className='mt-6 text-sm mb-4 '>Join us on </h4>
                <ul className='flex gap-3 '>
                  <li className='p-1 bg-primary/50 rounded hover:bg-primary/100 transition-colors duration-200'>
                    <a
                      href='https://discord.com/invite/PJcWyCB8'
                      target='_blank'>
                      <Image
                        src='/discord.png'
                        alt=''
                        className='invert'
                        height={20}
                        width={20}
                      />
                    </a>
                  </li>
                  <li className='p-1 bg-primary/50 rounded hover:bg-primary/100 transition-colors duration-200'>
                    <a href='https://twitter.com/adsflow_net' target='_blank'>
                      <Image
                        src='/x.png'
                        alt=''
                        className='invert '
                        height={20}
                        width={20}
                      />
                    </a>
                  </li>
                </ul>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
