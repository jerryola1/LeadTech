'use client';  // Add this line at the top of the file

import React from 'react';
import Image from 'next/image';

interface StudentTestimonialSectionProps {
  openPopup: () => void;
}

const StudentTestimonialSection: React.FC<StudentTestimonialSectionProps> = ({ openPopup }) => {
  return (
    <section className="py-20 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          WORD FROM OUR <span className="text-red-600">STUDENT</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/images/testimonial-1.png"
              alt="Student Testimonial 1"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/testimonial-2.png"
              alt="Student Testimonial 2"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={openPopup}
            className="bg-red-600 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-red-700 transition duration-300 inline-block"
          >
            GET ACCESS TO COURSE HERE
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonialSection;
