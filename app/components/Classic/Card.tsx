"use client";

import { useState } from "react";
type props = {
  frontImageUrl: string;
  backImageUrl: string;
};
export default function Card() {
  const [isShowBack, setIsBackShow] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsBackShow(true)}
      onMouseLeave={() => setIsBackShow(false)}
      className="relative mb-4 aspect-[1/1.1] w-full rounded-2xl bg-white hover:cursor-pointer"
    >
      <img
        className={`absolute inset-0 h-full w-full rounded-2xl object-cover ${
          isShowBack && "hidden"
        }`}
        src="	https://www.rollienation.com/cdn/shop/files/Chukka-Mens-Stack-Sand_520x.jpg?v=1672893019"
        alt="image"
      />
      <img
        className={`${
          isShowBack ? "block" : "hidden"
        } absolute inset-0 h-full w-full rounded-2xl object-cover`}
        src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/Rollie_Shot_25_DerbyCityPunchWhite_2640_x800.jpg?v=1693367062"
        alt="image"
      />
    </div>
  );
}
