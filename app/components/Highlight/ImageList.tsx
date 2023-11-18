import { ImageType } from ".";

type props = {
  imageList: ImageType[];
  imageNumber: number;
};
export default function ImageList({ imageList, imageNumber }: props) {
  return (
    <div className="fixed bottom-4 right-4 transition duration-500 md:hidden">
      {imageList &&
        imageList.map((item) => {
          return (
            <div
              className={`border-1 relative w-[150px] rounded-2xl border-white bg-white ${
                imageNumber === item.id ? "block" : "hidden"
              }`}
              key={item.id}
            >
              <img
                className="rounded-2xl border-[4px] border-white object-cover"
                src={item.url}
                alt="Image"
              />
            </div>
          );
        })}
    </div>
  );
}
