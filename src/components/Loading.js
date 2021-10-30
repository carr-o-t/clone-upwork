import React from 'react'

const Loading = () => {
         let circleCommonClasses = 'h-10 w-10 rounded-full bg-upwork4';

    return (
        <div className='flex justify-center align-middle  mt-[250px]'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
};

export default Loading;
