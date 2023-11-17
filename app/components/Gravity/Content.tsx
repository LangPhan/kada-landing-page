type props = {
  url: string;
};
export default function Content({ url }: props) {
  return (
    <div className="mb-10 lg:ml-10 2xl:ml-56">
      <h3 className="mb-3 text-[.875rem] font-bold uppercase leading-[1.43] tracking-[.16em] lg:text-base 2xl:mb-6">
        Meet the enemies of gravity
      </h3>
      <h2 className="lg:text-c-lg 2xl:text-c-2xl mb-4 text-[3rem] font-bold leading-[1.16] tracking-tight md:mb-6 lg:mb-12 2xl:mb-20">
        A color for every foot
      </h2>
      <p className="lg:width-c-lg 2xl:width-c-2xl my-0 ml-auto mr-0 w-[90.21%] text-base font-medium 2xl:text-xl">
        Our community makes us unique. They have an energy that reverberates
        around them. Their mission in life is to ensure the wonder in the world
        is not overlooked.
      </p>
      <div className="lg:width-c-lg 2xl:width-c-2xl my-0 ml-auto mr-0 hidden aspect-[3.5/4] w-[90.21%] text-base font-medium md:block 2xl:text-xl">
        <img
          className="aspect-[3.5/4] w-full rounded-xl"
          src={url}
          alt="image"
        />
      </div>
    </div>
  );
}
