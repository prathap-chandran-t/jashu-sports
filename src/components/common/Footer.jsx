import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold">
              JASHU <span className="text-[#F97316]">SPORTS</span>
            </h2>

            <p className="text-gray-400 text-sm leading-7 mt-5">
              Your trusted destination for quality sports products. Gear up,
              play hard and win big with JASHU SPORTS.
            </p>

            <div className="flex gap-4 mt-6">
              <span className="text-gray-400 font-bold hover:text-[#F97316] cursor-pointer">
                f
              </span>

              <span className="text-gray-400 font-bold hover:text-[#F97316] cursor-pointer">
                Instagram
              </span>

              <span className="text-gray-400 font-bold hover:text-[#F97316] cursor-pointer">
                X
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-[#F97316] cursor-pointer">Home</li>
              <li className="hover:text-[#F97316] cursor-pointer">Products</li>
              <li className="hover:text-[#F97316] cursor-pointer">
                Categories
              </li>
              <li className="hover:text-[#F97316] cursor-pointer">About Us</li>
              <li className="hover:text-[#F97316] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6">Categories</h3>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Cricket</li>
              <li>Football</li>
              <li>Jerseys</li>
              <li>Sports Shoes</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>

            <div className="space-y-5 text-gray-400 text-sm">
              <div className="flex gap-3">
                <MapPin className="text-[#F97316] shrink-0" size={20} />
                <p>Visit our sports store</p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-[#F97316] shrink-0" size={20} />
                <p>Contact us for enquiries</p>
              </div>

              <div className="flex gap-3">
                <Mail className="text-[#F97316] shrink-0" size={20} />
                <p>support@jashusports.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 JASHU SPORTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
