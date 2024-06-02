"use client";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { BookmarkIcon } from "@radix-ui/react-icons";

export function Bookmark({ id, className }: { id: string; className?: string }) {
  const handleBookmark = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <Button
      onClick={(e) => handleBookmark(e)}
      variant={"ghost"}
      size={"icon"}
      className={cn("rounded-full isolate z-50", className)}
    >
      <BookmarkIcon className="h-5 w-5" />
    </Button>
  );
}
