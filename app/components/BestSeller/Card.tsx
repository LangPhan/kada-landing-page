type props = {
  image: string;
  title: string;
};
export default function Card({ image, title }: props) {
  return (
    <div className="dynamic-width-br lg:dynamic-width-br-lg 2xl:dynamic-width-br-xl relative mr-6 inline-block aspect-[0.8] snap-start overflow-hidden rounded-[1.5rem] pb-2 last:mr-0">
      <div
        className="absolute inset-0 origin-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute bottom-0 w-full cursor-pointer bg-white px-[1.4735rem] pb-[1.4735rem] pt-2">
        <span className="text-[.875rem] font-semibold leading-[1.57] text-[#15151f]">
          {title}
        </span>
      </div>
    </div>
  );
}
