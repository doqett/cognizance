"use client";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui";

const Page = () => {
  const [value, setValue] = React.useState("1");
  const faqsList = [
    {
      q: "What is Doqett Labs?",
      a: "Doqett Labs is a company that provides online learning platforms and educational resources. We offer a variety of courses on different subjects, taught by experienced instructors.",
    },
    {
      q: "Who can use Doqett Labs?",
      a: "Doqett Labs is designed for anyone who wants to learn something new. Our courses are suitable for students of all ages and backgrounds, from beginners to professionals looking to expand their skillset.",
    },
    {
      q: "Are there free courses available?",
      a: "Yes, Doqett Labs offers a selection of free courses. You can also find free learning materials like articles, tutorials, and videos on our platform.",
    },
    {
      q: "What are the benefits of taking a paid course on Doqett Labs?",
      a: "Paid courses on Doqett Labs typically offer more in-depth content, interactive exercises, personalized feedback from instructors, and certifications upon completion.",
    },
    {
      q: "How do I enroll in a course?",
      a: "To enroll in a course, simply create an account on Doqett Labs and browse our course catalog. Once you find a course you're interested in, click on the enroll button and follow the instructions.",
    },
    {
      q: "What payment methods do you accept?",
      a: "Doqett Labs accepts a variety of payment methods, including credit cards, debit cards, and some popular online payment options. The specific options available may vary depending on your location.",
    },
    {
      q: "What is your refund policy?",
      a: "Doqett Labs offers a refund policy for certain courses within a specified timeframe (e.g., 30 days) of enrollment. Please refer to the specific course description for details on the refund policy.",
    },
    {
      q: "How do I contact Doqett Labs for support?",
      a: "You can contact Doqett Labs for support by email at support@doqett.com. We also have a Help Center on our website with answers to frequently asked questions and troubleshooting guides.",
    },
  ];

  return (
    <section>
      <h1 className="text-5xl font-bold mb-3">Frequently Asked Questions</h1>
      <div className="max-w-3xl text-base pt-6">
        {faqsList.map((item, index) => {
          return (
            <Accordion
              key={item.q}
              type="single"
              defaultValue={"1"}
              value={value}
              collapsible
              className="w-full"
              onValueChange={setValue}
            >
              <AccordionItem value={`${index + 1}`}>
                <AccordionTrigger className="text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
