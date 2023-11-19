"use client";
import Content from "./Content";
import FrameImage from "./FrameImage";
import { useEffect, useRef, useState } from "react";
import ImageList from "./ImageList";

export type ImageType = {
  id: number;
  url: string;
};
export default function Highlight() {
  const textRef = useRef<HTMLDivElement>(null);
  const [lineShow, setLineShow] = useState<number>(0);
  const imageList: ImageType[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1617194530354-12ef4151d506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhY2twYWNrfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1568736333626-be878c584b98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJhY2twYWNrfGVufDB8fDB8fHww",
    },
  ];
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
    } else {
      return setLineShow(0);
    }
  };
  return (
    <section id="story" className="mx-10 py-10 lg:mx-24 lg:my-24 2xl:mx-32">
      <div
        className="grid grid-cols-3 gap-x-2 xl:gap-x-10 2xl:grid-cols-4 2xl:gap-0"
        ref={textRef}
      >
        <FrameImage imageList={imageList} imageNumber={lineShow} />
        <Content lineShow={lineShow} />
        <ImageList imageList={imageList} imageNumber={lineShow} />
      </div>
    </section>
  );
}
