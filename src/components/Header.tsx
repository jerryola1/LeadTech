import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="bg-purple-500 text-white py-2 text-center">
        Master the Art of Traffic Arbitrage Today!
      </div>
      <div className="container mx-auto px-4 py-4">
        <Image
          src="/images/leadtech-logo.png"
          alt="Leadtech Logo"
          width={150}
          height={50}
          className="mx-auto"
        />
      </div>
    </header>
  );
}
