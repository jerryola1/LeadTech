import React from 'react';

interface DiscoverSectionProps {
  openPopup: () => void;
}

const discoverItems = [
  {
    title: "The Secret to High-Converting Native Ads",
    description: "Learn how to create native ad campaigns that attract real, engaged users and maximize your AdSense revenue."
  },
  {
    title: "Advanced Traffic Optimization Techniques",
    description: "Master the art of attracting high-quality traffic that converts into substantial AdSense earnings."
  },
  {
    title: "Insider Strategies for Scaling Your AdSense Income",
    description: "Discover the step-by-step process to set up and scale highly profitable AdSense campaigns like a pro."
  },
];

export default function DiscoverSection({ openPopup }: DiscoverSectionProps) {
  return (
    <section className="py-10 md:py-20 bg-purple-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-heading-2 font-bold mb-8 md:mb-12 text-indigo-700">
          When You Join, <span className="text-red-600">You&apos;ll Discover:</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {discoverItems.map((item, index) => (
            <div key={index} className="bg-purple-700 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12">
          <button
            onClick={openPopup}
            className="bg-purple-500 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-purple-600 transition duration-300 inline-block"
          >
            GET ACCESS TO COURSE HERE
          </button>
        </div>
      </div>
    </section>
  );
}
