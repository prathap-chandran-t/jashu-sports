
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Page Heading */}
      <section className="bg-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#F97316] font-bold tracking-widest text-sm">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            CONTACT US
          </h1>

          <p className="text-gray-300 mt-4">
            Have questions? We are happy to help you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-extrabold text-[#111827]">
              Let's Talk
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              Contact JASHU SPORTS for product enquiries,
              orders and customer support.
            </p>

            <div className="space-y-7 mt-10">

              <div className="flex gap-4 items-center">
                <MapPin className="text-[#F97316]" size={25} />
                <div>
                  <h3 className="font-bold text-[#111827]">Our Location</h3>
                  <p className="text-gray-500 text-sm">Visit our sports store</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <Phone className="text-[#F97316]" size={25} />
                <div>
                  <h3 className="font-bold text-[#111827]">Phone</h3>
                  <p className="text-gray-500 text-sm">Contact us for enquiries</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <Mail className="text-[#F97316]" size={25} />
                <div>
                  <h3 className="font-bold text-[#111827]">Email</h3>
                  <p className="text-gray-500 text-sm">
                    support@jashusports.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <Clock className="text-[#F97316]" size={25} />
                <div>
                  <h3 className="font-bold text-[#111827]">Working Hours</h3>
                  <p className="text-gray-500 text-sm">
                    Monday - Saturday
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#111827] mb-7">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#F97316] resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;
