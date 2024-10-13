'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofSection from "@/components/ProofSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import DiscoverSection from "../components/DiscoverSection";
import CourseForSection from "@/components/CourseForSection";
import AboutTutorSection from "../components/AboutTutorSection";
import StudentTestimonialSection from "../components/StudentTestimonialSection";
import ClientFAQSection from "@/components/ClientFAQSection";
import Footer from "@/components/Footer";
import CourseAccessPopup from "@/components/CourseAccessPopup";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    console.log('Opening popup');
    setIsPopupOpen(true);
  };
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero openPopup={openPopup} />
        <ProofSection />
        <ProblemSolutionSection />
        <DiscoverSection openPopup={openPopup} />
        <CourseForSection />
        <AboutTutorSection />
        <StudentTestimonialSection openPopup={openPopup} />
        <ClientFAQSection />
      </main>
      <Footer />
      {isPopupOpen && <CourseAccessPopup onClose={closePopup} />}
    </div>
  );
}
