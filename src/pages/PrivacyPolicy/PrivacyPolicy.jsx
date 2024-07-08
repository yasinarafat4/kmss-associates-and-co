import React from "react";
import PageBanner from "../../components/PageBanner";

const PrivacyPolicy = () => {
  return (
    <div className="dark:bg-slate-700">
      {/* Page Banner */}
      <PageBanner
        heading="Privacy Policy"
        subHeading="Your privacy is important to us!"
      />

      {/* Main Content */}
      <div className="px-4 py-6 md:px-14 md:py-10 dark:bg-slate-700 dark:text-white">
        {/* Introduction */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed font-normal">
            At KMSS & Associates, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines
            how we collect, use, and safeguard your data when you use our
            services.
          </p>
        </div>

        {/* Information Collection */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Information Collection</h2>
          <p className="text-lg leading-relaxed font-normal">
            We may collect personal information including your name, email
            address, phone number, and other details relevant to our services.
            This information is collected through forms on our website,
            consultations, and communications with you.
          </p>
        </div>

        {/* Use of Information */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Use of Information</h2>
          <p className="text-lg leading-relaxed font-normal">
            The information we collect is used to provide and improve our
            services, respond to inquiries, and maintain our business records.
            We may also use your information to communicate with you about
            updates, promotions, and other relevant information.
          </p>
        </div>

        {/* Data Protection */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Data Protection</h2>
          <p className="text-lg leading-relaxed font-normal">
            We implement appropriate technical and organizational measures to
            protect your personal data from unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the internet or electronic storage is 100%.
          </p>
        </div>

        {/* Cookies */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Cookies</h2>
          <p className="text-lg leading-relaxed font-normal">
            Our website may use cookies to enhance your browsing experience.
            Cookies are small data files stored on your device that help us
            understand your preferences and improve our services. You can choose
            to disable cookies through your browser settings.
          </p>
        </div>

        {/* Third-Party Links */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Third-Party Links</h2>
          <p className="text-lg leading-relaxed font-normal">
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices or content of these external
            sites. We encourage you to review their privacy policies before
            providing any personal information.
          </p>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Changes to Privacy Policy</h2>
          <p className="text-lg leading-relaxed font-normal">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any significant changes by posting the updated policy on our
            website.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed font-normal">
            If you have any questions or concerns about our Privacy Policy or
            how we handle your personal information, please contact us at:
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>
              Email:{" "}
              <a
                href="kmssassociates52@gmail.com"
                className="text-blue-600"
              >
                kmssassociates52@gmail.com
              </a>
            </li>
            <li>Phone: +880 18 93 97 25 09</li>
            <li>
              Address: 19/1, BL-K, Eastern Housing, Mirpur-12, Dhaka-1216
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
