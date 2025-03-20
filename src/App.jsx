import React from "react";
import Header from "./Component/Header";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      <Header />

      <section className="flex items-center justify-between w-full h-[600px] bg-gradient-to-r from-olive-600 to-olive-700 px-12">
        <div className="w-1/2 text-black">
          <h1 className="text-5xl font-bold mb-4">
            Find Talent by Skill, Hire with Ease
          </h1>
          <p className="text-lg mb-6">
            SkillConnect bridges the gap between skilled individuals and those
            who need their expertise—online or offline.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-olive-700 px-6 py-3 rounded-full font-semibold hover:bg-olive-100 transition">
              Hire Talent
            </button>
            <button className="border-2 border-black px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-olive-700 transition text-black">
              Showcase Skills
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
            alt="Hero Image"
            className="w-full h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="py-16 px-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why SkillConnect?
        </h2>
        <div className="flex justify-between gap-8">
          <div className="w-1/3 bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-olive-600 mb-2">
              Skill Profiles
            </h3>
            <p className="text-gray-600">
              Showcase your expertise with portfolios and samples to stand out.
            </p>
          </div>
          <div className="w-1/3 bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-olive-600 mb-2">
              Easy Hiring
            </h3>
            <p className="text-gray-600">
              Search by skill and location—hire online or in-person
              effortlessly.
            </p>
          </div>
          <div className="w-1/3 bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-olive-600 mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Pay directly through the platform with trust and transparency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-12 bg-olive-600 text-black text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Connect Skills with Opportunities?
        </h2>
        <p className="text-lg mb-6">
          Join SkillConnect today and start hiring or showcasing your talent.
        </p>
        <button className="bg-white text-olive-700 px-8 py-3 rounded-full font-semibold hover:bg-olive-100 transition">
          Get Started
        </button>
      </section>

      <footer className="py-8 px-12 bg-gray-800 text-white text-center">
        <p>© 2025 SkillConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Home />
    </div>
  );
}

export default App;
