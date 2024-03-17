import { filters } from "@/assets/data/filterdata";
import {
  Button,
  Checkbox,
  Label,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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

export function Filter() {
  return (
    <div className="lg:h-full lg:sticky top-24 w-64 pr-4 hidden lg:block">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Filter</h2>
        <p className="text-sm font-light text-blue-600">Clear All Filters</p>
      </div>
      <div className="py-6">
        {filters.slice(0, 4).map((filter, index) => (
          <div key={index} className=" space-y-2">
            <h3 className="text-lg">{filter.title}</h3>
            <ul className="">
              {filter.options.slice(0, 5).map((option, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-3 py-0.5 rounded-md">
                  <Label
                    htmlFor={option.value}
                    className="text-base text-muted-foreground font-light">
                    {option.title}
                  </Label>
                  <Checkbox id={option.value} />
                </li>
              ))}
              <li className="text-sm font-light text-blue-600 text-end">
                {filter.options.length - 5 > 0 && (
                  <p className="">+ {filter.options.length - 5} more</p>
                )}
              </li>
            </ul>
          </div>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="w-full text-sm text-blue-600 mt-6"
              variant={"outline"}>
              Show All Filters
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-full">
            <DialogHeader>
              <DialogTitle>Filters</DialogTitle>
            </DialogHeader>
            <div className="py-6 ">
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
                              className="flex justify-between items-center py-0.5 rounded-md">
                              <Label
                                htmlFor={`${option.value}-dialog`}
                                className="text-base text-muted-foreground font-light">
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
            <DialogFooter>
              <Button
                className="w-full text-sm text-blue-600"
                variant={"outline"}>
                Apply Filters
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
