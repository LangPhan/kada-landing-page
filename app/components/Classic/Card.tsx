"use client";

import { useState } from "react";
import { Image } from "./ListItem";

export default function Card({ image }: { image: Image }) {
  const [isShowBack, setIsBackShow] = useState<boolean>(false);
  return (
    <div
      key={image.id}
      onMouseEnter={() => setIsBackShow(true)}
      onMouseLeave={() => setIsBackShow(false)}
      className="relative mb-4 aspect-[1/1.1] w-full rounded-2xl bg-white hover:cursor-pointer"
    >
      <img
        className={`absolute inset-0 h-full w-full rounded-2xl object-fill ${
          isShowBack && "hidden"
        }`}
        src={image.frontImage}
        alt="image"
      />
      <img
        className={`${
          isShowBack ? "block" : "hidden"
        } absolute inset-0 h-full w-full rounded-2xl object-fill`}
        src={image.backImage}
        alt="image"
      />
    </div>
  );
}
