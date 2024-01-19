export default function Bottom() {
  return (
    <div className="flex w-full justify-evenly py-10 md:flex-col lg:col-span-2 lg:flex-row lg:justify-between lg:gap-10">
      <div className="w-[96px] rounded-3xl xl:w-[192px]">
        <img
          className="animate-floatDown rounded-3xl object-cover"
          src="https://www.rollienation.com/cdn/shop/files/influencer-3_224x.webp?v=1659490508"
          alt="Image"
          loading="lazy"
        />
      </div>
      <div className="w-[120px] animate-floatUp rounded-3xl xl:w-[240px]">
        <img
          className="rounded-3xl object-cover"
          src="https://www.rollienation.com/cdn/shop/files/influencer-4_280x.webp?v=1659490523"
          alt="Image"
          loading="lazy"
        />
      </div>
    </div>
  );
}
