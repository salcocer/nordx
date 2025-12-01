import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-24">
        {/* Text Section */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome to NordX</h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Unlock Your Potential with Peptides
          </p>
        </div>

        <div className="relative w-full md:w-auto">
          <Image
            src="/nordx_3.png"
            alt="NordX Peptides"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mt-8 mx-auto md:mx-0"
          />
        </div>
      </main>
    </div>
  );
}
