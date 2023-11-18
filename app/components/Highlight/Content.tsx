"use client";

type props = {
  lineShow: number;
};
export default function Content({ lineShow }: props) {
  return (
    <div className="col-span-3 sm:col-span-2">
      <p className="mb-6 text-[2.375rem] font-semibold leading-[1.26] tracking-normal">
        <span
          className={`${
            lineShow === 1 && "text-white"
          } transition-colors duration-1000`}
        >
          Your should work hard and deserve the very best.
        </span>
        <span
          className={`${
            lineShow === 2 && "text-white"
          } transition-colors duration-1000`}
        >
          It’s why we make backpack that take the pressure off.
        </span>
      </p>
      <p className="text-[2.375rem] font-semibold leading-[1.26]">
        <span
          className={`${
            lineShow === 3 && "text-white"
          } transition-colors duration-1000`}
        >
          We’re KADA, enemies of gravity and innovators of comfort.
        </span>
        <span
          className={`${
            lineShow === 4 && "text-white"
          } transition-colors duration-1000`}
        >
          We believe that looking good and feeling good aren’t mutually
          exclusive so we reimagined the everyday backpack.
        </span>
      </p>
    </div>
  );
}
