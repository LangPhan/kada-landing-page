export default function Form() {
  return (
    <div className="form-contact lg:w-[1000px]">
      <h2 className="form-contact__title 2xl:form-contact__title2xl lg:form-contact__titlelg text-[3.375rem] font-bold leading-[1.037] tracking-[-0.025em] md:mb-[1.9375rem] md:max-w-none md:text-center xl:mb-14">
        Stay in touch
      </h2>
      <form
        action=""
        className="mb-12 ml-0 mr-auto mt-0 max-w-[37.5rem] lg:max-w-none"
      >
        <div className="flex w-full justify-center">
          <label htmlFor="email" className="w-fit">
            <input
              className="form-contact__input xl:form-contact__input-xl rounded-s-3xl px-8 py-2 text-base font-medium ring-1 ring-slate-400 focus:border-0 xl:py-4 xl:pr-16"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email..."
            />
          </label>
          <button className="translate-x-[-5%] translate-y-[-2px] rounded-3xl border-[2px] border-black bg-black px-8 py-2 font-semibold text-white xl:translate-y-0 xl:px-12">
            Join
          </button>
        </div>
      </form>
    </div>
  );
}
