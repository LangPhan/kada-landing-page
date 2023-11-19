import Bottom from "./Bottom";
import Form from "./Form";
import Top from "./Top";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-white before:absolute before:-top-[1.9375rem] before:left-0 before:h-8 before:w-full 
    before:rounded-t-3xl before:bg-white before:content-['']
     after:absolute after:-bottom-[1.9375rem] after:left-0 after:h-8 after:w-full after:rounded-b-3xl after:bg-white after:content-[''] 
    2xl:before:-top-[2.4375rem] 2xl:before:h-10
    2xl:before:rounded-t-[2.5rem] 2xl:after:-bottom-[2.4375rem] 2xl:after:h-10 2xl:after:rounded-b-[2.5rem]"
    >
      <div className="flex w-full flex-col items-center justify-center px-0 pb-[2.6875rem] sm:pt-[3.1875rem] md:grid md:px-0 md:py-12 lg:grid-rows-3 lg:px-0 lg:pb-8 lg:pt-4">
        <Top />
        <Form />
        <Bottom />
      </div>
    </section>
  );
}
