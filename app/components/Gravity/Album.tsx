import { Dispatch, SetStateAction } from "react";
import { Item } from ".";

type props = {
  listImages: Item[];
  item: Item;
  setItem: Dispatch<SetStateAction<Item>>;
};
export default function Album({ listImages, item, setItem }: props) {
  const changeImage = (id: number) => {
    setItem(listImages[id - 1]);
  };
  return (
    <div className="width-[90.21%] relative ml-auto block lg:w-full lg:justify-start lg:gap-4 xl:flex">
      <img
        className="mb-4 w-full rounded-[1.5rem] lg:aspect-[3/4]"
        src={item.big}
        alt="image"
      />
      <div className="flex justify-end gap-4 xl:flex-col xl:justify-center">
        {listImages.map((image) => {
          return (
            <span
              key={image.id}
              className={`h-16 w-16 rounded-full ${
                item.id === image.id && "bg-green-600"
              } cursor-pointer`}
              onClick={() => changeImage(image.id)}
            >
              <img
                className="aspect-square w-[92%] translate-x-[4%] translate-y-[4%] rounded-full border-2 border-white"
                src={image.small}
                alt="image"
              />
            </span>
          );
        })}
      </div>
      <div className="absolute -left-6 top-8 ml-2 aspect-[3.5/4] w-[40%] rounded-lg border-[3px] border-white bg-white sm:-left-8 md:hidden">
        <img
          className="aspect-[3.5/4] w-full rounded-lg"
          src="https://www.rollienation.com/cdn/shop/files/Men_78afae33-0da4-4908-910b-d6177235d722_550x.jpg?v=1655780752"
          alt="image"
        />
      </div>
    </div>
  );
}
