import Form from "./Form";

export default function Contact() {
  return (
    <section
      className="relative bg-white before:absolute before:-top-[1.9375rem] before:left-0 before:h-8 before:w-full 
    before:rounded-t-3xl before:bg-white before:content-['']
     after:absolute after:-bottom-[1.9375rem] after:left-0 after:h-8 after:w-full after:rounded-b-3xl after:bg-white after:content-[''] 
    2xl:pb-24 2xl:before:-top-[2.4375rem] 2xl:before:h-10
    2xl:before:rounded-t-[2.5rem] 2xl:after:-bottom-[2.4375rem] 2xl:after:h-10 2xl:after:rounded-b-[2.5rem]"
    >
      <div className="px-0 pb-[2.6875rem] sm:pt-[3.1875rem] md:px-0 md:py-12 lg:px-0 lg:pb-8 lg:pt-4 2xl:pb-[2.875rem] 2xl:pt-12">
        <div className="relative mx-0 my-auto max-w-[23.4375rem] md:max-w-[46.875rem] lg:max-w-none lg:px-0 lg:py-[15.37%] xl:ml-[1/2] xl:w-[90rem] xl:max-w-none xl:-translate-x-[50%] xl:p-0">
          <div className="grid-contact grid-contact-res grid grid-cols-[repeat(2,1fr)]">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
