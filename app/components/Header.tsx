"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import CenterMenu from "./menus/CenterMenu";
import LeftMenu from "./menus/LeftMenu";
import RightMenu from "./menus/RightMenu";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [currentPos, setCurrentPos] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (currentPos > latest && scrollY.get() > 50) {
      setIsScrollUp(true);
    } else {
      setIsScrollUp(false);
    }
    setCurrentPos(latest);
  });
  return (
    <header
      className={`${
        isScrollUp
          ? "fixed top-10 rounded-3xl bg-slate-400 transition-all "
          : "absolute top-0"
      } z-50 mx-auto grid h-[85px] w-full grid-cols-3 px-4 text-[16px] font-semibold leading-[1.4] text-white lg:px-12`}
    >
      <LeftMenu />
      <CenterMenu />
      <RightMenu />
    </header>
  );
}
