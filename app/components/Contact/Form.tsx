export default function Form() {
  return (
    <div className="form-contact">
      <h2 className="form-contact__title text-[3.375rem] font-bold leading-[1.037] tracking-[-0.025em]">
        Stay in touch
      </h2>
      <form action="" className="mb-12 ml-0 mr-auto mt-0 max-w-[37.5rem]">
        <div className="flex">
          <label htmlFor="email" className="flex-grow">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email..."
            />
          </label>
        </div>
      </form>
    </div>
  );
}
