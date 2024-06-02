import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CourseContents() {
  return (
    <section>
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight text-primary">
          What you&apos;ll learn?
        </h2>
        <p className="text-sm text-muted-foreground">
          These functions could range from including more information in less space, to build more
          engagement with the users. Every year, we have a line up of new design trends that not
          only look good, but also stick around and influence other designers to “steal” the trend.
          Love it or hate it, there are actually some design waves that are smart and functional.
          These functions could range from including more information in less space, to build more
          engagement with the users.
        </p>
        <div className="py-6">
          <Accordion className="max-w-2xl space-y-3" type="single" collapsible>
            <AccordionItem
              className="border bg-accent rounded-lg overflow-hidden border-accent"
              value="item-1"
            >
              <AccordionTrigger className="px-4 py-3 text-lg hover:no-underline">
                Basics of UI/UX
              </AccordionTrigger>
              <AccordionContent className="p-4 border-t bg-background">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border bg-accent rounded-lg overflow-hidden border-accent"
              value="item-2"
            >
              <AccordionTrigger className="px-4 py-3 text-lg hover:no-underline">
                Design System and Design Theory
              </AccordionTrigger>
              <AccordionContent className="p-4 border-t bg-background">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border bg-accent rounded-lg overflow-hidden border-accent"
              value="item-3"
            >
              <AccordionTrigger className="px-4 py-3 text-lg hover:no-underline">
                Understanding the Product
              </AccordionTrigger>
              <AccordionContent className="p-4 border-t bg-background">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border bg-accent rounded-lg overflow-hidden border-accent"
              value="item-4"
            >
              <AccordionTrigger className="px-4 py-3 text-lg hover:no-underline">
                Development of a Design
              </AccordionTrigger>
              <AccordionContent className="p-4 border-t bg-background">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
