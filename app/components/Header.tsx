import CenterMenu from "./menus/CenterMenu";
import LeftMenu from "./menus/LeftMenu";
import RightMenu from "./menus/RightMenu";

export default function Header() {
  return (
    <header className="absolute top-0 z-50 mx-auto grid h-[85px] w-full grid-cols-3 px-4 text-[16px] font-semibold leading-[1.4] text-white lg:px-12">
      <LeftMenu />
      <CenterMenu />
      <RightMenu />
    </header>
  );
}
