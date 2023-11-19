export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="mt-10 w-full px-10 text-center text-white">
      <p>{`Kada ${currentYear}`}</p>
    </footer>
  );
}
