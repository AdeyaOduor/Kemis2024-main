import React from 'react'
import '../../../../src/Style.css'

function FeatAboutReg() {
    return (
        <><div className="bgKemis">
            <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-12 lg:px-8 text-center">
                <div>
                    <h2 className="text-center  mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                        Why Go Digital?
                    </h2>
                </div>
                <div className="mt-12 relative isolate overflow-hidden px-4 pt-16 sm:rounded-3xl sm:px-12 md:pt-24 lg:flex lg:gap-x-20 lg:px-16 lg:pt-0">
                    <div className="grid grid-cols-3 gap-3">
                        <div>
                            <p className="text-lg font-bold mt-4">
                                Seamless and Efficient:
                            </p>
                            <p>
                                No more paperwork hassles! Our digital registration system simplifies the entire process, making it easy for both parents and school administrators to complete and manage registrations.
                            </p>  </div>
                        <div>
                            <p className="text-lg font-bold mt-4">
                                Real-time Updates:{" "}
                            </p>
                            <p class="text-lg">
                                Stay informed with real-time updates on student registrations. Access data instantly and make informed decisions with our comprehensive reporting tools.
                            </p>
                        </div>

                        <div>
                            <p className="text-lg font-bold mt-4">
                                Time-Saving Automation
                            </p>
                            <p>
                                Automate routine tasks and reduce administrative overhead. Spend less time on paperwork and more time focusing on what matters most—providing quality education.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white">
                <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-12 lg:px-8 text-center">
                    <div>
                        <h2 className="text-center  mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                        What Our System Offers:
                        </h2>
                    </div>
                    <div className="mt-12 relative isolate overflow-hidden px-4 pt-16 sm:rounded-3xl sm:px-12 md:pt-24 lg:flex lg:gap-x-20 lg:px-16 lg:pt-0">
                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <p className="text-lg font-bold mt-4">
                                User-Friendly Interface:{" "}
                                </p>
                                <p>
                                Our intuitive platform ensures a smooth experience for parents, students, and administrators. Simple navigation and clear instructions make registration a breeze.
                                </p>  </div>
                            <div>
                                <p className="text-lg font-bold mt-4">
                                Secure Data Handling:{" "}
                                </p>
                                <p>
                                Rest easy knowing that sensitive information is handled with the utmost security. Our system employs robust encryption and data protection measures to safeguard your data.
                                </p>
                            </div>

                            <div>
                                <p className="text-lg font-bold mt-4">
                                Mobile Accessibility
                                </p>
                                <p>
                                Access the registration system anytime, anywhere, from any device. Our mobile-friendly design ensures flexibility and convenience for all users.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div></>
      );
}

export default FeatAboutReg