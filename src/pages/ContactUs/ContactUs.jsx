import emailjs from "@emailjs/browser";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ContactUs = () => {
  const form = useRef();
  const position = [23.8365, 90.3695];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g0lbmdp", "template_zxgqz7d", form.current, {
        publicKey: "EZqoPl1QBq6NL4AbD",
      })
      .then(
        () => {
          toast.success(
            "Thanks for your message! We will get back to you soon.",
            {
              position: "top-right",
              className: "foo-bar",
              theme: "colored",
            }
          );
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section>
      {/* Contact Form */}
      <div className="bg-gradient-to-r from-indigo-800 to-indigo-500 dark:from-slate-950 dark:to-slate-900 text-white px-5 md:px-10 lg:px-20 py-20 gap-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white mb-10">
          Get In Touch
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:grid grid-cols-2 gap-4"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-200 font-normal text-base"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-200 font-normal text-base"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-200 font-normal text-base"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-200 font-normal text-base"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-200 font-normal text-base"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-800 text-white dark:bg-[#014AA9] dark:text-white py-2 px-4 rounded-md dark:hover:bg-indigo-700 transition-colors duration-300 font-medium border border-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* Map Section */}
      <div className="w-full mx-auto z-0 h-[300px]">
        <MapContainer
          center={position}
          zoom={13}
          // style={{ height: "100px !important", width: "100%" }}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Visit us at Mirpur DOHS, Dhaka, Bangladesh. We look forward to
              connecting with you!
            </Popup>
            <Tooltip>
            Mirpur DOHS
          </Tooltip>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default ContactUs;
