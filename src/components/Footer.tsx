import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Image
              src="/images/leadtech-logo-white.png"
              alt="Leadtech Logo"
              width={150}
              height={50}
            />
          </div>
          <div className="text-center md:text-right">
            <p className="mb-2 text-sm md:text-base">&copy; 2023 Leadtech. All rights reserved.</p>
            <p className="text-sm md:text-base">
              <a href="#" className="hover:text-purple-300 transition duration-300">Privacy Policy</a>
              {' | '}
              <a href="#" className="hover:text-purple-300 transition duration-300">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
