import { technologyStackList } from "@/constants/contents";
import Image from "next/image";
import React from "react";

const TechnologyStacks = () => {
  return (
    <div className="px-16">
      <p className="text-4xl text-center mb-16 mt-8 font-bold text-shadow-sm lg:text-shadow-lg shadow-teal-500">
        My <span className="text-teal-500">Technology Stacks</span>
      </p>
      <div className="flex flex-wrap justify-center lg:gap-8 gap-6 lg:px-32 px-8">
        {technologyStackList.map(({ name, label }) => (
          <div
            className="flex flex-row items-center space-x-3 font-bold"
            key={name}
          >
            <Image src={`/${name}.svg`} height="48" width="48" alt={name} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStacks;
