import { Dispatch, SetStateAction } from "react";
import { MarkIcon, RightIcon } from "../icons/MenuIcon";
import Link from "next/link";
type props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export default function NavMobile({ isOpen, setIsOpen }: props) {
  const navList = [
    "Hero",
    "Categories",
    "Best Sellers",
    "Gravity",
    "Story",
    "Design Process",
    "New",
    "Contact",
  ];
  return (
    <nav
      className={`${
        isOpen ? "block" : "hidden"
      } fixed bottom-6 left-4 right-4 top-6 z-[310] mx-auto h-[90%] w-[90%] rounded-3xl bg-white shadow-lg transition-all`}
    >
      <div className="m-h-[88px] relative flex items-center justify-center py-6">
        <a href="" className="text-4xl text-black">
          Logo
        </a>
        <button
          className="absolute right-4 top-5 text-black hover:text-red-500"
          onClick={() => setIsOpen(false)}
        >
          <MarkIcon />
        </button>
      </div>
      <div className="px-10">
        <ul className="space-y-8">
          {navList &&
            navList.map((nav, index) => {
              return (
                <li className="font-base font-semibold text-black" key={index}>
                  <Link
                    className="flex justify-between"
                    href={`#${nav.toLowerCase().replace(" ", "")}`}
                  >
                    <span>{nav}</span>
                    <span>
                      <RightIcon variant="w-6 h-6" />
                    </span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
}
