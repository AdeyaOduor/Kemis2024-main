import React, { useState } from 'react';

const SchoolRegForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    return (
        <><div className="bgPrimary">
            <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-16 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    School Registration
                </h2>
                <p className="mt-6 text-lg leading-8 text-white">
                    Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                    Malesuada adipiscing sagittis vel nulla.
                </p>
            </div>
        </div>
            <div className="flex">
                {/* Left Sidebar */}
                <div className="w-1/4 bg-gray-200 p-12 mb-4">
                    <h2 className="text-lg font-semibold mb-4">Form Sections</h2>
                    <ul>
                        <li className={`cursor-pointer cursor-pointer border-b border-gray-300 my-8 ${currentStep === 1 && 'font-bold'}`} onClick={() => setCurrentStep(1)}>
                            Section 1
                        </li>
                        <li className={`cursor-pointer cursor-pointer border-b border-gray-300 my-8 ${currentStep === 2 && 'font-bold'}`} onClick={() => setCurrentStep(2)}>
                            Section 2
                        </li>
                        <li className={`cursor-pointer cursor-pointer border-b border-gray-300 myb-8 ${currentStep === 3 && 'font-bold'}`} onClick={() => setCurrentStep(3)}>
                            Section 3
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="w-3/4 p-4">
                    {/* Section 1 */}
                    {currentStep === 1 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Section 1</h2>
                            {/* ... Your Section 1 Form Content ... */}

                        </div>
                    )}

                    {/* Section 2 */}
                    {currentStep === 2 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Section 2</h2>
                            {/* ... Your Section 2 Form Content ... */}
                        </div>
                    )}

                    {/* Section 3 */}
                    {currentStep === 3 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Section 3</h2>
                            {/* ... Your Section 3 Form Content ... */}
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-8 flex justify-between">
                        <button onClick={handlePrev} className={`px-4 py-2 ${currentStep === 1 && 'hidden'}`}>
                            Previous
                        </button>
                        <button onClick={handleNext} className="px-4 py-2">
                            {currentStep === 3 ? 'Submit' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
            </>
    );
};

export default SchoolRegForm;
