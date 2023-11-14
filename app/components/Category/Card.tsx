type props = {
  image: string;
  title: string;
};
export default function Card({ image, title }: props) {
  return (
    <div className="dynamic-width lg:dynamic-width-lg 2xl:dynamic-width-xl relative mr-6 inline-block aspect-[0.8] snap-start overflow-hidden rounded-[2.5rem] last:mr-0">
      <div
        className="absolute inset-0 origin-center bg-cover bg-center transition-transform hover:scale-125"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute bottom-4 left-6 w-fit cursor-pointer rounded-[3rem] bg-white px-[2rem] py-[0.75rem] hover:bg-[#ffffff6b] hover:transition-colors">
        <span className="font-semibold text-[#15151f]">{title}</span>
      </div>
    </div>
  );
}
