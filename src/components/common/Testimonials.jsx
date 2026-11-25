
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Cricket Player",
    review: "Good quality cricket bat. Product quality and delivery were excellent.",
  },
  {
    id: 2,
    name: "Rahul",
    role: "Football Player",
    review: "Amazing football collection. I really liked the product quality.",
  },
  {
    id: 3,
    name: "Karthik",
    role: "Sports Lover",
    review: "Affordable prices and great collection. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#F97316] font-bold tracking-widest text-sm">
            CUSTOMER FEEDBACK
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mt-3">
            WHAT OUR CUSTOMERS SAY
          </h2>

          <p className="text-gray-500 mt-4">
            Real experiences from our sports community.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 p-7 rounded-2xl border border-gray-100 hover:shadow-lg transition"
            >
              <Quote className="text-[#F97316]" size={30} />

              <div className="flex gap-1 mt-5 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mt-5">
                "{review.review}"
              </p>

              <div className="mt-7 border-t border-gray-200 pt-5">
                <h3 className="font-bold text-[#111827]">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
