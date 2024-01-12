import React, { useState } from "react";

const FAQs = () => {
  const AccordionFaqs = [
    {
      question: "What is the admission process?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How can I pay tuition fees?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    // Add more FAQs as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    <div className="bg-gray-200">
      <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            FAQs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>         
      </div>
    </div>



    
    {/* FAQ Accordion starts here */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <div>
              {AccordionFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 mb-4">
                  <div
                    className={`flex items-center justify-between p-4 cursor-pointer ${
                      activeIndex === index ? "bg-gray-200" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="font-semibold">{faq.question}</div>
                    <div className="ml-100%">
                      {activeIndex === index ? "➖" : "➕"}
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="p-4">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
