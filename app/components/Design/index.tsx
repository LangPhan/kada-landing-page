"use client";
import Lottie from "lottie-react";
import Content from "./Content";
import backBack from "@/app/Lottie/backpack2.json";

export default function Design() {
  return (
    <section
      className="relative bg-white px-6 pb-[1.9375rem] pt-12 before:absolute before:-top-[1.9375rem] before:left-0 before:h-8 before:w-full before:rounded-t-3xl before:bg-white 
    before:content-[''] after:absolute after:-bottom-[1.9375rem]
     after:left-0 after:h-8 after:w-full after:rounded-b-3xl after:bg-white after:content-[''] lg:py-10 2xl:py-12 
    2xl:before:-top-[2.4375rem] 2xl:before:h-10
    2xl:before:rounded-t-[2.5rem] 2xl:after:-bottom-[2.4375rem] 2xl:after:h-10 2xl:after:rounded-b-[2.5rem]"
    >
      <div className="md:grid-md lg:grid-lg 2xl:grid-2xl grid">
        <Content />
        <Lottie animationData={backBack} loop={true} autoplay={true} />
      </div>
    </section>
  );
}
