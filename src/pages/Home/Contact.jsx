import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g0lbmdp", "template_zxgqz7d", form.current, {
        publicKey: "EZqoPl1QBq6NL4AbD",
      })
      .then(
        () => {
          toast.success("Thanks for your message! We will get back to you soon.", {
            position: "top-right",
            className: 'foo-bar',
            theme: "colored"
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 dark:bg-slate-950 text-white lg:grid grid-cols-3 gap-10 px-10 py-20"
    >
      <div className="col-span-1">
        <h2 className="text-start lg:text-end text-2xl md:text-3xl xl:text-4xl font-semibold mb-4">
          GET A CALL BACK
        </h2>
        <p className="text-start lg:text-end mb-6 lg:mb-0 xl:text-lg">
          If you need any support with Bangladesh Investment Development
          Authority Affairs (BIDA), ERC, IRC, project profiles, or both local
          and international accounting outsourcing, please reach out to us. We
          will there for you.
        </p>
        {/* TODO ABC*/}
      </div>
      <div className="col-span-2">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:grid grid-cols-2 gap-4"
        >
          <div>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-900 text-slate-200 font-normal text-base"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-900 text-slate-200 font-normal text-base"
                required
              />
            </div>
            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Your Number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-900 text-slate-200 font-normal text-base"
                required
              />
            </div>
          </div>

          <div>
            {/* Subect */}
            <div className="mb-4">
              <label htmlFor="Subject" className="block mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Your Subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-900 text-slate-200 font-normal text-base"
                required
              />
            </div>
            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-900 text-slate-200 font-normal text-base"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-1/3 bg-[#014AA9] text-white py-2 px-4 rounded-sm hover:bg-blue-500 dark:bg-slate-800 shadow transition-colors duration-300 font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
