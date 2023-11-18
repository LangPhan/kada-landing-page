"use client";

import { useState } from "react";
import Album from "./Album";
import Content from "./Content";

export type Item = {
  id: number;
  big: string;
  medium: string;
  small: string;
};

export default function Gravity() {
  const items: Item[] = [
    {
      id: 1,
      big: "https://www.rollienation.com/cdn/shop/files/Men_78afae33-0da4-4908-910b-d6177235d722_550x.jpg?v=1655780752",
      medium:
        "https://www.rollienation.com/cdn/shop/files/Men_78afae33-0da4-4908-910b-d6177235d722_550x.jpg?v=1655780752",
      small:
        "https://www.rollienation.com/cdn/shop/files/Homepage-Focus-Image-Weekender-Pastel-Leopard_955f54b1-fa5f-4da3-b0be-d7d8fa719328_414x.png?v=1680505213",
    },
    {
      id: 2,
      big: "https://www.rollienation.com/cdn/shop/files/Womens-mobile_550x.jpg?v=1657253928",
      medium: "",
      small:
        "https://www.rollienation.com/cdn/shop/files/Homepage-Focus-Image-Weekender-Pastel-Leopard_955f54b1-fa5f-4da3-b0be-d7d8fa719328_414x.png?v=1680505213",
    },
    {
      id: 3,
      big: "https://www.rollienation.com/cdn/shop/files/derby-mobile_8d34df91-19ca-487f-a37a-ecd34bd9a150_550x.jpg?v=1655780629",
      medium: "",
      small:
        "https://www.rollienation.com/cdn/shop/files/Homepage-Focus-Image-Weekender-Pastel-Leopard_955f54b1-fa5f-4da3-b0be-d7d8fa719328_414x.png?v=1680505213",
    },
  ];
  const [item, setItem] = useState<Item>(items[0]);
  return (
    <section className="relative bg-white px-6 pb-[1.9375rem] pt-12 lg:py-10 2xl:py-32">
      <div className="md:grid-md lg:grid-lg 2xl:grid-2xl grid">
        <Content url={item.medium} />
        <Album listImages={items} item={item} setItem={setItem} />
      </div>
    </section>
  );
}