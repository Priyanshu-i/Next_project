"use client"
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Multiverse</title>
        <meta name="description" content="Explore a vibrant world of design and development with Next.js and Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-5 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold">Multiverse</h1>
          <nav>
            <ul className="flex space-x-8 text-lg">
              <li>
                <a href="#about" className="hover:text-yellow-300 transition">About</a>
              </li>
              <li>
                <a href="#features" className="hover:text-yellow-300 transition">Features</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="bg-gray-900 text-white">
        <section className="hero min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-900 via-black to-gray-900 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-stars-pattern opacity-20"></div>
          <div className="z-10 px-4">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Welcome to the Universe
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 mb-8">
              Dive into a kaleidoscope of cosmic colors and explore the mysteries of space.
            </p>
            <a
              href="#features"
              className="px-8 py-4 bg-pink-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-pink-700 transition"
            >
              Discover More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-12">
              Cosmic Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-xl hover:scale-105 transition">
                <h4 className="text-2xl font-bold mb-4">Planets</h4>
                <p>Uncover the secrets of diverse and extraordinary worlds.</p>
              </div>
              <div className="p-8 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg shadow-xl hover:scale-105 transition">
                <h4 className="text-2xl font-bold mb-4">Stars</h4>
                <p>Marvel at the brilliance of fiery celestial giants.</p>
              </div>
              <div className="p-8 bg-gradient-to-r from-green-600 to-yellow-600 text-white rounded-lg shadow-xl hover:scale-105 transition">
                <h4 className="text-2xl font-bold mb-4">Galaxies</h4>
                <p>Wander through endless clusters of stars and dark matter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold mb-6">Stay Connected</h3>
            <p className="text-lg mb-8">
              Have questions? Want to collaborate? We’d love to hear from you!
            </p>
            <a
              href="mailto:info@colorfuluniverse.com"
              className="px-6 py-3 bg-white text-yellow-600 font-medium text-lg rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Multiverse. Designed with love and colors.</p>
        </div>
      </footer>

      <style jsx>{`
        .bg-stars-pattern {
          background-image: url('/stars-bg.png');
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  );
}
