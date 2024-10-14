import Image from "next/image";

export default function ProofSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-900">
          DON&apos;T TAKE OUR WORD FOR IT
        </h2>
        <p className="text-xl text-center mb-12 text-indigo-600">
          And yes, this has nothing to do with task website.. or any of those bot, proxy or self-clicking fraud. So it&apos;s entirely legit. 110%.
        </p>
        <p className="text-xl text-center mb-12">
          See why our students&apos; success stories are inspiring.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Image
            src="/images/proof-image-1.png"
            alt="Proof of earnings 1"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/proof-image-2.png"
            alt="Proof of earnings 2"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
