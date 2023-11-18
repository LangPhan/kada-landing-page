export default function Top() {
  return (
    <div className="flex w-full justify-evenly py-10 lg:col-span-2 lg:flex-row lg:justify-between">
      <div className="animate-floatUp w-[96px] rounded-3xl xl:w-[192px]">
        <img
          className="rounded-3xl object-cover"
          src="https://www.rollienation.com/cdn/shop/files/influencer-1_224x.webp?v=1659490475"
          alt="Image"
        />
      </div>
      <div className="animate-floatDown w-[120px] rounded-3xl xl:w-[240px]">
        <img
          className="rounded-3xl object-cover"
          src="https://www.rollienation.com/cdn/shop/files/influencer-2_200x.webp?v=1659490489"
          alt="Image"
        />
      </div>
    </div>
  );
}
