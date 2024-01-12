import React from "react";

function AboutFeature() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-12 lg:px-8">
        <div>
          <h2 className="text-center  mt-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
        </div>
        <div className="mt-12 relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <p className="text-lg font-bold mt-4">
                1. Single Source of Truth:
              </p>
              <p>
                NEMIS consolidates scattered data into a unified, trustworthy
                source, ensuring accuracy and reliability in decision-making.
              </p>
              {/* ... (Repeat the pattern for each section) */}
              <p className="text-lg font-bold mt-4">
                2. Comprehensive Data Insights:
              </p>
              <p>
                Gain unparalleled insights into educational trends with NEMIS's
                powerful business intelligence tools, providing a comprehensive
                view of both national and international landscapes.
              </p>

              <p className="text-lg font-bold mt-4">
                3. Efficiency Redefined:{" "}
              </p>
              <p class="text-lg">
                Track the performances and movements of learners and teaching
                staff, promoting efficiency in resource allocation and
                infrastructure utilization.
              </p>
              <p className="text-lg font-bold mt-4">
                4. Flexible Management Tools:
              </p>
              <p>
                Adapt to evolving educational needs with NEMIS's flexible
                management tools, designed to efficiently track learning
                resources and school infrastructure.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold mt-4">
                5. Collaborative Data Space:
              </p>
              <p>
                Foster collaboration among educational institutions, agencies,
                and partners through a shared data repository, promoting a
                unified approach to education management.
              </p>
              {/* ... (Repeat the pattern for each section) */}
              <p className="text-lg font-bold mt-4">
                6. Cost-Finance Transparency:
              </p>
              <p>
                NEMIS tracks media for cost-finance parameters in education and
                training, ensuring transparency and accountability in financial
                decisions.
              </p>

              <p className="text-lg font-bold mt-4">
                {" "}
                7. Geo Mapping for Informed Decisions:
              </p>
              <p>
                {" "}
                Leverage geo-mapping features to locate education institutions
                and analyze performance indicators, enabling strategic,
                location-based decision-making.
              </p>
              <p className="text-lg font-bold mt-4">
                {" "}
                8. Pioneering Education Excellence:{" "}
              </p>
              <p>
                NEMIS is more than a data management system; it's a commitment
                to excellence in education, with a vision to empower learners,
                educators, and decision-makers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFeature;
