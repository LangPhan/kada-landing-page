import CarouselTab from "./CarouselTab";
import Content from "./Content";

export default function Category() {
  return (
    <section
      className="relative h-full w-full bg-white pb-[2.5rem] pt-[1rem]
    before:absolute before:-top-[1.9375rem] before:left-0 before:h-8 before:w-full 
    before:rounded-t-3xl before:bg-white before:content-['']
    2xl:pb-24 2xl:before:-top-[2.4375rem] 2xl:before:h-10 2xl:before:rounded-t-[2.5rem]"
    >
      <Content />
      <CarouselTab />
    </section>
  );
}
