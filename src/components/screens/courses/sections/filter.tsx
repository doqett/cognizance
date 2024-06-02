"use client";
import { useState } from "react";
import { filters } from "@/assets/data/filterdata";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Label,
} from "@/components/ui";

export function Filter() {
  const [expandedFilter, setExpandedFilter] = useState<number | null>(null);

  const handleShowMoreClick = (index: number | null) => {
    setExpandedFilter(index === expandedFilter ? null : index);
  };

  return (
    <div className="lg:h-full lg:sticky top-24 w-64 pr-4 hidden shrink-0 lg:block">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Filter</h2>
        <p className="text-sm font-light text-blue-600 cursor-pointer">Clear All Filters</p>
      </div>
      <div className="py-6">
        {filters.slice(0, 4).map((filter, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg">{filter.title}</h3>
            <ul className="">
              {(expandedFilter === index ? filter.options : filter.options.slice(0, 5)).map(
                (option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className="flex justify-between items-center px-3 py-0.5 rounded-md"
                  >
                    <Label
                      htmlFor={option.value}
                      className="text-base text-muted-foreground font-light"
                    >
                      {option.title}
                    </Label>
                    <Checkbox id={option.value} />
                  </li>
                )
              )}
              {filter.options.length > 5 && (
                <li
                  className="text-sm font-light text-blue-600 text-end cursor-pointer"
                  onClick={() => handleShowMoreClick(index)}
                >
                  {expandedFilter === index ? "Show less" : `+ ${filter.options.length - 5} more`}
                </li>
              )}
            </ul>
          </div>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full text-sm text-blue-600 mt-6" variant={"outline"}>
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
                          {filter.options.map((option, optionIndex) => (
                            <li
                              key={optionIndex}
                              className="flex justify-between items-center py-0.5 rounded-md"
                            >
                              <Label
                                htmlFor={`${option.value}-dialog`}
                                className="text-base text-muted-foreground font-light"
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
            <DialogFooter>
              <Button className="w-full text-sm text-blue-600" variant={"outline"}>
                Apply Filters
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
