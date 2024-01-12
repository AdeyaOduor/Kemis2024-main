import React, { useState } from 'react';
// import { Link as  useNavigate } from 'react-router-dom';

const feature1 = [
    { name: '2023 KCPE Results & Secondary Placement', value: '1', link1: '/searchresult' },
];
const feature2 = [
    { name: '2023 KCSE Results', value: '', link2: '#' },

];
const feature3 = [

    { name: 'Report (Any) Grievances', value: '1', link3: '#' },
];
const feature4 = [
    { name: 'Tree Growing and Monitoring', value: '1', link4: 'http://elimutrees.education.go.ke/home' },
];

const HomepageInforgraphics = () => {

    return (
        <div className="flex flex-row sm:w-screen w-screen ">
            <div className="  w-1/4 text-start ">
                {feature1.map((feature, index) => (
                    <div
                        key={feature.name}
                        className=" mt-0 pt-0"
                    >
                        <dl className="border-t border-gray-200  flex-start">
                            <dt className=" flex justify-center text-sm p-1 my-1 sm:p-0 font-bold text-blue-700">{feature.name}</dt>
                            <div className='flex justify-center'>
                                <button
                                    onClick={() => window.open(feature.link1, '_blank', 'noopener noreferrer')}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded lg:ml-0 sm:ml-0"
                                >
                                    Check Here
                                </button>
                            </div>


                        </dl>
                    </div>
                ))}
            </div>
            <div className="mt-0 w-1/4  sm:justify-start pt-0">
                {feature2.map((feature, index) => (
                    <div
                        key={feature.name}
                        className="ml-20 sm:ml-0 mt-0 pt-0"
                    >
                        <dl className="border-t border-gray-200 flex-grow ">
                            <dt className="flex justify-center text-sm my-1 font-bold text-blue-700">{feature.name}</dt>
                            <div className='flex justify-center'>

                                <button
                                    onClick={() => window.open(feature.link2, '_blank', 'noopener noreferrer')}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded "
                                >
                                    Access Here
                                </button>
                            </div>

                        </dl>
                    </div>
                ))}
            </div>
            <div className="w-1/4 justify-center sm:justify-start mt-0 pt-0">
                {feature3.map((feature, index) => (
                    <div
                        key={feature.name}
                        className="ml-20 mt-0 pt-0"
                    >
                        <dl className="border-t border-gray-200  flex-grow">
                            <dt className="flex justify-center text-sm my-1 font-bold text-blue-700">{feature.name}</dt>
                            <div className='flex justify-center'>
                                <button
                                    onClick={() => window.open(feature.link3, '_blank', 'noopener noreferrer')}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                                >
                                    Report Here
                                </button>
                            </div>



                        </dl>
                    </div>
                ))}
            </div>
            <div className=" w-1/4 justify-center sm:justify-start mt-0 pt-0">
                {feature4.map((feature, index) => (
                    <div key={feature.name} className="ml-20 ">
                        <dl className="border-t border-gray-200 flex-grow">
                            <dt className="text-sm my-1 font-bold text-blue-700">{feature.name}</dt>

                            <div className="flex justify-center">
                                <button
                                    onClick={() => window.open(feature.link4, '_blank', 'noopener noreferrer')}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Click Here
                                </button>
                            </div>

                        </dl>
                    </div>
                ))}
            </div>


        </div>
    );
};
export default HomepageInforgraphics;

