export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="mt-10 w-full px-10 pb-2 pt-6  text-center text-white">
      <p className="pb-3">
        Address: 12th Floor – A2, Viettel Commercial Center Executive Office
        Building, 285 Cach Mang Thang Tam, Ward 12, District 10, Ho Chi Minh
        City
      </p>
      <p className="pb-3">Email: 247@kada.vn - Tel: +84 913 626 066</p>
      <p>{`© Copyright by Kada ${currentYear}`}</p>
    </footer>
  );
}
