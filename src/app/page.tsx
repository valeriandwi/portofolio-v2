"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";

export default function Home() {
  return (
    <div className="dark  text-white">
      <div className="min-h-screen dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
        <div className="max-w-7xl mx-auto sm:p-5">
          <nav className="py-10">
            <h1 className="animate-in text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-teal-500 text-shadow-lg shadow-teal-500 -rotate-2">
              Valerian Dwi Purnomo 🧑‍💻
            </h1>
          </nav>
          <div className="min-h-[60vh] flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between">
            <div className="space-y-10 text-center lg:text-left">
              <h1 className="text-4xl lg:text-7xl font-bold">
                Nice to meet you ! 👋 <br />
                <span className=" decoration-teal-500">
                  I&apos;m{" "}
                  <span className="underline underline-offset-8 decoration-teal-500 text-shadow-lg shadow-teal-500  text-white">
                    Valerian
                  </span>
                </span>
              </h1>
              <div className="text-lg text-gray-300">
                Based on Indonesia, I&apos;m Frontend Developer who passionate
                about
                <FlipWords
                  className="!text-white text-shadow-lg shadow-teal-500 "
                  words={["Web", "Data"]}
                />
              </div>
              <Button
                containerClassName="bg-teal-800 hover:bg-teal-900"
                borderRadius="0.5rem"
                className="p-3 font-semibold"
              >
                <p>Contact Me 🤙🏻</p>
              </Button>
            </div>
            <div className="w-36 h-36 lg:w-72 lg:h-72 relative">
              <div className="glow absolute top-[40%] right-1/2" />
              <div
                className="absolute w-full h-full rounded-full bg-white z-[999]"
                style={{ backgroundImage: "url('./next.svg')" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
