import { Dispatch, SetStateAction } from "react";
import { Item } from ".";
import { url } from "inspector";

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
    <div className="relative ml-auto block w-full lg:justify-start lg:gap-4 xl:flex">
      <div
        className="mb-2 min-h-[650px] w-[100%]  rounded-[1.5rem] bg-cover bg-center lg:max-w-[90%] xl:min-h-[750px]"
        style={{ backgroundImage: `url(${item.big})` }}
      ></div>
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
                loading="lazy"
                src={image.small}
                alt="image"
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
