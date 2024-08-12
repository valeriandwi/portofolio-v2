import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const WorkExperience = () => {
  const dummyContent = [
    {
      title: "Frontend Developer",
      description: (
        <div className="leading-loose">
          <ul className="list-disc list-outside">
            <li>
              Collaborated within a team to develop the BNI Customer Hub Back
              Office and BNI Customer Hub websites according to user needs.
            </li>
            <li>
              Work as a team to build the IFG Life Financial Dashboard website,
              featuring various functionalities such as real-time data
              visualization, financial reporting, and account management tools.
            </li>
            <li>
              Contributed to team efforts in developing the company&apos;s
              product website.
            </li>
            <li>
              Conducted code maintenance and development on the utilized stack.
            </li>
            <li>Conducted research to optimize the developed websites.</li>
            <li>
              Addressed error fixes based on reports provided by QA (Quality
              Assurance)
            </li>
          </ul>
        </div>
      ),
      badge: (
        <span className="!text-teal-500 text-shadow-lg shadow-teal-500">
          Inti Corpora Teknologi ( 2022 - Present )
        </span>
      ),
    },
    {
      title: "Frontend Developer",
      description: (
        <div className="leading-loose">
          <ul className="list-disc list-outside">
            <li>
              Participated in meetings with other divisions to discuss the
              business processes of the systems to be developed.
            </li>
            <li>
              Designed website layouts according to user needs. Developed
              various internal company websites, including the Mayora Portal,
              various dashboards (KPI Dashboard, Sales Promotion Dashboard, HR
              Dashboard, Helpdesk Dashboard, and Dashboard Monitoring System),
              Sourcing Material System, and Project Management System using
              React.JS.
            </li>
            <li>
              Designed User Manuals for each system developed, to be provided to
              users as guides.
            </li>
            <li>
              Created training and mentoring modules on React and JavaScript.{" "}
            </li>
            <li>Addressed identified errors and conducted repeated testing.</li>
            <li>
              Provided maintenance and support for databases in case of data
              errors.
            </li>
            <li>Conducted research to optimize the developed websites.</li>
          </ul>
        </div>
      ),
      badge: (
        <span className="!text-teal-500 text-shadow-lg shadow-teal-500">
          Mayora Indah ( 2019 - 2022 )
        </span>
      ),
    },
  ];

  return (
    <div className="pt-12">
      <TracingBeam className="px-6">
        <div className="max-w-xl mx-8 antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-3xl mb-4 font-bold")}>{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {/* {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )} */}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default WorkExperience;
