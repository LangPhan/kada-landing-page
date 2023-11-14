type props = {
  content: String;
};
export default function Marquee({ content }: props) {
  return (
    <p className="animate-moveUp w-full overflow-hidden py-10">
      <span className="translate3d relative flex w-fit animate-marquee">
        <span className="my-1 overflow-hidden whitespace-nowrap py-2 pr-10 text-8xl font-[900] text-white 2xl:text-[8rem]">
          {content}
        </span>
        <span className="overflow-hidden whitespace-nowrap py-2 pr-10 text-8xl font-[900] text-white 2xl:text-[8rem]">
          {content}
        </span>
        <span className="overflow-hidden whitespace-nowrap py-2 pr-10 text-8xl font-[900] text-white 2xl:text-[8rem]">
          {content}
        </span>
        <span className="overflow-hidden whitespace-nowrap py-2 pr-10 text-8xl font-[900] text-white 2xl:text-[8rem]">
          {content}
        </span>
      </span>
    </p>
  );
}
