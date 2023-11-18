import { ImageType } from ".";

type props = {
  imageList: ImageType[];
  imageNumber: number;
};
export default function FrameImage({ imageList, imageNumber }: props) {
  return (
    <div className="hidden flex-col gap-10 md:col-span-1 md:flex 2xl:col-span-2 2xl:items-center">
      <div className="border-1 relative w-[150px] rounded-2xl lg:w-[250px]">
        <img
          className={`rounded-2xl border-[4px] 2xl:translate-x-[-50%] ${
            imageNumber === imageList[0].id
              ? "border-white"
              : "border-slate-300"
          } object-cover`}
          src={imageList[0].url}
          alt="Image"
        />
      </div>
      <div className="border-1 relative w-[100px] translate-x-[-20%] rounded-2xl xl:w-[200px] xl:translate-x-[-30%]">
        <img
          className={`rounded-2xl border-[4px] ${
            imageNumber === imageList[1].id
              ? "border-white"
              : "border-slate-300"
          } object-cover`}
          src={imageList[1].url}
          alt="Image"
        />
      </div>
      <div className="border-1 relative w-[180px] translate-x-[40%] rounded-2xl xl:w-[280px]">
        <img
          className={`aspect-square rounded-2xl border-[4px] ${
            imageNumber === imageList[2].id
              ? "border-white"
              : "border-slate-300"
          } object-cover`}
          src={imageList[2].url}
          alt="Image"
        />
      </div>
      <div className="border-1 relative w-[100px] rounded-2xl lg:w-[200px] 2xl:translate-x-[-50%]">
        <img
          className={`aspect-square rounded-2xl border-[4px] ${
            imageNumber === imageList[3].id
              ? "border-white"
              : "border-slate-300"
          } object-cover`}
          src={imageList[3].url}
          alt="Image"
        />
      </div>
    </div>
  );
}
