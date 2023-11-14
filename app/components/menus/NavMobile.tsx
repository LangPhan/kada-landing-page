import { Dispatch, SetStateAction } from "react";
import { MarkIcon } from "../icons/MenuIcon";
type props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export default function NavMobile({ isOpen, setIsOpen }: props) {
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
    </nav>
  );
}
