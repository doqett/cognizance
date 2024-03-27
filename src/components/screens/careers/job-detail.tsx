import React from 'react';
import { JobForm } from "./job-form";

export default function JobDetail() {
  return (
    <section className="py-24 container">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="prose prose-li:m-0 prose-h2:mt-6 prose-h2:mb-3 max-w-none prose-a:text-blue-700 prose-a:no-underline">
          <div className="w-full">
            <div className="pb-4 text-muted-foreground">Posted on 24th March, 2024</div>
            <h1 className="font-bold mb-3 text-start">Full Stack Engineer - Doqett Labs</h1>
          </div>
          <p>
            Do you love building beautiful, user-friendly web interfaces? Are you passionate about
            creating intuitive and responsive user experiences? If so, we want to hear from you!
          </p>

          <p>
            Doqett Labs Pvt. Ltd. is searching for a talented Front-End Developer to join our
            growing team. In this role, you will be responsible for the design and development of
            the user interface (UI) for our web applications. You will work closely with UI/UX
            designers, back-end developers, and product managers to bring our vision to life.
          </p>

          <h2>Responsibilities</h2>
          <ul>
            <li>
              Translate UI/UX design mockups and prototypes into clean, maintainable, and
              cross-browser compatible front-end code.
            </li>
            <li>
              Develop reusable UI components using modern front-end frameworks (e.g., React,
              Angular, Vue.js).
            </li>
            <li>
              Implement responsive design principles to ensure applications render flawlessly across
              all devices (desktop, tablet, mobile).
            </li>
            <li>Write well-documented, clean, and efficient code.</li>
            <li>
              Collaborate with back-end developers to integrate front-end components with back-end
              functionalities.
            </li>
            <li>Assist with UI/UX testing and iterate on designs based on user feedback.</li>
            <li>Stay up-to-date on the latest front-end development trends and technologies.</li>
          </ul>

          <h2>Qualifications</h2>
          <ul>
            <li>Proven experience as a Front-End Developer (1+ years)</li>
            <li>Strong understanding of HTML, CSS, and JavaScript (ES6+)</li>
            <li>
              Experience with a modern front-end framework (React, Angular, or Vue.js preferred)
            </li>
            <li>Experience with responsive web design principles</li>
            <li>Familiarity with UI/UX best practices</li>
            <li>Excellent communication and collaboration skills</li>
            <li>Ability to work independently and manage multiple tasks effectively</li>
            <li>A passion for building high-quality, user-centric web applications</li>
          </ul>

          <h2>Bonus Points</h2>
          <ul>
            <li>
              Experience with [Specific technologies relevant to your company, e.g., accessibility
              tools, build tools like Webpack or Gulp]
            </li>
            <li>Experience with unit testing frameworks (e.g., Jest)</li>
            <li>Experience with a CSS preprocessor (e.g., Sass, Less)</li>
            <li>A portfolio showcasing your front-end development skills</li>
          </ul>

          <h2>What We Offer</h2>
          <ul>
            <li>Competitive salary and benefits package</li>
            <li>Opportunity to work on challenging and innovative projects</li>
            <li>Collaborative and supportive work environment</li>
            <li>Chance to learn and grow your technical skills</li>
            <li>Be a part of a company that is making a positive impact</li>
          </ul>

          <h2>To Apply:</h2>
          <p>
            Please submit your resume and cover letter to{" "}
            <a href="mailto:career@doqett.com"> career@doqett.com</a> or submit your application
            through the form.
          </p>

          <p>
            We are an equal opportunity employer and value diversity at our company. We do not
            discriminate on the basis of race, religion, color, national origin, gender, sexual
            orientation, age, marital status, veteran status, or disability status.
          </p>
        </div>
        <div className="sticky top-24 h-fit">
          <JobForm />
        </div>
      </div>
    </section>
  );
}
