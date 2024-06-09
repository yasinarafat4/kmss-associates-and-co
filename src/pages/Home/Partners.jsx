import React from 'react';
import logo1 from '../../assets/partners_logo/logo-1';
import logo2 from '../../assets/partners_logo/logo-2';
import logo3 from '../../assets/partners_logo/logo-3';

const Partners = () => {

    const partners = [
        { name: 'Company One', logo: logo1 },
        { name: 'Company Two', logo: logo2 },
        { name: 'Company Three', logo: logo3 },
        // Add more companies here
      ];

    return (
        <section className="bg-white py-10 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Our Partners & Supporters
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-20 w-auto mb-2"
              />
              <span className="text-sm text-gray-700">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Partners;