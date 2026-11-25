
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Cricket",
    image: "/images/bat.jpg",
  },
  {
    id: 2,
    name: "Football",
    image: "/images/football.jpg",
  },
  {
    id: 3,
    name: "Jerseys",
    image: "/images/jersey.jpg",
  },
  {
    id: 4,
    name: "Sports Shoes",
    image: "/images/shoes.jpg",
  },
  {
    id: 5,
    name: "Badminton",
    image: "/images/badminton.jpg",
  },
  {
    id: 6,
    name: "Accessories",
    image: "/images/accessories.jpg",
  },
];

function Categories() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Page Heading */}
      <section className="bg-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#F97316] font-bold tracking-widest text-sm">
            EXPLORE COLLECTION
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            SHOP BY CATEGORIES
          </h1>

          <p className="text-gray-300 mt-4">
            Find the right equipment for your favorite sport.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h2 className="text-white text-2xl font-bold">
                  {category.name}
                </h2>

                <p className="text-gray-300 text-sm mt-2">
                  Explore Collection
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

export default Categories;
