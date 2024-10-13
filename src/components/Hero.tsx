import Image from "next/image";

interface HeroProps {
  openPopup: () => void;
}

export default function Hero({ openPopup }: HeroProps) {
  return (
    <section className="bg-purple-700 text-white py-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
              MASTER THE ART OF <span className="text-red-600">PROFITABLE</span><br />
              ADSENSE OPTIMIZATION<br />
              <span className="text-red-600">SECRETS REVEALED</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-center md:text-left">
              Discover cutting-edge techniques to maximize your<br className="hidden md:inline" />
              AdSense earnings. Learn how top earners are<br className="hidden md:inline" />
              generating 5-figure monthly incomes with our proven methods.
            </p>
            <div className="text-center md:text-left">
              <button
                onClick={openPopup}
                className="bg-purple-500 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-purple-600 transition duration-300 inline-block"
              >
                UNLOCK ADSENSE PROFITS NOW
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative max-w-sm mx-auto md:max-w-none">
              <div className="bg-purple-500 rounded-full w-64 h-64 md:w-80 md:h-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <Image
                src="/images/hero-image.png"
                alt="AdSense Expert with Laptop"
                width={400}
                height={400}
                className="relative z-10 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
