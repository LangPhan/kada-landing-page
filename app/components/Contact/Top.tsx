export default function Top() {
  return (
    <div className="flex w-full justify-evenly py-10 lg:col-span-2 lg:flex-row lg:justify-between">
      <div className="w-[96px] animate-floatUp rounded-3xl xl:w-[192px]">
        <img
          className="rounded-3xl object-cover"
          src="https://www.rollienation.com/cdn/shop/files/influencer-1_224x.webp?v=1659490475"
          alt="Image"
          loading="lazy"
        />
      </div>
      <div className="w-[120px] animate-floatDown rounded-3xl xl:w-[240px]">
        <img
          className="rounded-3xl object-cover"
          src="https://www.rollienation.com/cdn/shop/files/influencer-2_200x.webp?v=1659490489"
          alt="Image"
          loading="lazy"
        />
      </div>
    </div>
  );
}
