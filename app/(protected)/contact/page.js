export const metadata = {
  title: "Contact Us | QuickPlace",
  description: "Contact QuickPlace for any queries or support.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold ">
          Contact Us
        </h1>
        <p className="text-gray-200 mt-4 text-lg">
          We'd love to hear from you. Feel free to reach out with any questions,
          feedback, or support requests.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="space-y-8">

          <div className="bg-white shadow-lg rounded-xl p-8">

            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  📍 Address
                </h3>

                <p className="text-gray-600 mt-2 leading-7">
                  4, Beginest Harbor, 464,
                  <br />
                  Shri Krishna Temple Rd,
                  <br />
                  Indira Nagar 1st Stage,
                  <br />
                  Stage 1, Indiranagar,
                  <br />
                  Bengaluru,
                  <br />
                  Karnataka - 560038
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  📞 Phone
                </h3>

                <a
                  href="tel:08068628915"
                  className="text-blue-600 text-gray-800 hover:underline"
                >
                  080 6862 8915
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  📧 Email
                </h3>

                <p className="text-gray-600">
                  support@quickplace.com
                </p>
              </div>

            </div>
          </div>

          {/* Google Map */}

          <div className="bg-white shadow-lg rounded-xl overflow-hidden">

            <iframe
              src="https://www.google.com/maps?q=4,+Beginest+Harbor,+464,+Shri+Krishna+Temple+Rd,+Indira+Nagar+1st+Stage,+Stage+1,+Indiranagar,+Bengaluru,+Karnataka+560038&output=embed"
              width="100%"
              height="350"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="p-4 text-center">

              <a
                href="https://maps.app.goo.gl/ZcBr7z7TQAhc5pzt5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View on Google Maps →
              </a>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="bg-white shadow-lg rounded-xl p-8">

          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5">

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}