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
      big: "https://product.hstatic.net/200000135949/product/10_48f424b593494750b92df82243da8d14_master.jpg",
      medium:
        "https://product.hstatic.net/200000135949/product/web3_9758eeea7e8b41eea7f543b603829893_master.jpg",
      small:
        "https://product.hstatic.net/200000135949/product/web2_4c4f55ae34784a1e8959b5452ebecda1_master.jpg",
    },
    {
      id: 2,
      big: "https://product.hstatic.net/200000135949/product/scar_0358_9e8261fd6d624ff1983f667752bf0eb6_master.jpg",
      medium:
        "https://product.hstatic.net/200000135949/product/3_82fb06cd4ad1479fbd72596fbf434ded_master.jpg",
      small:
        "https://product.hstatic.net/200000135949/product/2_40b7bb7288c74e2287c084b8ba9e14b1_master.jpg",
    },
    {
      id: 3,
      big: "https://product.hstatic.net/200000135949/product/6_e1e3e397831c45f7a2070d85e668c950_master.jpg",
      medium:
        "https://product.hstatic.net/200000135949/product/3_3e56303ba0244fe08e47320597280227_master.jpg",
      small:
        "https://product.hstatic.net/200000135949/product/1_d8d91000e5e54adb814ee4418069468a_master.jpg",
    },
  ];
  const [item, setItem] = useState<Item>(items[0]);
  return (
    <section
      id="gravity"
      className="relative bg-white px-6 pb-[1.9375rem] pt-12 after:absolute after:-bottom-[1.9375rem]
     after:left-0 after:h-8 after:w-full after:rounded-b-3xl after:bg-white after:content-[''] lg:py-10 2xl:py-32 
    2xl:before:-top-[2.4375rem] 2xl:before:h-10
    2xl:before:rounded-t-[2.5rem] 2xl:after:-bottom-[2.4375rem] 2xl:after:h-10 2xl:after:rounded-b-[2.5rem]"
    >
      <div className="md:grid-md lg:grid-lg 2xl:grid-2xl grid">
        <Content url={item.medium} />
        <Album listImages={items} item={item} setItem={setItem} />
      </div>
    </section>
  );
}
