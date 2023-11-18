import Link from "next/link";
import { HearIcon } from "../icons/MenuIcon";

export default function RightMenu() {
  const rightNavList: String[] = ["Story", "Design Process", "New", "Contact"];
  return (
    <>
      <div className="flex items-center justify-end gap-2 xl:hidden">
        <HearIcon variant="h-8 w-8 hover:fill-white" />
      </div>
      <nav className="hidden xl:block 2xl:px-[3rem] 2xl:text-lg">
        <ul className="flex h-full justify-between gap-2">
          {rightNavList &&
            rightNavList.map((nav, index) => {
              return (
                <li
                  key={index}
                  className="hover:after:scale-1000 relative flex h-full cursor-pointer items-center transition-transform duration-200 after:absolute after:bottom-4
                after:right-[50%] after:hidden after:translate-x-[50%] after:text-xs after:transition-all after:content-['o'] hover:-translate-y-2 hover:after:block"
                >
                  <Link href={`#${nav.toLowerCase().replace(" ", "")}`}>
                    {nav}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </>
  );
}
