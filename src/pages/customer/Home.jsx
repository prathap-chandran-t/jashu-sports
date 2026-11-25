
import { ArrowRight, Trophy, Truck, ShieldCheck } from "lucide-react";
import FeaturedProducts from "../../components/product/FeaturedProducts";
import Testimonials from "../../components/common/Testimonials";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(17, 24, 39, 0.96),
              rgba(17, 24, 39, 0.70)
            ),
            url('/images/jashu-sports.png')
          `,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

            {/* Left Content */}
            <div>
              <span className="inline-block bg-orange-500/20 text-[#F97316] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                YOUR GAME. YOUR GEAR.
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                GEAR UP.
                <br />
                <span className="text-[#F97316]">PLAY HARD.</span>
                <br />
                WIN BIG.
              </h1>

              <p className="text-gray-300 text-base md:text-lg mt-6 max-w-lg leading-relaxed">
                Discover premium cricket jerseys, sports shoes, kits and
                accessories. Everything you need to perform at your best.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <button className="bg-[#F97316] hover:bg-orange-600 text-white px-7 py-4 rounded-lg font-bold flex items-center gap-3 transition">
                  Shop Now
                  <ArrowRight size={20} />
                </button>

                <button className="border border-white/50 hover:border-[#F97316] hover:text-[#F97316] text-white px-7 py-4 rounded-lg font-semibold transition">
                  Explore Categories
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mt-14 border-t border-white/20 pt-8">
                <div>
                  <Truck className="text-[#F97316] mb-2" size={25} />
                  <p className="text-sm font-semibold">Fast Delivery</p>
                  <p className="text-xs text-gray-300 mt-1">
                    Quick shipping
                  </p>
                </div>

                <div>
                  <ShieldCheck className="text-[#F97316] mb-2" size={25} />
                  <p className="text-sm font-semibold">Best Quality</p>
                  <p className="text-xs text-gray-300 mt-1">
                    Quality products
                  </p>
                </div>

                <div>
                  <Trophy className="text-[#F97316] mb-2" size={25} />
                  <p className="text-sm font-semibold">Top Brands</p>
                  <p className="text-xs text-gray-300 mt-1">
                    Sports collection
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Brand Typography */}
            <div className="hidden lg:flex relative items-center justify-center self-start pt-16">
              <div className="absolute w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl"></div>

              <div className="relative text-center">
                <p className="text-white/50 tracking-[0.5em] text-sm mb-4">
                  WELCOME TO
                </p>

                <h2 className="text-7xl xl:text-8xl font-black tracking-tight text-white drop-shadow-2xl">
                  JASHU
                </h2>

                <h2 className="text-6xl xl:text-7xl font-black tracking-tight text-[#F97316] -mt-4">
                  SPORTS
                </h2>

                <div className="w-24 h-1 bg-[#F97316] mx-auto mt-6 rounded-full"></div>

                <p className="text-white/70 tracking-[0.4em] text-xs mt-5">
                  PLAY WITH PASSION
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Shop By Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center mb-12">
            <p className="text-[#F97316] font-bold tracking-widest text-sm">
              EXPLORE COLLECTION
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mt-3">
              SHOP BY CATEGORIES
            </h2>

            <p className="text-gray-500 mt-4">
              Find the perfect gear for your favorite sport.
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {/* Cricket */}
            <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="/images/bat-collection.png"
                alt="Cricket"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold">Cricket</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Explore Collection
                </p>
              </div>
            </div>

            {/* Football */}
            <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="/images/football.png"
                alt="Football"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold">Football</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Explore Collection
                </p>
              </div>
            </div>

            {/* Jerseys */}
            <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="/images/jersey-collection.jpeg"
                alt="Jerseys"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold">Jerseys</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Explore Collection
                </p>
              </div>
            </div>

            {/* Sports Shoes */}
            <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="/images/shoes.png"
                alt="Sports Shoes"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold">Sports Shoes</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Explore Collection
                </p>
              </div>
            </div>

            {/* Badminton */}
            <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="/images/badminton.png"
                alt="Badminton"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold">Badminton</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Explore Collection
                </p>
              </div>
            </div>

            {/* Accessories */}
            <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="/images/accessories.png"
                alt="Sports Accessories"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold">Accessories</h3>
                <p className="text-gray-300 text-sm mt-2">
                  Explore Collection
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <FeaturedProducts />
      <Testimonials />
    </main>
  );
}

export default Home;
