import CarouselBestSeller from "./Carousel";

export default function BestSeller() {
  return (
    <section id="#bestsellers" className="mt-[5rem] pb-[7rem]">
      <h2 className="mb-[1.8125rem] px-[1.5rem] text-[3rem] font-[700] leading-[1.16] -tracking-[.02em] text-white lg:text-[3.5rem] xl:px-32 xl:pt-12 2xl:px-24 2xl:pt-20 2xl:text-[4rem]">
        Best Sellers
      </h2>
      <CarouselBestSeller />
    </section>
  );
}
