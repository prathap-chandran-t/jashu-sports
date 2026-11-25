
import { Target, Award, Users, ShieldCheck } from "lucide-react";

function About() {
  return (
    <main className="bg-white">

      {/* Page Heading */}
      <section className="bg-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#F97316] font-bold tracking-widest text-sm">
            WHO WE ARE
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            ABOUT JASHU SPORTS
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl">
            Your passion for sports deserves the best equipment.
            We are here to help you play with confidence.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[#F97316] font-bold tracking-widest text-sm">
              OUR STORY
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mt-3">
              GEAR UP FOR YOUR NEXT BIG GAME
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              JASHU SPORTS is your destination for sports products,
              equipment, jerseys, footwear and accessories.
              Our goal is to make quality sports gear accessible
              to every sports enthusiast.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Whether you love cricket, football, badminton or
              any other sport, explore our collection and find
              the gear that matches your passion.
            </p>
          </div>

          <div className="bg-[#111827] rounded-2xl p-10 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white">
              JASHU
            </h2>

            <h2 className="text-5xl md:text-6xl font-black text-[#F97316]">
              SPORTS
            </h2>

            <div className="w-20 h-1 bg-[#F97316] mx-auto mt-6 rounded-full"></div>

            <p className="text-gray-300 tracking-widest text-sm mt-5">
              PLAY WITH PASSION
            </p>
          </div>

        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-[#F97316] font-bold tracking-widest text-sm">
              WHAT WE STAND FOR
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mt-3">
              OUR VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
              <Target className="text-[#F97316] mx-auto" size={35} />
              <h3 className="font-bold text-xl text-[#111827] mt-5">
                Our Mission
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-6">
                Make sports gear accessible to everyone.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
              <Award className="text-[#F97316] mx-auto" size={35} />
              <h3 className="font-bold text-xl text-[#111827] mt-5">
                Quality
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-6">
                Focus on reliable and quality products.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
              <Users className="text-[#F97316] mx-auto" size={35} />
              <h3 className="font-bold text-xl text-[#111827] mt-5">
                Community
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-6">
                Support every sports lover and player.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
              <ShieldCheck className="text-[#F97316] mx-auto" size={35} />
              <h3 className="font-bold text-xl text-[#111827] mt-5">
                Trust
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-6">
                Build trust through a better shopping experience.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default About;
