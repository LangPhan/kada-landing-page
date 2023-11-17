import Card from "./Card";

export default function ListItem() {
  return (
    <div className="grid grid-flow-row gap-5 sm:grid-flow-col sm:grid-cols-3 sm:first-letter:grid-rows-[1fr]">
      <div className="">
        <Card />
        <Card />
      </div>
      <div className="">
        <Card />
        <Card />
      </div>
      <div className="">
        <Card />
        <Card />
      </div>
    </div>
  );
}
