import React from 'react';
import logo1 from '../../assets/partners_logo/logo-1.png';
import logo2 from '../../assets/partners_logo/logo-2.png';
import logo3 from '../../assets/partners_logo/logo-3.png';

const Partners = () => {

    const partners = [
        { name: 'ALKA Associates', logo: logo1 },
        { name: 'Real Estate', logo: logo2 },
        { name: 'UNEX', logo: logo3 },
        // Add more companies here
      ];

    return (
        <section className="bg-white py-10 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Our Partners & Supporters
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-auto mb-2"
              />
              <span className="text-sm text-gray-700">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Partners;