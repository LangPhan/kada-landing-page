"use client";
import Content from "./Content";
import FrameImage from "./FrameImage";
import { useEffect, useRef, useState } from "react";

export default function Highlight() {
  const textRef = useRef<HTMLDivElement>(null);
  const [lineShow, setLineShow] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  const onscroll = () => {
    let textProperty = textRef.current?.getBoundingClientRect();
    if (textProperty && textProperty.top > 0) {
      let height: number = textProperty.height - textProperty.x;
      let medium: number = height / 4;
      let top: number = textProperty.top + textProperty.x;
      console.log(textProperty);

      if (height - medium < top && top < height) {
        return setLineShow(1);
      }
      if (height - 2 * medium < top && top < height - medium) {
        return setLineShow(2);
      }
      if (height - 3 * medium < top && top < height - 2 * medium) {
        return setLineShow(3);
      }
      if (top < height - 3 * medium && top > 0) {
        return setLineShow(4);
      }
      return setLineShow(0);
    }
  };
  return (
    <section className="mx-10 py-10 lg:mx-24 lg:my-24 2xl:mx-32">
      <div className="grid grid-cols-3 gap-x-2" ref={textRef}>
        <FrameImage />
        <Content lineShow={lineShow} />
      </div>
    </section>
  );
}
