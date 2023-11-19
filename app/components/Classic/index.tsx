import ListItem from "./ListItem";

export default function Classic() {
  return (
    <section
      id="new"
      className="lg:padding-classic-lg 2xl:padding-classic-2xl w-full px-6 pb-[5.5rem] pt-20"
    >
      <div className="mx-auto my-0 max-w-[50rem] lg:max-w-[72.5rem] 2xl:max-w-[100rem]">
        <h2 className="lg:text-classic-lg 2xl:text-classic-2xl mb-8 text-center text-[3.375rem] font-bold leading-[1.037] tracking-tight text-white lg:mb-[4.5rem] 2xl:mb-[7.5rem]">
          Meet a new kinda classic
        </h2>
        <ListItem />
      </div>
    </section>
  );
}
