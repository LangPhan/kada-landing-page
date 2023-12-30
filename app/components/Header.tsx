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
  const [isOpenNav, setIsOpenNav] = useState(false);

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
        isScrollUp && !isOpenNav
          ? "background-wrapper fixed left-[2.5%] top-10 max-w-[95%] rounded-3xl shadow-md"
          : "absolute top-0"
      } z-50 mx-auto grid h-[70px] w-full grid-cols-3 px-4 text-[16px] font-semibold leading-[1.4] text-white transition-all duration-500 lg:px-12`}
    >
      <LeftMenu isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
      <CenterMenu />
      <RightMenu />
    </header>
  );
}
