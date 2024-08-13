import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Introduction = () => {
  return (
    <div className="min-h-screen dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
      <div className="max-w-7xl mx-auto sm:p-5">
        <nav className="py-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
            viewport={{ once: true }}
          >
            <h1 className="lg:px-0 px-4 text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-teal-500 text-shadow-lg shadow-teal-500 -rotate-2">
              Valerian Dwi Purnomo 🧑‍💻
            </h1>
          </motion.div>
        </nav>
        <div className="min-h-[60vh] flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between">
          <div className="space-y-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 1.1 } }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h1 className="text-4xl lg:text-7xl font-bold">
                Nice to meet you ! 👋 <br />
                <span className=" decoration-teal-500">
                  I&apos;m{" "}
                  <span className="underline underline-offset-8 decoration-teal-500 text-shadow-lg shadow-teal-500  text-white">
                    Valerian
                  </span>
                </span>
              </h1>
              <div className="text-lg text-gray-300 leading-4">
                <p>
                  Based in Indonesia who specializing in creating responsive and
                  user-friendly web applications.
                </p>
                <br />
                <span className="text-shadow-lg shadow-teal-500">
                  Let&apos;s work together to bring your ideas to life
                </span>
              </div>{" "}
            </motion.div>
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1, transition: { delay: 2 } }}
              viewport={{ once: true }}
            >
              <div className="flex flex-row space-x-3 justify-center w-full lg:justify-start">
                <Link href="https://github.com/valeriandwi">
                  <Button
                    containerClassName="rounded-xl w-[40px] h-[40px] bg-teal-800 hover:bg-teal-900"
                    borderRadius="50%"
                    className="font-semibold"
                    borderClassName="rounded-full w-[40px] h-[40px]"
                  >
                    <Image
                      src="./github.svg"
                      height={"48"}
                      width={"48"}
                      alt="Github Icon"
                    />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/valeriandwi/">
                  <Button
                    containerClassName="rounded-full w-[40px] h-[40px] bg-teal-800 hover:bg-teal-900"
                    borderRadius="50%"
                    className="font-semibold"
                    borderClassName="rounded-full w-[40px] h-[40px]"
                  >
                    <Image
                      src="./linkedin.svg"
                      height={"48"}
                      width={"48"}
                      alt="Github Icon"
                    />
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/valerian_dwi/">
                  <Button
                    containerClassName="rounded-full w-[40px] h-[40px] bg-teal-800 hover:bg-teal-900"
                    borderRadius="50%"
                    className="font-semibold"
                    borderClassName="rounded-full w-[40px] h-[40px]"
                  >
                    <Image
                      src="./instagram.svg"
                      height={"48"}
                      width={"48"}
                      alt="Github Icon"
                    />
                  </Button>
                </Link>
                <a href="./VALERIAN-DWI-PURNOMO-CV.pdf" download>
                  <Button
                    containerClassName="!bg-teal-800 hover:!bg-teal-900"
                    className="font-semibold bg-black hover:bg-gray-900"
                    borderClassName="rounded-full"
                  >
                    Download My CV
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-36 h-36 lg:w-72 lg:h-72 relative"
          >
            <div className="glow absolute top-[40%] right-1/2" />
            <div
              className="absolute w-full h-full rounded-full bg-white z-[999] bg-cover"
              style={{ backgroundImage: "url('./profile-picture.jpeg')" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
