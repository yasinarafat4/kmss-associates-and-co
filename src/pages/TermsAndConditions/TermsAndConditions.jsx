import React from "react";
import PageBanner from "../../components/PageBanner";

const TermsAndConditions = () => {
  return (
    <div className="dark:bg-slate-700 min-h-screen">
      {/* Page Banner */}
      <PageBanner heading="Terms and Conditions" subHeading="Understand your rights and responsibilities!" />

      {/* Main Content */}
      <div className="px-4 py-6 md:px-14 md:py-10 dark:bg-slate-700 dark:text-white">
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed">
            Welcome to KMSS & Associates. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>
        </div>

        {/* Use of Services */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Use of Services</h2>
          <p className="text-lg leading-relaxed">
            Our services are provided for lawful purposes only. You agree not to use our services for any unlawful or prohibited activities, including but not limited to fraud, intellectual property infringement, or any form of harassment.
          </p>
        </div>

        {/* Intellectual Property */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Intellectual Property</h2>
          <p className="text-lg leading-relaxed">
            All content and materials on our website, including text, graphics, logos, and images, are the intellectual property of KMSS & Associates or its licensors and are protected by applicable copyright and trademark laws.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="text-lg leading-relaxed">
            KMSS & Associates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of our services. This limitation applies to all claims, whether based on warranty, contract, tort, or any other legal theory.
          </p>
        </div>

        {/* Termination */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Termination</h2>
          <p className="text-lg leading-relaxed">
            We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these terms, is harmful to other users, or is otherwise illegal.
          </p>
        </div>

        {/* Governing Law */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Governing Law</h2>
          <p className="text-lg leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of Bangladesh. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Changes to Terms</h2>
          <p className="text-lg leading-relaxed">
            We may update these terms and conditions from time to time. Any changes will be posted on this page, and your continued use of our services constitutes your acceptance of the updated terms.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
