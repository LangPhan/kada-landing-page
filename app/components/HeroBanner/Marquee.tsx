"use client";
import { motion } from "framer-motion";

type props = {
  content: String;
};

export default function Marquee({ content }: props) {
  return (
    <motion.p
      className="animate-moveUp w-full overflow-hidden py-10"
      initial={{ x: 50, y: 100 }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="translate3d relative flex w-fit animate-marquee">
        <span className="lg:text-title-lg 2xl:text-title-xl my-1 overflow-hidden whitespace-nowrap py-2 pr-10 text-8xl font-[800] tracking-normal text-white lg:my-2 xl:my-4">
          {content}
        </span>
        <span className="lg:text-title-lg 2xl:text-title-xl overflow-hidden whitespace-nowrap py-2 pr-10 text-8xl font-[800] tracking-normal text-white">
          {content}
        </span>
        <span className="lg:text-title-lg 2xl:text-title-xl overflow-hidden whitespace-nowrap py-2 pr-10 text-8xl font-[800] tracking-normal text-white">
          {content}
        </span>
        <span className="lg:text-title-lg 2xl:text-title-xl overflow-hidden whitespace-nowrap py-2 pr-10 text-8xl font-[800] tracking-normal text-white">
          {content}
        </span>
      </span>
    </motion.p>
  );
}
