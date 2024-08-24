import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 dark:from-indigo-900 dark:to-indigo-800 py-10 md:py-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Get a Call Back</h2>
        <p className="text-base md:text-lg text-white mb-8 w-11/12 md:w-9/12 xl:w-8/12 mx-auto">
        If you need any support, please reach out to us. We would love to hear from you. Whether you have a question, feedback, or
          just want to say hello, our team is here for you.
        </p>
        <Link
          to="/contact-us"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Contact;
