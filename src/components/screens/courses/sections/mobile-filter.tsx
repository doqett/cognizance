import { filters } from "@/assets/data/filterdata";
import {
  Button,
  Checkbox,
  Label,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui";
import { MixerVerticalIcon } from "@radix-ui/react-icons";
import React from "react";

export function MobileFilter() {
  return (
    <Drawer>
      <DrawerTrigger className="w-full lg:hidden" asChild>
        <div className="flex justify-end gap-6 items-center text-blue-600">
          Show All Filters
          <Button className=" text-sm shadow" variant={"outline"} size={"icon"}>
            <MixerVerticalIcon />
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="max-h-full">
        <DrawerHeader>
          <DrawerTitle className="text-center">Filter Courses</DrawerTitle>
        </DrawerHeader>
        <div className="px-6 overflow-y-scroll mx-auto w-full max-w-sm">
          <Accordion type="single" collapsible defaultValue="Category">
            {filters.map((filter, index) => (
              <div key={index} className="space-y-2">
                <AccordionItem value={filter.title} className="border-b-0">
                  <AccordionTrigger>{filter.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="">
                      {filter.options.map((option, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center py-0.5 rounded-md"
                        >
                          <Label
                            htmlFor={`${option.value}-dialog`}
                            className="text-sm text-muted-foreground font-light"
                          >
                            {option.title}
                          </Label>
                          <Checkbox id={`${option.value}-dialog`} />
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="mx-auto w-full max-w-sm text-sm text-blue-600" variant={"outline"}>
              Apply Filters
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
