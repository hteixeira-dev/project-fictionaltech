// src/App.jsx
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-600 w-full py-6 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">FictionalTech</h1>
      </header>

      <main className="flex flex-col items-center w-full max-w-5xl px-4 py-8 gap-6">
        <section className="bg-white rounded-2xl shadow-lg p-6 w-full">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            FictionalTech is a fictional company dedicated to creating innovative technological
            solutions for imaginary problems. Even though our concept is simple, our focus is on
            delivering a pleasant, clear, and visually appealing user experience.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Product A</h3>
            <p className="text-gray-600">A device that instantly turns ideas into virtual reality.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Product B</h3>
            <p className="text-gray-600">An AI that writes fantasy books based on your dreams.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Product C</h3>
            <p className="text-gray-600">A watch that alerts you when it's the perfect time to have a great idea.</p>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-6 w-full">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your name" className="border rounded-lg px-4 py-2" />
            <input type="email" placeholder="Your email" className="border rounded-lg px-4 py-2" />
            <textarea placeholder="Your message" className="border rounded-lg px-4 py-2" rows="4"></textarea>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
              Send
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-900 w-full py-4 mt-auto">
        <p className="text-center text-gray-300 text-sm">
          Site developed by Henrique Ronchi Teixeira for personal learning purposes.
        </p>
      </footer>
    </div>
  );
}
