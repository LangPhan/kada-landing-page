"use client";
import { useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import NavMobile from "./NavMobile";
import Link from "next/link";

export default function LeftMenu() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const leftNavList: String[] = [
    "Hero",
    "Categories",
    "Best Sellers",
    "Gravity",
  ];
  return (
    <>
      <div className="flex w-full items-center justify-start gap-2 xl:hidden">
        <button onClick={() => setIsOpenNav(true)}>
          <MenuIcon variant="h-8 w-8 transition-all hover:rotate-90" />
        </button>
        <NavMobile isOpen={isOpenNav} setIsOpen={setIsOpenNav} />
      </div>
      <nav className="hidden min-h-fit xl:block 2xl:px-[3rem] 2xl:text-lg">
        <ul className="flex h-full justify-between gap-2">
          {leftNavList &&
            leftNavList.map((nav, index) => {
              return (
                <li
                  key={index}
                  className="hover:after:scale-1000 relative flex h-full w-fit cursor-pointer items-center transition-transform duration-200 after:absolute after:bottom-4
                after:right-[50%] after:hidden after:translate-x-[50%] after:text-xs after:transition-all after:content-['o'] hover:-translate-y-2 hover:after:block"
                >
                  <a href={`#${nav.toLowerCase().replace(" ", "")}`}>{nav}</a>
                </li>
              );
            })}
        </ul>
      </nav>
    </>
  );
}
