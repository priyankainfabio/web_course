export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Become an AI Website Developer in 12 Weeks
        </h1>

        <p className="text-lg text-white/70 mb-8">
          Master React, Next.js & AI tools. Build real-world projects and become job-ready.
        </p>

        <div className="text-4xl font-bold text-yellow-400 mb-6">
          ₹25,000
        </div>

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition">
          Enroll Now
        </button>

      </div>
    </section>
  );
}