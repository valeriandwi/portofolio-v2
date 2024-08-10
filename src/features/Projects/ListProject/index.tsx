"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import React from "react";

interface IListProjectProps {
  pinTitle: string;
  href?: string;
  title: string;
  description: string;
  stacks: string[];
  thumbnail: string;
}

const ListProject: React.FC<IListProjectProps> = ({
  pinTitle,
  href,
  title,
  description,
  stacks,
  thumbnail,
}) => {
  return (
    <div className="min-h-[24rem] lg:min-h-[28rem] w-full flex items-center justify-center ">
      <PinContainer
        title={pinTitle}
        href={href || "#"}
        cardClassName="bg-gray-900 pb-8"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <Image
            src={thumbnail}
            height={"240"}
            width={"360"}
            alt="blog"
            className="w-full h-full mb-4"
          />
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 !mb-4 font-normal">
            <span className="text-slate-500 ">{description}</span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-2 items-center">
              {stacks?.map((stack, index) => (
                <Image
                  key={index}
                  src={`./${stack}.svg`}
                  alt={stack}
                  height={"24"}
                  width={"24"}
                  className="w-[24px] h-[24px] bg-gray-900 !rounded-full p-1 border-[1px] border-teal-500 shadow-md shadow-teal-500"
                />
              ))}
            </div>
            {href && (
              <p className="font-semibold text-neutral-600 text-sm mt-2 dark:text-neutral-400">
                Check Live Site 🫵
              </p>
            )}
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default ListProject;
