import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React from "react";
import ListProject from "./ListProject";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import TechnologyStacks from "./TechnologyStacks";

const Projects = () => {
  const defaultWordClassname =
    "text-shadow-sm lg:text-shadow-lg shadow-teal-500 text-2xl lg:text-4xl";
  const words = [
    {
      text: "A",
      className: defaultWordClassname,
    },
    {
      text: "small",
      className: defaultWordClassname,
    },
    {
      text: "selection",
      className: defaultWordClassname,
    },
    {
      text: "of",
      className: defaultWordClassname,
    },
    {
      text: "my",
      className: defaultWordClassname,
    },
    {
      text: "projects ✨",
      className: `!text-teal-500 ${defaultWordClassname}`,
    },
  ];

  const projectList = [
    {
      title: "NextJS Blog Starter",
      href: "https://nextjs-blog-prisma-eight.vercel.app",
      pinTitle: "NextJS Blog Starter",
      description:
        "A full-stack starter application built using Next.js, Prisma, NextAuth, and Vercel Postgres",
      stacks: ["nextjs", "prisma", "tailwind", "postgresql"],
      thumbnail: "/blog.png",
    },
    {
      title: "Portofolio v1",
      href: "https://valeriandwi.github.io/",
      pinTitle: "Portofolio v1",
      description:
        "My first portofolio built using React and TailwindCSS that deployed on GitHub pages",
      stacks: ["react", "tailwind"],
      thumbnail: "/portofolio-v1.png",
    },
    {
      title: "HR Management System",
      href: "https://valeriandwi.github.io/",
      pinTitle: "HR Management System",
      description:
        "Designed to streamline and manage the recruitment and employee management processes within an organization",
      stacks: ["nextjs", "prisma", "postgresql", "antd"],
      thumbnail: "/hrm.png",
    },
    {
      title: "Institution Issues Analytics",
      href: "https://github.com/valeriandwi/dicoding-data-scientist-expert/tree/main/FinalProject",
      pinTitle: "Institution Issues Analytics",
      description:
        "Designed to reduce high dropout rates by providing early detection and intervention for at-risk students.",
      stacks: ["python", "streamlit"],
      thumbnail: "/institution.png",
    },
    {
      title: "Kintan Website Cloned",
      pinTitle: "Kintan Website Cloned",
      description:
        "Developed using ReactJS and Tailwind, replicating the design to provide a seamless user experience.",
      stacks: ["react", "tailwind"],
      thumbnail: "/institution.png",
    },
    {
      title: "Emotion Recognition",
      pinTitle: "Emotion Recognition",
      description:
        "Developed Emotion Recognition using openCV with VGG19 CNN Model and built on the website",
      stacks: ["python", "javascript"],
      thumbnail: "/institution.png",
    },
  ];

  return (
    <div>
      <div className="px-8 w-full flex justify-center">
        <TypewriterEffectSmooth
          words={words}
          cursorClassName="bg-teal-500 h-full w-[2px]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectList.map((project, index) => (
          <ListProject {...project} key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {/* <Button>Show More</Button> */}
      </div>
      <TechnologyStacks />
    </div>
  );
};

export default Projects;
