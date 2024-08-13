import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const items = [
    {
      title: "Bringing Digital Visions to Life",
      titleClassName: "!text-4xl",
      description:
        "With creativity and technical expertise, I craft dynamic user interfaces using React and Next.js.",
      className: "row-span-1 col-span-3 lg:col-span-2 lg:row-span-2",
      thumbnail: "./about-me-1.png",
    },
    {
      title: "Innovative Web Development",
      description:
        "Passionate about building seamless and engaging user experiences with modern web technologies.",
      className: "col-span-3 lg:col-span-1",
      thumbnail: "./about-me-2.png",
    },
    {
      title: "The Art of Design",
      description:
        "Discover the beauty of thoughtful and functional design in web development.",
      className: "col-span-3 lg:col-span-1",
      thumbnail: "./about-me-3.png",
    },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-black lg:min-h-screen pb-5 lg:pb-20 px-14 lg:px-20 w-full"
    >
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
    </motion.div>
  );
};

export default AboutMe;
