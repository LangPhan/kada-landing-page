"use client";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import databases from "@/app/database";

interface CarouselTabProps {}

const CarouselBestSeller: React.FC<CarouselTabProps> = () => {
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
  const [imageList, setImageList] = useState<any>([]);
  useEffect(() => {
    const db = databases.listDocuments("658e89bbb8f852147120", "product");
    db.then(
      function (response) {
        return setImageList([...response.documents]);
      },
      function (error) {
        console.log(error);
      },
    );
  }, []);
  return (
    <div
      className="scrollable h-full cursor-grab select-none snap-mandatory scroll-p-7 overflow-y-hidden scroll-smooth whitespace-nowrap px-6 pb-[0.0625rem]"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {imageList &&
        imageList.map((item: any, index: any) => {
          return <Card key={index} image={item.images[0]} title={item.name} />;
        })}
    </div>
  );
};

export default CarouselBestSeller;
