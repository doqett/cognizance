'use client';
import React, { useEffect } from 'react';
import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui';
import { cn } from '@/lib/utils';

export const Search = () => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  return (
    <>
      <Button
        variant='outline'
        className={cn(
          'relative h-12 w-48 sm:w-full max-w-xl justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12'
        )}
        onClick={() => setOpen(true)}>
        <span className='hidden lg:inline-flex'>
          Search Courses, Blogs, Communities and more..
        </span>
        <span className='inline-flex lg:hidden'>Search...</span>
        <kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-9 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[14px] font-medium opacity-100 sm:flex'>
          <span className='text-lg'>⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
