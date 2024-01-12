import React from 'react';

const InstructionsOnRegistrations = () => {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-12 lg:px-8 text-left">
      <div>
        <h1 className="text-center mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          To the Institution owner prospect kindly read the following instructions for guidelines on prerequisites of any Institution/school registration
        </h1>
      </div>
    
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-12 lg:px-8 text-left">          
          <div className="mt-12 relative isolate overflow-hidden px-4 pt-16 sm:rounded-3xl sm:px-12 md:pt-24 lg:flex lg:gap-x-20 lg:px-16 lg:pt-0">
              <div>
                <ol className="list-decimal pl-6 space-y-2">
                  <li className="ml-4">A Letter of approval (License) by CEB to start an institution</li>
                  <li className="ml-4">An assessment report signed by SCQASO or CQASO in person and countersigned by SCDE in person</li>
                  <li className="ml-4">A Public Health Inspection Report signed by a Sub-County Public Health Office in person</li>
                  <li className="ml-4">A Public Works report/certification of completion and occupancy</li>
                  <li className="ml-4">A certified copy of land title deed or renewable lease agreement</li>
                  <li className="ml-4">A list of teaching staff who shall be adequate as per the existing staffing</li>
                  <li className="ml-4">A copy of business name registration certificate, certificate of incorporation or both (for a private institution or certificate of change of name from the Registrar of Companies for re-registration)</li>
                  <li className="ml-4">An Environmental Impact Assessment report by NEMA where applicable</li>
                  <li className="ml-4">Verification of payment via the E-Citizen must be done within three days, failure to the registration process will be terminated </li>
                </ol>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionsOnRegistrations;
