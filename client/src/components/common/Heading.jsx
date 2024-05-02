import React from 'react';

const Heading = ({ title }) => {
    return (
        <>
            <div className='flex mt-3 items-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-red mr-4'>{title}</h1>
                <div className='border-[2px] md:border-[3px] border-red flex-1 h-0 mb-[6px]'></div>

                <h1 className='news-title-sm'>सलमान खान केस: CID करेगी आरोपी के सुसाइड की जांच, दरी से फंदा बनाकर लॉकअप के बाथरूम में लगाई थी फांसी</h1>
            </div>
            <p className='date-md'>Wed, 01 May 2024 04:35 PM</p>
        </>
    );
};

export default Heading;
