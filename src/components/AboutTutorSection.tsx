import Image from 'next/image';

export default function AboutTutorSection() {
  return (
    <section className="py-10 md:py-20 bg-navy-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">MEET YOUR INSTRUCTOR</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <p className="text-lg md:text-xl">
              Hi, I&apos;m Ajike Eze, a digital marketing expert with over 5 years of experience in AdSense optimization and native ads arbitrage.
            </p>
            <p className="text-lg md:text-xl">
              I&apos;ve successfully scaled multiple blogs to 6-figure monthly earnings using the exact strategies I&apos;ll teach you in this course.
            </p>
            <p className="text-lg md:text-xl">
              My expertise lies in creating highly profitable native ad campaigns that drive quality traffic, resulting in significant AdSense earnings.
            </p>
            <p className="text-lg md:text-xl">
              I&apos;ve helped dozens of students achieve similar results, with many now earning 4-5 figures monthly from their blogs.
            </p>
            <p className="text-lg md:text-xl">
              What sets me apart is my commitment to staying ahead of industry trends and constantly refining my strategies for maximum effectiveness.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              I&apos;m not just a teacher, but a mentor who will guide you every step of the way towards AdSense success.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/tutor-image.jpg"
              alt="Ajike Eze - AdSense Expert"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="mt-8">
              <p className="text-xl font-bold mb-2">Industry Recognition:</p>
              <ul className="list-disc list-inside">
                <li>Featured speaker at Digital Marketing World Forum</li>
                <li>Contributor to leading marketing publications</li>
                <li>Consulted for Fortune 500 companies on ad optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
