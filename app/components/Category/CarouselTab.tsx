"use client";
import { useRef, useState } from "react";
import Card from "./Card";

interface CarouselTabProps {}

const CarouselTab: React.FC<CarouselTabProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const imageList = [
    {
      url: "https://github.com/LangPhan/kada-landing-page/blob/main/public/balo/balo-chong-nuoc.jpg?raw=true",
      title: "Women",
    },
    {
      url: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJhY2twYWNrfGVufDB8fDB8fHww",
      title: "Women",
    },
    {
      url: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJhY2twYWNrfGVufDB8fDB8fHww",
      title: "Women",
    },
    {
      url: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJhY2twYWNrfGVufDB8fDB8fHww",
      title: "Women",
    },
  ];
  return (
    <div
      className="scrollable h-full cursor-grab select-none snap-mandatory scroll-p-7 overflow-y-hidden scroll-smooth whitespace-nowrap px-6"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {imageList &&
        imageList.map((item, index) => {
          return <Card key={index} image={item.url} title={item.title} />;
        })}
    </div>
  );
};

export default CarouselTab;
