'use client';
import Link from 'next/link';
import SplashCursor from './components/SplashCursor/SplashCursor';
import { useEffect } from 'react';
import TextPressure from './components/TextPressure/TextPressure';
import { motion } from 'framer-motion';
import { FC } from 'react';

// Define types for the product and scent journey items
interface Product {
  name: string;
  img: string;
}

interface Scent {
  name: string;
  desc: string;
  img: string;
}

interface CraftStep {
  title: string;
  text: string;
  icon: string;
}

interface CommunityPost {
  img: string;
  caption: string;
}

// Define the Home component as a Functional Component
const Home: FC = () => {
  useEffect(() => {
    const menuBtn: HTMLElement | null = document.getElementById('menu-btn');
    const mobileMenu: HTMLElement | null = document.getElementById('mobile-menu');

    const toggleMenu = () => {
      mobileMenu?.classList.toggle('hidden');
    };

    if (menuBtn) {
      menuBtn.addEventListener('click', toggleMenu);
    }

    return () => {
      if (menuBtn) {
        menuBtn.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <div
      className="text-gray-900 min-h-screen"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: 'linear-gradient(135deg, #fff7f9 0%, #ffeef5 100%)',
        overflowX: 'hidden',
      }}
    >
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-extrabold text-pink-600 tracking-widest uppercase hover:scale-105 transition-transform"
          >
            Suiyubliss
          </Link>
          <nav className="hidden md:flex space-x-12 font-semibold text-gray-700">
            {['Shop', 'About', 'Reviews', 'Get Started', 'Contact'].map((item: string) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase().replace(' ', '-')}`}
                className="relative group hover:text-pink-600 transition-colors"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>
          <button
            aria-label="Toggle menu"
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600 p-2 rounded-full hover:bg-pink-100 transition"
            id="menu-btn"
          >
            <i className="fas fa-bars fa-lg"></i>
          </button>
        </div>
        <div
          className="hidden bg-white/95 backdrop-blur-lg px-6 py-4 space-y-4 font-semibold text-gray-700 md:hidden shadow-xl"
          id="mobile-menu"
        >
          {['Shop', 'About', 'Reviews', 'Get Started', 'Contact'].map((item: string) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase().replace(' ', '-')}`}
              className="block hover:text-pink-600 transition-colors py-2"
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.header>

      <main className="pt-20">
        <SplashCursor />

        {/* TextPressure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center items-center mb-6"
        >
          <div style={{ position: 'relative', height: '120px', width: '100%', maxWidth: '600px' }}>
            <TextPressure
              text="SUIYUBLISS"
              flex={true}
              alpha={false}
              stroke={true}
              width={true}
              weight={true}
              italic={false}
              textColor="#ec4899"
              strokeColor="#be185d"
              minFontSize={36}
            />
          </div>
        </motion.div>

        {/* Product Banner Section */}
        <section className="w-full px-6 py-16 bg-gradient-to-br from-pink-100 to-rose-100" id="collection">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-pink-600 text-center mb-12"
            >
              Our Collection
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {([
                { name: 'Sakura Mist', img: '/images/samples/hop.jpg' },
                { name: 'Bliss Berry', img: '/images/samples/hop.jpg' },
                { name: 'Peach Bloom', img: '/images/samples/hop.jpg' },
                { name: 'Velvet Rose', img: '/images/samples/hop.jpg' },
              ] as Product[]).map((product: Product, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 p-5 text-center"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                  />
                  <h3 className="text-xl font-semibold text-pink-600">{product.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Behind the Craft Section */}
        <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-24 px-6" id="craft">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold text-pink-600 mb-12"
            >
              Behind the Craft
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {([
                {
                  title: 'Nature’s Essence',
                  text: 'We source the finest natural ingredients, blending floral and fruity notes to create harmonious scents.',
                  icon: '/images/samples/rom.jpg',
                },
                {
                  title: 'Artisan Blending',
                  text: 'Each fragrance is handcrafted with precision, ensuring a unique and lasting aroma.',
                  icon: '/images/samples/miaw.jpg',
                },
                {
                  title: 'Sustainable Love',
                  text: 'Our eco-friendly packaging reflects our commitment to beauty and the planet.',
                  icon: '/images/samples/miaw.jpg',
                },
              ] as CraftStep[]).map((step: CraftStep, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-16 h-16 mx-auto mb-6"
                  />
                  <h4 className="text-pink-600 font-semibold text-lg mb-4">{step.title}</h4>
                  <p className="text-gray-600">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Scent Journey Section */}
        <section className="bg-white py-24 px-6" id="scent-journey">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold text-pink-600 mb-12"
            >
              Your Scent Journey
            </motion.h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Explore the essence of Suiyubliss through an interactive journey. Hover over each scent to discover its unique story.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {([
                { name: 'Sakura Mist', desc: 'A delicate blend of cherry blossoms and soft musk.', img: '/images/samples/rom.jpg' },
                { name: 'Bliss Berry', desc: 'Vibrant notes of wild berries with a hint of vanilla.', img: '/images/samples/rom.jpg' },
                { name: 'Peach Bloom', desc: 'Juicy peach fused with creamy florals.', img: '/images/samples/rom.jpg' },
                { name: 'Velvet Rose', desc: 'Rich rose petals with a touch of warm amber.', img: '/images/samples/rom.jpg' },
              ] as Scent[]).map((scent: Scent, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-white rounded-3xl shadow-lg overflow-hidden"
                >
                  <img
                    src={scent.img}
                    alt={scent.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center px-4">{scent.desc}</p>
                  </div>
                  <h4 className="text-pink-600 font-semibold text-lg p-4">{scent.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Glow Section */}
        <section className="bg-gradient-to-br from-pink-100 to-rose-100 py-24 px-6" id="community">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold text-pink-600 mb-12"
            >
              Community Glow
            </motion.h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Join the Suiyubliss community! Share your fragrance moments and shine with us.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {([
                { img: '/images/samples/rom.jpg', caption: 'Loving my Sakura Mist vibe! 🌸' },
                { img: '/images/samples/rom.jpg', caption: 'Peach Bloom for sunny days! ☀️' },
                { img: '/images/samples/rom.jpg', caption: 'Velvet Rose, my evening go-to! 🌹' },
              ] as CommunityPost[]).map((post: CommunityPost, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all"
                >
                  <img
                    src={post.img}
                    alt="Community Post"
                    className="w-full h-64 object-cover rounded-t-3xl"
                  />
                  <p className="text-gray-600 p-4">{post.caption}</p>
                </motion.div>
              ))}
            </div>
            <Link
              href="/#share"
              className="inline-block mt-10 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Share Your Glow
            </Link>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-white py-20 px-6 text-center" id="cta">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Ready to Embrace Your Signature Scent?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Discover a fragrance that reflects your unique personality. Feminine. Bold. You.
            </p>
            <Link
              href="/#collection"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Explore Our Collection
            </Link>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-pink-100 to-rose-100 py-12 px-6 text-center text-gray-700" id="contact">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-pink-600 mb-4">Suiyubliss</h3>
            <p className="mb-6 text-lg">Fragrance inspired by beauty, crafted with love.</p>
            <div className="flex justify-center space-x-8 text-pink-600 text-2xl mb-6">
              <a href="#" className="hover:scale-125 transition-transform">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:scale-125 transition-transform">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="hover:scale-125 transition-transform">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <p className="text-sm">© 2025 Suiyubliss. All rights reserved.</p>
          </div>
        </footer>
      </main>

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default Home;