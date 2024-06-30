import React from 'react';

const PageBanner = ({heading, subHeading}) => {
    return (
        <div style={{ borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%', padding: '60px 20px 60px 20px', textAlign: 'center', fontWeight: 'bold' }} className="mb-4 bg-[#024BAA] dark:bg-slate-800 text-white">
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold">{heading}</h2>
                <p className="mt-2 text-lg font-normal">{subHeading}</p>
            </div>
        </div>
    );
};

export default PageBanner;
