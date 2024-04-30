import React from "react";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  return (
    <Container>
      <section id="about" className="pt-20 dark:bg-slate-900 dark:text-white">
        <SectionTitle heading={"About Us"} />

        <div className="flex w-full items-center justify-center bg-white dark:bg-slate-900 dark:text-white px-8">
          <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
            <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
              <h1 className="lg:text-2xl text-xl font-bold leading-tight text-gray-900 dark:text-white">
                Hello!
              </h1>
              <p className="lg:text-lg md:text-base text-sm text-gray-600 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                eius iure sequi porro unde praesentium reiciendis. Molestiae,
                fuga! Nostrum aliquam fugit quis quaerat quo tempore ducimus
                facere quasi aliquid, error veniam eveniet dolorum rerum nulla?
                Deleniti quisquam, ut error nam voluptatibus deserunt
                repudiandae qui nostrum soluta nobis obcaecati minima atque
                nisi! Optio, iste qui quam possimus eius nobis ea harum
                distinctio doloremque temporibus animi.
              </p>
              <p className="text-sm text-gray-500 dark:text-white">
                Trusted by 5000+ Users
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                className="relative lg:h-[550px] md:h-[490px] h-[300px] w-[500px] bg-gray-400 rounded-b-full object-cover"
              />
              {/* <img
                src={aboutImage}
                className="relative bg-gray-400 rounded-b-full object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
