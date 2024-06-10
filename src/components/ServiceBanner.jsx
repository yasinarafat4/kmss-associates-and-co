import React from 'react';

const ServiceBanner = ({heading}) => {
    return (
        <div 
            className="flex items-center justify-center h-[350px] bg-cover bg-center relative text-white"
            style={{
                backgroundImage: 'linear-gradient(rgba(2, 73, 174, 0.5), rgba(2, 73, 174, 0.5)), url("https://i.ibb.co/6NnPygz/2147656701-1.jpg")'
            }}
        >
            <div className="text-center z-10">
                <h2 className="text-4xl font-semibold">{heading}</h2>
                <p className="mt-2 text-[18px]">Providing excellence in legal and professional consultancy.</p>
            </div>
            <div className="absolute inset-0 bg-[#020508] opacity-50 dark:opacity-30"></div>
        </div>
    );
};

export default ServiceBanner;
