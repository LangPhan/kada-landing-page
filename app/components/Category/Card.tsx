type props = {
  image: string;
  title: string;
};
export default function Card({ image, title }: props) {
  return (
    <div className="relative h-[430px] w-[340px]">
      <img
        className="h-full rounded-3xl object-cover"
        src={image}
        alt={title}
      />
      <div className="absolute bottom-4 left-6 w-fit cursor-pointer rounded-[3rem] bg-white px-[2rem] py-[0.75rem] hover:bg-[#ffffff6b] hover:transition-colors">
        <span className="font-semibold text-[#15151f]">{title}</span>
      </div>
    </div>
  );
}
