import React from 'react';

const ServiceBanner = ({heading}) => {
    return (
        <div className="flex items-center justify-center h-[200px] bg-[#0249AE] dark:bg-slate-700 text-white">
            <div className="text-center">
                <h2 className="text-3xl font-bold">{heading}</h2>
                <p className="mt-2">Providing excellence in legal and professional consultancy.</p>
            </div>
        </div>
    );
};

export default ServiceBanner;
