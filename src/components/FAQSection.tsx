import React from 'react';

// Updated interface to use Object instead of object
// interface FAQSectionProps extends Object {}

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What's your program all about?",
    answer: "Our program is focused on teaching you how to set up highly profitable native ads campaigns for blogging arbitrage. We provide step-by-step guidance on using native ads to drive quality traffic and maximize your Adsense/ADX earnings."
  },
  {
    question: "Does it come with a support group?",
    answer: "Yes, our program includes access to an exclusive support group where you can interact with other students and get assistance from our team of experts."
  },
  {
    question: "Why is it expensive?",
    answer: "The price reflects the value of the content and the potential return on investment. Our program provides proven strategies that can significantly increase your earnings, making it a worthwhile investment for serious marketers."
  },
  {
    question: "How fast can I make money?",
    answer: "Results can vary depending on factors such as your dedication, implementation speed, and market conditions. While some students see results within weeks, it's important to approach this as a long-term strategy for sustainable success."
  },
  {
    question: "Are there any recurring fees or hidden charges?",
    answer: "No, there are no recurring fees or hidden charges. You pay a one-time fee for lifetime access to the course content and future updates."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  const toggleAnswer = (index: number) => {
    setActiveIndex(prevIndex => prevIndex === index ? -1 : index);
  }

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
          FAQs About the Native Ads Profits Program
        </h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqItems.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden text-left">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-red-600 text-white hover:bg-red-700 transition-colors"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
                <span className="text-xl md:text-2xl">{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-base md:text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
