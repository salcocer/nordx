import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-row items-center justify-between p-24">

        <div className="">
          <h1 className="text-4xl font-bold">Welcome to NordX</h1>
          <p className="mt-4 text-lg text-gray-600">
            Unlock Your Potential with Peptides
          </p>
        </div>

        <div className="relative">
          <Image
            src="/nordx_3.png"
            alt="NordX Peptides"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mt-8"
          />
          {/* Title inside the image */}
          <div className="absolute top-10 left-4 p-4">
            <h2 className="text-green-900/90 text-3xl font-bold px-4 py-2 rounded-lg">
              NordX Peptides
            </h2>
          </div>
        </div>
      </main>

    </div>
  );
}
