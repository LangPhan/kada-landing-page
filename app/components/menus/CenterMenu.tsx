import Logo from "../icons/Logo";

export default function CenterMenu() {
  return (
    <div className="relative flex items-center justify-center">
      <Logo variant="absolute md:h-[200px] xl:h-[300px] 2xl:h-[400px] xl:translate-y-[20px]" />
    </div>
  );
}
