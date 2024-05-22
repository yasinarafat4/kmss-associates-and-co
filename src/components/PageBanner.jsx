import React from 'react';

const PageBanner = ({heading, subHeading}) => {
    return (
        <div className="flex items-center justify-center h-[200px] bg-blue-700 dark:bg-slate-700 text-white">
            <div className="text-center">
                <h2 className="text-3xl font-bold">{heading}</h2>
                <p className="mt-2">{subHeading}</p>
            </div>
        </div>
    );
};

export default PageBanner;
