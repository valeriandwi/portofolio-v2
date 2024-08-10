import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import React from "react";

const AboutMe = () => {
  const items = [
    {
      title: "Bringing Digital Visions to Life",
      titleClassName: "!text-4xl",
      description:
        "With creativity and technical expertise, I craft dynamic user interfaces using React and Next.js.",
      className: "row-span-1 col-span-3 lg:col-span-2 lg:row-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1514254519003-3c1b5f35e9ea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Innovative Web Development",
      description:
        "Passionate about building seamless and engaging user experiences with modern web technologies.",
      className: "col-span-3 lg:col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The Art of Design",
      description:
        "Discover the beauty of thoughtful and functional design in web development.",
      className: "col-span-3 lg:col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-black lg:min-h-screen pb-5 lg:pb-20 px-14 lg:px-20 w-full">
      <BentoGrid className="max-w-4xl mx-auto lg:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            thumbnail={item.thumbnail}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default AboutMe;
